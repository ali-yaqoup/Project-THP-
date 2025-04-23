import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/message.interface';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private apiUrl = '/api/messages';

  constructor(private http: HttpClient) {}

  getMessages(jobId: number) {
    return this.http.get<Message[]>(`${this.apiUrl}?jobId=${jobId}`);
  }

  sendMessage(message: Message) {
    return this.http.post(this.apiUrl, message);
  }
}
