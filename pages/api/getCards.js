import { dbConnect } from "../../DB/dbConnect";
import { getCardbyId } from "../../DB/dwCards";
// Comment-Test
export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (request.method === "GET") {
    const card = getCardbyId(id);
    response.status(200).json(card);
  }
}
