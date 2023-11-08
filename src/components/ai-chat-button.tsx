import { useState } from "react";
import AiChatBox from "./ai-chat-box";
import { Button } from "./ui/button";
import { CubeIcon } from "@radix-ui/react-icons";

type Props = {};

const AIChatButton = (props: Props) => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <div>
      <Button className="gap-2" onClick={() => setChatBoxOpen(true)}>
        <CubeIcon width={20} height={20} /> AI Chat
      </Button>
      <AiChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </div>
  );
};

export default AIChatButton;
