export interface Job {
  id: number;
  title: string;
  description: string;
  category: string;
  budget: number;
  deadline?: Date; 
  location: string;
  status: string;
}
