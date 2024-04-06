"use client";

import { useAuth, useUser } from "@clerk/nextjs";

export default function User() {
  const auth = useAuth();
  console.log(auth);

  const user = useUser();
  console.log(user);

  return (
    <h1>
      {user.user?.firstName} {user.user?.lastName}
    </h1>
  );
}
