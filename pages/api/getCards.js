import { downloadCards } from "../../DB/dwCards";

export default async function handler(req, res) {
  const cards = await downloadCards();
  res.status(200).json(cards);
}
