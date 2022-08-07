import { dbConnect } from "./dbConnect";
import modelCard from "./model";

export async function getCardbyId(newId) {
  await dbConnect();
  const card = await modelCard.findById(newId);
  const { id, creator, content } = card;
  return { id, creator, content, editMode };
}

export async function getAllCards() {
  await dbConnect();
  const allCards = await modelCard.find();
  return allCards.map(({ id, creator, content, editMode }) => {
    return { id, creator, content, editMode };
  });
}
