import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-posting-generted',
  imports: [CommonModule, RouterLink],
  templateUrl: './posting-generted.component.html',
  styleUrl: './posting-generted.component.css'
})
export class PostingGenertedComponent {
cards = [
    {
      id: 1,
      imageUrl: 'assets/building.jpg',
      title: 'Renovation and Painting of Building Exterior',
      category: 'Construction',
      text: 'Complete renovation and painting of the building exterior, including surface preparation, sealing cracks, applying high-quality weather-resistant paint, and ensuring long-lasting protection against environmental elements. The project aims to enhance the building’s aesthetic appeal and structural integrity.',
      deadline: 'June 10, 2025',
      minBudget: '$15,000',
      maxBudget: '$25,000',
    },
    {
      id: 2,
      imageUrl: 'assets/Carpentry.jpg',
      title: 'Custom Carpentry and Painting for Living Space',
      category: 'Carpentry',
      text: 'This project includes high-quality custom carpentry work such as building bespoke furniture, installing wooden panels, and detailed trim work, followed by premium painting services to complement the design. Emphasis will be placed on craftsmanship, durability, and harmonizing with the overall interior style.',
      deadline: 'July 15, 2025',
      minBudget: '$10,000',
      maxBudget: '$18,000',
    },
    {
      id: 3,
      imageUrl: 'assets/Tile.jpg',
      title: 'Tile Installation and Wall Painting for Bathroom',
      category: 'Tiling',
      text: 'This project involves the installation of high-quality ceramic or porcelain tiles on bathroom floors and walls, ensuring water resistance, slip safety, and elegant design. The project also includes painting walls and ceilings with mold-resistant paints, creating a fresh and clean environment.',
      deadline: 'August 25, 2025',
      minBudget: '$8,000',
      maxBudget: '$14,000',
    },
    {
      id: 4,
      imageUrl: 'assets/electricity.jpg',
      title: 'Electrical System Upgrade and Room Painting',
      category: 'Electrical',
      text: 'This project requires an upgrade of the existing electrical system, including rewiring, new circuit installations, modern socket and lighting fixture upgrades, and compliance with safety codes. Following the electrical work, interior painting will be performed to restore and refresh the spaces.',
      deadline: 'September 30, 2025',
      minBudget: '$12,000',
      maxBudget: '$20,000',
    },
    {
      id: 5,
      imageUrl: 'assets/Glass.jpg',
      title: 'Glasswork and Interior Painting',
      category: 'Interior Design',
      text: 'This project involves innovative glasswork integration, such as installing decorative glass partitions, custom mirrors, and modern glass doors. The scope also covers complementary interior painting to harmonize with the new glass features, enhancing the overall sense of openness and light within the space.',
      deadline: 'October 15, 2025',
      minBudget: '$18,000',
      maxBudget: '$30,000',
    },
    {
      id: 6,
      imageUrl: 'assets/Blacksmith.jpg',
      title: 'Metalwork and Outdoor Painting for Patio',
      category: 'Metalwork',
      text: 'This outdoor renovation project involves custom metalwork fabrication for gates, railings, and patio furniture, crafted with durable and weather-resistant materials. The work will be complemented with outdoor painting services to protect and beautify metal structures, ensuring longevity and aesthetic appeal.',
      deadline: 'November 20, 2025',
      minBudget: '$12,500',
      maxBudget: '$22,000',
    },{
      id: 1,
      imageUrl: 'assets/building.jpg',
      title: 'Renovation and Painting of Building Exterior',
      category: 'Construction',
      text: 'Complete renovation and painting of the building exterior, including surface preparation, sealing cracks, applying high-quality weather-resistant paint, and ensuring long-lasting protection against environmental elements. The project aims to enhance the building’s aesthetic appeal and structural integrity.',
      deadline: 'June 10, 2025',
      minBudget: '$15,000',
      maxBudget: '$25,000',
    },
    {
      id: 2,
      imageUrl: 'assets/Carpentry.jpg',
      title: 'Custom Carpentry and Painting for Living Space',
      category: 'Carpentry',
      text: 'This project includes high-quality custom carpentry work such as building bespoke furniture, installing wooden panels, and detailed trim work, followed by premium painting services to complement the design. Emphasis will be placed on craftsmanship, durability, and harmonizing with the overall interior style.',
      deadline: 'July 15, 2025',
      minBudget: '$10,000',
      maxBudget: '$18,000',
    },
    {
      id: 3,
      imageUrl: 'assets/Tile.jpg',
      title: 'Tile Installation and Wall Painting for Bathroom',
      category: 'Tiling',
      text: 'This project involves the installation of high-quality ceramic or porcelain tiles on bathroom floors and walls, ensuring water resistance, slip safety, and elegant design. The project also includes painting walls and ceilings with mold-resistant paints, creating a fresh and clean environment.',
      deadline: 'August 25, 2025',
      minBudget: '$8,000',
      maxBudget: '$14,000',
    }
  ];
  

  onEdit(card: any) {
    alert(`Editing: ${card.title}`);
  }

  onDelete(card: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This post will be permanently deleted.!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'custom-swal-popup',
        confirmButton: 'custom-swal-confirm',
        cancelButton: 'custom-swal-cancel'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.cards = this.cards.filter(c => c !== card);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'The Post has been deleted.',
          timer: 1500,
          showConfirmButton: false,
          customClass: {
            popup: 'custom-swal-popup'
          }
        });
      }
    });
  }
}
