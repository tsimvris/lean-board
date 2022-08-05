import { dbConnect } from "../../../DB/dbConnect";
import modelCard from "../../../DB/model";
export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      await dbConnect();
      const daten = JSON.parse(request.body);
      const card = await modelCard.create({
        content: daten.content,
        creator: daten.creator,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}
