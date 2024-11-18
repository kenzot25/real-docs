"use client";
import { Button } from "@/components/ui/button";
import { createDocument } from "@/lib/actions/room.action";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if (room) {
        router.push(`/documents/${room.id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image src="/assets/icons/add.svg" width={24} height={24} alt="Add" />
      <p className="hidden md:block">Start a blank document</p>
    </Button>
  );
};
