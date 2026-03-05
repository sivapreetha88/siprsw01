export interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  price: string;
  image: string;
}

export type Dosha = 'Vata' | 'Pitta' | 'Kapha';

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    dosha: Dosha;
  }[];
}

export interface Appointment {
  name: string;
  email: string;
  date: string;
  serviceId: string;
  message?: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  image: string;
}
