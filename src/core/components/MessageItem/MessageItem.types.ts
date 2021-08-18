import { Message } from "../../firebase/models";

export type MessageItemVariant = "conversation" | "thread" | "thread-header";

export type MessageItemProps = {
  variant?: MessageItemVariant;
  message: Message;
};
