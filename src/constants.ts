import { Service, QuizQuestion, Room } from './types';

export const SERVICES: Service[] = [
  {
    id: 'out-patient',
    name: 'OP Consultation',
    description: 'Expert guidance and personalized treatment plans for your daily health and wellness needs.',
    benefits: ['Personalized Assessment', 'Lifestyle Guidance', 'Herbal Recommendations', 'Preventive Care'],
    price: 'Contact for Price',
    image: 'https://picsum.photos/seed/consult/800/600'
  },
  {
    id: 'in-patient',
    name: 'IP Consultation and Treatments',
    description: 'Intensive residential care providing a holistic environment for profound healing and recovery.',
    benefits: ['24/7 Care', 'Personalized Diet', 'Daily Therapies', 'Deep Detoxification'],
    price: 'Contact for Price',
    image: 'https://picsum.photos/seed/inpatient/800/600'
  },
  {
    id: 'ayurvedic-therapies',
    name: 'Ayurvedic Therapies',
    description: 'Traditional healing practices designed to restore balance and vitality through specialized physical treatments.',
    benefits: ['Stress Relief', 'Physical Rejuvenation', 'Dosha Balancing', 'Toxin Removal'],
    price: 'Varies',
    image: 'https://picsum.photos/seed/therapy/800/600'
  },
  {
    id: 'abhyanga',
    name: 'Abhyanga',
    description: 'A traditional Ayurvedic full-body massage using warm herb-infused oils tailored to your dosha.',
    benefits: ['Improves circulation', 'Reduces stress', 'Nourishes the skin', 'Balances the nervous system'],
    price: '$120',
    image: 'https://picsum.photos/seed/massage/800/600'
  },
  {
    id: 'shirodhara',
    name: 'Shirodhara',
    description: 'A continuous stream of warm oil gently poured over the forehead (third eye) to induce deep relaxation.',
    benefits: ['Relieves anxiety', 'Improves sleep quality', 'Enhances mental clarity', 'Balances hormones'],
    price: '$150',
    image: 'https://picsum.photos/seed/oil/800/600'
  },
  {
    id: 'panchakarma',
    name: 'Panchakarma Detox',
    description: 'A comprehensive five-step detoxification process to cleanse the body of toxins and restore balance.',
    benefits: ['Deep detoxification', 'Boosts immunity', 'Slows aging process', 'Restores metabolic fire'],
    price: 'From $500',
    image: 'https://picsum.photos/seed/detox/800/600'
  },
  {
    id: 'nasya',
    name: 'Nasya Therapy',
    description: 'Administration of herbal oils through the nasal passages to clear the head and neck region.',
    benefits: ['Clears sinuses', 'Improves respiratory health', 'Relieves headaches', 'Enhances sensory perception'],
    price: '$80',
    image: 'https://picsum.photos/seed/herbs/800/600'
  }
];

export const ROOMS: Room[] = [
  {
    id: 'general-ward',
    name: 'General Ward',
    description: 'Shared accommodation designed for focused healing and community support.',
    amenities: ['Shared Bathroom', 'Nursing Support', 'Ayurvedic Meals'],
    image: 'https://picsum.photos/seed/ward/800/600'
  },
  {
    id: 'standard-room',
    name: 'Standard Room',
    description: 'Private room with essential amenities for a peaceful recovery.',
    amenities: ['Private Bathroom', 'AC', 'Ayurvedic Meals', 'Daily Doctor Visit'],
    image: 'https://picsum.photos/seed/room/800/600'
  },
  {
    id: 'deluxe-suite',
    name: 'Deluxe Suite',
    description: 'Premium private suite with garden views and personalized 24/7 care.',
    amenities: ['Private Garden', 'Personal Attendant', 'Gourmet Ayurvedic Diet', 'Private Consultation Area'],
    image: 'https://picsum.photos/seed/suite/800/600'
  }
];

export const DOSHA_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: "How would you describe your physical build?",
    options: [
      { text: "Thin, light, and prominent joints", dosha: "Vata" },
      { text: "Medium, well-proportioned, and athletic", dosha: "Pitta" },
      { text: "Large, sturdy, and tends to gain weight easily", dosha: "Kapha" }
    ]
  },
  {
    id: 2,
    question: "How is your skin usually?",
    options: [
      { text: "Dry, rough, and cool to the touch", dosha: "Vata" },
      { text: "Oily, sensitive, and warm", dosha: "Pitta" },
      { text: "Thick, moist, and cool", dosha: "Kapha" }
    ]
  },
  {
    id: 3,
    question: "How do you react to stress?",
    options: [
      { text: "I get anxious and worried", dosha: "Vata" },
      { text: "I get irritable and angry", dosha: "Pitta" },
      { text: "I become withdrawn and calm", dosha: "Kapha" }
    ]
  },
  {
    id: 4,
    question: "What is your typical sleep pattern?",
    options: [
      { text: "Light, interrupted, and I often have trouble falling asleep", dosha: "Vata" },
      { text: "Moderate but sound, I feel rested with 7-8 hours", dosha: "Pitta" },
      { text: "Deep, long, and I have trouble waking up in the morning", dosha: "Kapha" }
    ]
  }
];
