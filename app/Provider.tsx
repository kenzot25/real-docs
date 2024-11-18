"use client";

import Loader from "@/components/ui/loader";
import { getClerkUsers } from "@/lib/actions/user.action";
import {
  LiveblocksProvider,
  //   RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers(userIds);
        return users;
      }}
    >
      {/* <RoomProvider id="my-room"> */}
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
      {/* </RoomProvider> */}
    </LiveblocksProvider>
  );
};
export default Provider;