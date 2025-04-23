import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Swal from 'sweetalert2';

interface TableEntry {
  id: number;
  jobTitle: string;
  clientName: string;
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
  styleUrl: './job-bid-table.component.css'
})
export class JobBidTableComponent {
  sortColumn: string = '';
  sortAsc: boolean = true;
  searchTerm: string = '';

  tables: TableEntry[] = [
    { id: 1, jobTitle: 'Painter', clientName: 'Waleed Arman', price: 100, submissionDate: '20 May, 2023', status: 'Pending', processed: false },
    { id: 2, jobTitle: 'Tiler', clientName: 'Ali Yauqop', price: 150, submissionDate: '22 May, 2023', status: 'Pending', processed: false },
    { id: 3, jobTitle: 'Carpenter', clientName: 'Ahmad Musleh', price: 200, submissionDate: '23 May, 2023', status: 'Pending', processed: false },
    { id: 4, jobTitle: 'Electrician', clientName: 'Omar Soud', price: 180, submissionDate: '24 May, 2023', status: 'Pending', processed: false },
    { id: 5, jobTitle: 'Plumber', clientName: 'Ahmad Irshad', price: 170, submissionDate: '25 May, 2023', status: 'Pending', processed: false },
    { id: 6, jobTitle: 'Painter', clientName: 'Fadi Hamed', price: 100, submissionDate: '26 May, 2023', status: 'Pending', processed: false },
    { id: 7, jobTitle: 'Tiler', clientName: 'Salem Naji', price: 150, submissionDate: '27 May, 2023', status: 'Pending', processed: false },
    { id: 8, jobTitle: 'Electrician', clientName: 'Hassan Nabil', price: 180, submissionDate: '28 May, 2023', status: 'Pending', processed: false },
    { id: 9, jobTitle: 'Plumber', clientName: 'Yousef Jaber', price: 170, submissionDate: '29 May, 2023', status: 'Pending', processed: false }
  ];
  


  get Tables() {
    if (!this.searchTerm) return this.tables;
    const term = this.searchTerm.toLowerCase();
    return this.tables.filter(table =>
      Object.values(table).some(val =>
        val.toString().toLowerCase().includes(term)
      )
    );
  }

  toggleSort(column: string) {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }

    this.tables.sort((a, b) => {
      let valA = a[column as keyof TableEntry];
      let valB = b[column as keyof TableEntry];

      if (column === 'price') {
        valA = Number(valA);
        valB = Number(valB);
      }

      if (column === 'submissionDate') {
        const dateA = new Date(valA as string);
        const dateB = new Date(valB as string);
        return this.sortAsc ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
      }

      if (valA! < valB!) return this.sortAsc ? -1 : 1;
      if (valA! > valB!) return this.sortAsc ? 1 : -1;
      return 0;
    });
  }

  exportToExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.tables);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, 'Proposal_and_Approval_Management.xlsx');
  }

  exportToCSV(): void {
    const csvData = this.convertToCSV(this.tables);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(blob, 'tables.csv');
  }

  convertToCSV(objArray: any[]): string {
    const headers = Object.keys(objArray[0]);
    const csvRows = [headers.join(',')];
    for (const row of objArray) {
      const values = headers.map(header => `"${row[header]}"`);
      csvRows.push(values.join(','));
    }
    return csvRows.join('\r\n');
  }

  exportToJSON(): void {
    const json = JSON.stringify(this.tables, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    FileSaver.saveAs(blob, 'Proposal_and_Approval_Management.json');
  }

  generatePDF(): void {
    const doc = new jsPDF();
    const headers = [['ID', 'Job Title', 'Client Name', 'Price', 'Submission Date', 'Status']];
    const rows = this.tables.map(table => [
      table.id,
      table.jobTitle,
      table.clientName,
      `${table.price} SAR`,
      table.submissionDate,
      table.status
      
    ]);

    autoTable(doc, {
      head: headers,
      body: rows,
    });

    doc.save('Proposal_and_Approval_Management.pdf');
  }

  acceptTable(table: TableEntry): void {
    table.status = 'Approved';
    table.processed = true;
  }

  rejectTable(table: TableEntry): void {
    Swal.fire({
      title: 'Are you sure you want to reject?',
      text: 'This request will be marked as rejected!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Reject',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#e74c3c',
      cancelButtonColor: '#3498db',
    }).then((result) => {
      if (result.isConfirmed) {
        table.status = 'Rejected';
        table.processed = true;
        Swal.fire({
          icon: 'success',
          title: 'Rejected!',
          text: 'The request has been rejected successfully.',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  }

  ngOnInit() {
    this.tables.forEach(table => {
      table.status = table.status || 'Pending';
      if (table.processed === undefined) {
        table.processed = false;
      }
    });
  }
}
