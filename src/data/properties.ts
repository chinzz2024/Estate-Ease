
export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  rating: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  type: 'Apartments' | 'House' | 'Villa' | 'Hotel' | 'Penthouse' | 'Land';
  forSale: boolean;
  agent: {
    name: string;
    phone: string;
    image: string;
  };
}

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Modern 2 Bedroom Apartment',
    price: 1200,
    location: 'Downtown, New York',
    beds: 2,
    baths: 2,
    sqft: 1200,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'A beautiful and spacious apartment located in the heart of downtown New York. This modern apartment offers an open floor plan, updated kitchen, and stunning city views. Enjoy amenities like a rooftop terrace, fitness center, and 24-hour concierge. Perfect for professionals and families alike, it features hardwood floors, high ceilings, and abundant natural light. The building is pet-friendly and includes in-unit laundry.',
    features: ['Parking', 'Kitchen', 'Free Wifi', 'Garden', 'Pool'],
    type: 'Apartments',
    forSale: false,
    agent: {
      name: 'Sarah Johnson',
      phone: '+1 (555) 123-4567',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
  },
  {
    id: '2',
    title: 'Luxury Villa with Garden View',
    price: 2500,
    location: 'Manhattan, New York',
    beds: 3,
    baths: 3,
    sqft: 2000,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Stunning luxury villa with beautiful garden views and modern amenities.',
    features: ['Parking', 'Garden', 'Pool', 'Gym'],
    type: 'Villa',
    forSale: true,
    agent: {
      name: 'Mike Chen',
      phone: '+1 (555) 987-6543',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
  },
  {
    id: '3',
    title: 'Cozy House in the Suburbs',
    price: 950,
    location: 'Queens, New York',
    beds: 4,
    baths: 2,
    sqft: 1800,
    rating: 4.2,
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
     images: ['https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'A charming house with a large backyard, perfect for families.',
    features: ['Parking', 'Garden', 'Pet-friendly'],
    type: 'House',
    forSale: false,
    agent: {
      name: 'Jane Doe',
      phone: '+1 (555) 555-5555',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    },
  },
  {
    id: '4',
    title: 'Downtown Penthouse with Cityscape',
    price: 4500,
    location: 'Financial District, New York',
    beds: 2,
    baths: 3,
    sqft: 1600,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
     images: ['https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Experience luxury living in this stunning penthouse with panoramic city views.',
    features: ['Pool', 'Gym', 'Concierge', 'Rooftop Terrace'],
    type: 'Penthouse',
    forSale: false,
    agent: {
      name: 'John Smith',
      phone: '+1 (555) 111-2222',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
  },
  {
    id: '5',
    title: 'Sunny Studio in Brooklyn',
    price: 800,
    location: 'Bushwick, Brooklyn',
    beds: 1,
    baths: 1,
    sqft: 600,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
   images: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'A bright and cozy studio apartment in a vibrant neighborhood. Close to public transport and local cafes.',
    features: ['Kitchen', 'Free Wifi', 'Pet-friendly'],
    type: 'Apartments',
    forSale: false,
    agent: {
      name: 'Emily Rose',
      phone: '+1 (555) 333-4444',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    },
  },
];