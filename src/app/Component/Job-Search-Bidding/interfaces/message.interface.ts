export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  jobId: number;
  content: string;
  timestamp: Date;
}
