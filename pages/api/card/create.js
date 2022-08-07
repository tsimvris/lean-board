import { dbConnect } from "../../../DB/dbConnect";
import modelCard from "../../../DB/model";
export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const daten = JSON.parse(request.body);
      const card = await modelCard.create({
        content: daten.content,
        creator: daten.creator,
        editMode: false,
      });
      response.status(200).json({ message: "Card Created" });
    } catch (error) {
      console.log(error.message);
    }
  } else if (request.method === "PUT") {
    const data = JSON.parse(request.body);
    const card = await Card.findByIdAndUpdate(id, data, {
      new: true,
    });
  }
}
