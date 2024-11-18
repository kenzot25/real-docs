import { CollaborativeRoom } from "@/features/document/components";
import { getDocument } from "@/lib/actions/room.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Document = async ({ params }: SearchParamProps) => {
  const { id } = await params;
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/sign-in");
  }
  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });

  if (!room) redirect("/");

  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom
        roomId={room.id}
        roomMetadata={room.metadata}
        currentUserType="editor"
        users={[]}
      />
    </main>
  );
};
export default Document;
