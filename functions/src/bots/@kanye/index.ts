import axios from "axios";
import { ListOfTextResponseType } from "../../types";

const kanyeBot = async (): Promise<ListOfTextResponseType> => {
  const url = "https://api.kanye.rest";

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res: any) => {
        const quote = res.data.quote || "";
        resolve({ data: [{ text: quote }], success: true });
      })
      .catch((error: any) => {
        reject({ data: undefined, success: false, error });
      });
  });
};

export default kanyeBot;
