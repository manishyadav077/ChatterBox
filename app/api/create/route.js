import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/dist/types/server";

const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();
  const token = serverClient.createToken(user.data.id);

  const client = await clerkClient();

  await serverClient.upsertUser({ id: user.data.id });

  await client.users.updateUserMetadata(user.data.id, {
    token: token,
  });

  const slugs = ["python", "js", "react", "node", "machine-learning"];

  slugs.forEach(async (item) => {
    const channel = client.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: "Discussion",
      created_by_id: user.data.id,
    });
    await channel.create();
    channel.addMembers([user.data.id]);
  });

  return Response.json({ message: "Hello World" });
}
