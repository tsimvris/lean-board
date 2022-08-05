import { dbConnect } from "../DB/dbConnect";
import modelCard from "../db/model";
export async function getAllCards() {
  await dbConnect();
  const allCards = modelCard.find();
  return allCards.map(({ id, creator, content }) => {
    return { id, creator, content };
  });
}
