import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/dist/types/server";

const api_key = "qr6ebvg5zyx9";
const api_secret =
  "bzfsa8s6nvg3m3vy7rspj2tsvakan5p6zppk77c2nsc9zz5apfqdfqevvcvg28gj";
const user_id = "";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();
  const token = serverClient.createToken(user.data.id);

  const client = await clerkClient();

  await serverClient.upsertUser({id: user.data.id})

  await client.users.updateUserMetadata(user.data.id, {
    token: token,
  });

  const slugs = ["python", "js", "react", "node", "machine-learning"]

  slugs.forEach(async(item)=> {
    const channel = client.channel("messaging", item, {
        image: "https://getstream.io/random_png/?name=react",
        name: "Discussion",
        created_by_id: user.data.id
      });
      await channel.create()
      channel.addMembers([user.data.id])
  })

  return Response.json({ message: "Hello World" });
}
