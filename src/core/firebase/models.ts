export interface Conversation {
  id: string;
  name: string;
}

export interface NewMessage {
  username: string;
  avatarUrl: string;
  date: Date;
  message: string;
  repliesFrom?: string[];
  replyTo?: string;
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
