/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { forwardRef } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Virtuoso, Components, VirtuosoHandle } from "react-virtuoso";
import MessageItem from "../../../core/components/MessageItem";
import VirtualItemWrapper from "../../../core/components/VirtualItemWrapper";
import { RootState } from "../../../core/store";
import ConversationListeners from "../store/ConversationListeners";
import { MESSAGES_PAGINATION_LIMIT } from "../store/conversationSlice";
import { fetchMessages } from "../store/fetchActions";

const MessagesList = forwardRef<VirtuosoHandle>((_, ref) => {
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

  const handleFetchMoreMessages = () => {
    // Prevent refetch, when endReached falsy triggers
    const messagesLength = messages?.length || 0;
    if (messagesLength < MESSAGES_PAGINATION_LIMIT) return;

    dispatch(fetchMessages());
  };

  return (
    <div css={{ height: "calc(100% - 161px)", padding: "16px 16px 0 16px" }}>
      <ConversationListeners>
        {messages && (
          <Virtuoso
            ref={ref}
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
});

export default MessagesList;
