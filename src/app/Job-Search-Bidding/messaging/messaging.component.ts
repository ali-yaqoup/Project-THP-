import { CommonModule, NgFor } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Input } from '@angular/core';


@Component({
  selector: 'app-messaging',
  standalone: true,
  template: `
    <div class="card mt-4 shadow border-primary border-2">
      <div class="card-header bg-primary text-white">
        <strong>Messages</strong>
        <span *ngIf="jobId" class="text-white-50">(Job ID: {{ jobId }})</span>
      </div>

      <div class="card-body">
        <div *ngIf="messages.length === 0" class="text-muted mb-3">
          No messages yet.
        </div>

        <div *ngFor="let msg of messages" class="alert alert-info p-2">
          {{ msg.content }}
        </div>

        <div class="input-group mt-3">
          <input type="text"
                 class="form-control"
                 [(ngModel)]="newMessage"
                 placeholder="Type a message...">
          <button class="btn btn-outline-primary" (click)="sendMessage()">Send</button>
        </div>
      </div>
    </div>
  `,
  imports: [FormsModule, NgFor, CommonModule]
})
export class MessagingComponent implements OnInit {
  private route = inject(ActivatedRoute);


  messages = [
    { content: 'Hello, when can you start?' }
  ];
  newMessage = '';

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const idParam = params.get('jobId');
      this.jobId = idParam ? +idParam : null;
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ content: this.newMessage });
      this.newMessage = '';
    }
  }
  @Input() jobId: number | null = null;
}
