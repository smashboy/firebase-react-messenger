export type Conversation = {
  id: string;
  name: string;
};

export type Message = {
  id: string;
  username: string;
  avatarUrl: string;
  date: Date;
  message: string;
  repliesFrom?: string[];
  replyTo?: string;
};
