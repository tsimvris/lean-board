import { dbConnect } from "./dbConnect";
import modelCard from "./model";
export default async function downloadCards() {
  await dbConnect();

  const cards = await modelCard.find();

  return cards.map(({ creator, content }) => {
    return { content, creator };
  });
}
