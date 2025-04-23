import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-job-postings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-postings.component.html',
  styleUrls: ['./job-postings.component.css']
})
export class JobPostingsComponent {

  jobs = [
    {
      title: 'Networking Engineer',
      postedBy: 'Cody Fisher',
      date: 'Mar 10, 2024',
      status: 'Active',
      action: '',
    },
    {
      title: 'Product Designer',
      postedBy: 'Kristin Watson',
      date: 'Feb 26, 2024',
      status: 'Active',
      action: '',
    },
    {
      title: 'Web Developer',
      postedBy: 'Jane Cooper',
      date: 'Feb 15, 2024',
      status: 'Active',
      action: '',
    },
    {
      title: 'Transactions',
      postedBy: 'Sain Johns',
      date: 'Mar 6, 2024',
      status: 'Active',
      action: '',
    },
  ];


  removeJob(job: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to remove this job?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel',
      backdrop: true,
      position: 'center',
  customClass: {
    popup: 'custom-swal-popup'

  },
    }).then((result) => {
      if (result.isConfirmed) {
      
        this.jobs = this.jobs.filter(j => j !== job);

        Swal.fire({
          icon: 'success',
          title: 'Removed!',
          text: 'The job has been removed.',
          position: 'center',
          timer: 2000,
          showConfirmButton: false,
          customClass: {
            popup: 'swal-sm-popup',
            title: 'swal-sm-title',
            htmlContainer: 'swal-sm-text',
            icon: 'swal-sm-icon'
          }
        });

      }
    });
  }


  getBadgeClass(status: string): string {
    if (status === 'Remove') return 'bg-danger text-white';
    if (status === 'Active') return 'bg-success text-white';
    return 'bg-secondary text-white';
  }
}
