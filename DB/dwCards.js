import { dbConnect } from "./dbConnect";
import modelCard from "./model";
export const downloadCards = async () => {
  await dbConnect();

  const cards = await downloadCards.find();

  return cards.map(({ creator, content }) => {
    return { content, creator };
  });
};
