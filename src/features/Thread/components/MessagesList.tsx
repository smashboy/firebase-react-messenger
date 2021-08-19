/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { forwardRef } from "react";
import { useMemo } from "react";
import { Virtuoso, Components, VirtuosoHandle } from "react-virtuoso";
import MessageItem from "../../../core/components/MessageItem";
import VirtualItemWrapper from "../../../core/components/VirtualItemWrapper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../core/store";
import ThreadListeners from "../store/ThreadListeners";
import { fetchReplies } from "../store/fetchActions";
import { REPLIES_PAGINATION_LIMIT } from "../store/threadSlice";

const MessagesList = forwardRef<VirtuosoHandle>((_, ref) => {
  const replies = useSelector((state: RootState) => state.thread.replies);
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
    const messagesLength = replies?.length || 0;
    if (messagesLength < REPLIES_PAGINATION_LIMIT) return;

    dispatch(fetchReplies());
  };

  return (
    <div css={{ height: "calc(100% - 95px)", padding: "16px 16px 0 16px" }}>
      <ThreadListeners>
        {replies && (
          <Virtuoso
            ref={ref}
            data={replies}
            components={Components}
            endReached={handleFetchMoreMessages}
            itemContent={(_, message) => (
              <MessageItem key={message.id} message={message} variant="thread" />
            )}
          />
        )}
      </ThreadListeners>
    </div>
  );
});

export default MessagesList;
