/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { forwardRef } from "react";
import { useMemo } from "react";
import { Virtuoso, Components } from "react-virtuoso";
import MessageItem from "../../../core/components/MessageItem";
import { Message } from "../../../core/firebase/models";
import VirtualItemWrapper from "../../../core/components/VirtualItemWrapper";

export const tempMessages: Message[] = [
  {
    id: "0",
    username: "Elijah Atamas",
    avatarUrl:
      "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
    date: new Date(),
    message: "А нужно ли вообще синхронизировать отгрузку на десктопе и онбоардинг на телефоне?",
  },
  {
    id: "1",
    username: "Slava Yefremov",
    avatarUrl:
      "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
    date: new Date(),
    message:
      "Тут подумал, что если мы будем брать имейл юзера и делать из него юзернейм путем обрезания адреса его эл. почты, то мы не сможем сделать так для юзеров, которые вошли через фейсбук, где у них нет почты, а только телефон есть. Как вариант, в таком случае можно фейсбуковский юзернейм брать и его устанавливать как юзернейм ридма на этом этапе",
  },
];

const MessagesList = () => {
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

  return (
    <div css={{ height: "calc(100% - 95px)", padding: "16px 16px 0 16px" }}>
      <Virtuoso
        data={tempMessages}
        components={Components}
        itemContent={(_, message) => (
          <MessageItem key={message.id} message={message} variant="thread" />
        )}
      />
    </div>
  );
};

export default MessagesList;
