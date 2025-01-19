import ChatForum from "@/components/ChatForum";
import { currentUser } from "@clerk/nextjs/dist/types/server";

export default async function Page({ params }) {
  const slug = (await params).slug;
  const user = await currentUser();

  return (
    <div>
      <ChatForum
        slug={slug}
        clerkUser={{
          id: user.id,
          name: user.firstName,
          token: user.publicMetadata.token,
        }}
      />
    </div>
  );
}
