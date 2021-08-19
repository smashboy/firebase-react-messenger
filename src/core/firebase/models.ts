export interface Conversation {
  id: string;
  name: string;
}

export interface NewMessage {
  username: string;
  date: string;
  message: string;
  repliesFrom: string[];
  repliesCounter: number;
  replyTo: string | null;
}

export interface Message extends NewMessage {
  id: string;
}

export interface NewConversation {
  name: string;
}

export interface Conversation extends NewConversation {
  id: string;
}
