export interface User {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    events: Event[];
  }
  
  export interface Event {
    id: number;
    eventName?: string;
    eventDate?: Date;
    totalCost?: number;
    totalGuests?: number;
    guests?: Guest[];
    costs?: Cost[];
    location?: Location;
  }
  
  export interface Location {
    address?: string;
    capacity?: number;
    locationName?: string;
    isPaid?: boolean;
  }
  
  export interface Guest {
    id?: number;
    guestName?: string;
    address?: string;
    phone?: number;
    attendantNumber?: number;
  }
  
  export interface Cost {
    id?: number;
    costName?: string;
    costAmount?: number;
    isPaid?: boolean;
  }