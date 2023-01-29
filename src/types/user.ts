export interface User {
  id?: string;
  name: string;
  contact: Contact;
  preferences: string[];
  timezone?: string;
}

export interface Contact {
  discord?: string;
  instagram?: string;
  snapchat?: string;
  email: string;
}
