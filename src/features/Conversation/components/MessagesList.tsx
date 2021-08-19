/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { forwardRef } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Virtuoso, Components } from "react-virtuoso";
import MessageItem from "../../../core/components/MessageItem";
import VirtualItemWrapper from "../../../core/components/VirtualItemWrapper";
import { Message } from "../../../core/firebase/models";
import { RootState } from "../../../core/store";
import ConversationListeners from "../store/ConversationListeners";
import { fetchMessages } from "../store/fetchActions";

export const tempMessages: Message[] = [
  {
    id: "0",
    username: "Elijah Atamas",
    date: new Date().toString(),
    repliesFrom: ["Elijah Atamas"],
    replyTo: null,
    message: "А нужно ли вообще синхронизировать отгрузку на десктопе и онбоардинг на телефоне?",
  },
  {
    id: "1",
    username: "Slava Yefremov",

    date: new Date().toString(),
    repliesFrom: ["Slava Yefremov", "Elijah Atamas"],
    replyTo: null,
    message:
      "Тут подумал, что если мы будем брать имейл юзера и делать из него юзернейм путем обрезания адреса его эл. почты, то мы не сможем сделать так для юзеров, которые вошли через фейсбук, где у них нет почты, а только телефон есть. Как вариант, в таком случае можно фейсбуковский юзернейм брать и его устанавливать как юзернейм ридма на этом этапе",
  },
].reverse();

const MessagesList = () => {
  const messages = useSelector((state: RootState) => state.conversation.messages);
  const dispatch = useDispatch();

  const Components: Components = useMemo(
    () => ({
      List: forwardRef(({ style, children }, listRef) => (
        <div style={style} ref={listRef}>
          {children}
        </div>
      )),
      item: VirtualItemWrapper,
    }),
    []
  );

  const handleFetchMoreMessages = () => dispatch(fetchMessages());

  return (
    <div css={{ height: "calc(100% - 161px)", padding: "16px 16px 0 16px" }}>
      <ConversationListeners>
        {messages && (
          <Virtuoso
            data={messages}
            components={Components}
            endReached={handleFetchMoreMessages}
            style={{ transform: "rotate(180deg) scaleX(-1)" }}
            itemContent={(_, message) => <MessageItem key={message.id} message={message} />}
          />
        )}
      </ConversationListeners>
    </div>
  );
};

export default MessagesList;
