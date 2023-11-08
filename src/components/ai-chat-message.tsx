import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { CubeIcon } from "@radix-ui/react-icons";
import { Message } from "ai/react";
import Image from "next/image";

type Props = {
  message: Partial<Message>;
};
const AiChatMessage = ({ message }: Props) => {
  const { user } = useUser();
  const isAiMessage = message.role === "assistant";
  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && <CubeIcon className="mr-2 shrink-0" />}
      <p
        className={cn(
          "whitespace-pre-line rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-primary text-primary-foreground",
        )}
      >
        {message.content}
      </p>
      {!isAiMessage && user?.imageUrl && (
        <Image
          src={user.imageUrl}
          alt="User image"
          width={100}
          height={100}
          className="ml-2 h-10 w-10 rounded-full object-cover"
        />
      )}
    </div>
  );
};

export default AiChatMessage;
