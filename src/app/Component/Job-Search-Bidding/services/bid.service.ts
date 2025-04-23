import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BidService {
  private apiUrl = '/api/bids';

  constructor(private http: HttpClient) { }

  submitBid(bid: BidService) {
    return this.http.post(this.apiUrl, bid);
  }
}
