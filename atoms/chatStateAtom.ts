import { atom } from "jotai";

export const chatStateAtom = atom<Message[]>([]);

export interface Message {
  id: number;
  content: string;
  timestamp: Date;
  sender: 'user' | 'police';
}
