"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import AddEditNoteDialog from "@/components/AddEditNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import AIChatButton from "@/components/ai-chat-button";

const NavBar = () => {
  const { theme } = useTheme();
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <Link href={"/notes"} className="flex items-center gap-1">
            <Image src={logo} alt={"brand logo"} width={40} height={40} />
            <span className="font-bold">AI Note</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              className="gap-2"
              onClick={() => setShowAddEditNoteDialog(true)}
            >
              <PlusIcon />
              Add Note
            </Button>
            <AIChatButton />
            <ThemeToggleButton />
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
          </div>
        </div>
      </div>
      <AddEditNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
};

export default NavBar;
