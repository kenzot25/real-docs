"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";

export const getClerkUsers = async (userIds: string[]) => {
  try {
    const { data } = await (
      await clerkClient()
    ).users.getUserList({
      emailAddress: userIds,
    });

    const users = data.map((user) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      avatar: user.imageUrl,
    }));
    const sortedUser = userIds.map((email) =>
      users.find((user) => user.email === email)
    );
    return parseStringify(sortedUser);
  } catch (err) {
    console.log(`Error fetching users: ${err}`);
  }
};
