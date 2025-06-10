import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Swal from 'sweetalert2';
import { PostService } from '../../services/post.service';

interface TableEntry {
  id: number;
  jobTitle: string;
  clientName: string;
  phone: string;
  price: number;
  submissionDate: string;
  status: string;
  processed: boolean;
}

@Component({
  selector: 'app-job-bid-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-bid-table.component.html',
  styleUrls: ['./job-bid-table.component.css'],
  providers: [PostService]
})
export class JobBidTableComponent implements OnInit {
  post_id!: number;
  bids: TableEntry[] = [];
  filteredBids: TableEntry[] = [];

  sortColumn: string = '';
  sortAsc: boolean = true;
  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private bidService: PostService
  ) {}

  ngOnInit(): void {
    this.post_id = +this.route.snapshot.paramMap.get('post_id')!;
    this.loadBids();
  }

  loadBids(): void {
    this.bidService.getBidsByPost(this.post_id).subscribe({
      next: (data) => {
        this.bids = data.map((bid: any) => ({
          id: bid.id,
          jobTitle: bid.job_title ?? '',
          clientName: bid.client_name ?? 'Unknown',
          phone:bid.phone??'',
          price: bid.price ?? 0,
          submissionDate: bid.submission_date ?? '',
          status: bid.status ?? 'Pending',
          processed: bid.processed ?? false
        }));
        this.filteredBids = [...this.bids];
      },
      error: (err) => {
        console.error('Failed to load bids', err);
      }
    });
  }

  get Tables(): TableEntry[] {
    let filtered = this.bids;

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(bid =>
        Object.values(bid).some(val =>
          val.toString().toLowerCase().includes(term)
        )
      );
    }

    if (this.sortColumn) {
      filtered.sort((a, b) => {
        let valA = (a as any)[this.sortColumn];
        let valB = (b as any)[this.sortColumn];

        if (this.sortColumn === 'price') {
          valA = Number(valA);
          valB = Number(valB);
        }

        if (this.sortColumn === 'submissionDate') {
          const dateA = new Date(valA);
          const dateB = new Date(valB);
          return this.sortAsc ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
        }

        if (valA < valB) return this.sortAsc ? -1 : 1;
        if (valA > valB) return this.sortAsc ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }

  toggleSort(column: string): void {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }
  }

  exportToExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.Tables);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, 'bids.xlsx');
  }

  exportToCSV(): void {
    const csvData = this.convertToCSV(this.Tables);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(blob, 'bids.csv');
  }

  exportToJSON(): void {
    const json = JSON.stringify(this.Tables, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    FileSaver.saveAs(blob, 'bids.json');
  }

  generatePDF(): void {
    const doc = new jsPDF();
    const headers = [['ID', 'Job Title', 'Client Name','phone', 'Price', 'Submission Date', 'Status']];
    const rows = this.Tables.map(bid => [
      bid.id,
      bid.jobTitle,
      bid.clientName,
       bid.phone,
      `${bid.price} SAR`,
      bid.submissionDate,
      bid.status
    ]);
    autoTable(doc, {
      head: headers,
      body: rows,
    });
    doc.save('bids.pdf');
  }

  convertToCSV(objArray: any[]): string {
    if (!objArray.length) return '';
    const headers = Object.keys(objArray[0]);
    const csvRows = [headers.join(',')];
    for (const row of objArray) {
      const values = headers.map(header => `"${row[header]}"`);
      csvRows.push(values.join(','));
    }
    return csvRows.join('\r\n');
  }

  acceptTable(bid: TableEntry): void {
    this.bidService.updateBidStatus(bid.id, 'Approved').subscribe({
      next: () => {
        bid.status = 'Approved';
        bid.processed = true;
        Swal.fire({
          icon: 'success',
          title: 'Approved',
          text: 'The bid has been successfully approved.',
          timer: 2000,
          showConfirmButton: false,
        });
      },
      error: (err) => {
        console.error('Failed to approve the bid', err);
        Swal.fire('Error', 'An error occurred while approving the bid', 'error');
      }
    });
  }

  rejectTable(bid: TableEntry): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'The bid will be marked as rejected!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, reject',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#e74c3c',
      cancelButtonColor: '#3498db',
    }).then((result) => {
      if (result.isConfirmed) {
        this.bidService.updateBidStatus(bid.id, 'Rejected').subscribe({
          next: () => {
            bid.status = 'Rejected';
            bid.processed = true;
            Swal.fire({
              icon: 'success',
              title: 'Rejected',
              text: 'The bid has been successfully rejected.',
              timer: 2000,
              showConfirmButton: false,
            });
          },
          error: (err) => {
            console.error('Failed to reject the bid', err);
            Swal.fire('Error', 'An error occurred while rejecting the bid', 'error');
          }
        });
      }
    });
  }
}
