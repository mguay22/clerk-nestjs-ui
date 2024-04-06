import { UserButton, UserProfile, auth, currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import getUsers from "./get-users";

export default async function Home() {
  const authDetails = auth();
  console.log(authDetails);

  const user = await currentUser();
  console.log(user);

  const allUsers = await getUsers();
  console.log(allUsers);

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-5">
      <UserButton />
      {user?.firstName} {user?.lastName}
      <div>
        <h1>All Users</h1>
        <ol>
          {allUsers.map((_user: User) => (
            <li key={_user.id}>
              {_user.firstName} {_user.lastName}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
