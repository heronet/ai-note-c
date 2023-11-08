import { cn } from "@/lib/utils";
import { CrossCircledIcon, CubeIcon, TrashIcon } from "@radix-ui/react-icons";
import { useChat } from "ai/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import AiChatMessage from "./ai-chat-message";
import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const AiChatBox = ({ open, onClose }: Props) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-10 w-full max-w-[500px] p-1 md:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <CrossCircledIcon width={30} height={30} />
      </button>
      <div className="flex h-[600px] flex-col rounded border bg-background shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
          {messages.map((msg) => (
            <AiChatMessage message={msg} key={msg.id} />
          ))}
          {isLoading && lastMessageIsUser && (
            <AiChatMessage
              message={{ role: "assistant", content: "Thinking..." }}
            />
          )}
          {error && (
            <AiChatMessage
              message={{
                role: "assistant",
                content: "Something webt wrong...",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="flex h-full items-center justify-center gap-3">
              <CubeIcon />
              Ask the AI question about your notes
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <Button
            title="clear chat"
            variant={"outline"}
            size={"icon"}
            className="shrink-0"
            type="button"
            onClick={() => setMessages([])}
          >
            <TrashIcon />
          </Button>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Say something..."
            ref={inputRef}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default AiChatBox;
