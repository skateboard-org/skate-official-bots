import { ListOfGifsResponseType } from "../../types";
import axios from "axios";
import { isStringValid } from "../../utility";

const giphyBot = async (data: any): Promise<ListOfGifsResponseType> => {
  const searchTerm = data.param || "";

  if (!isStringValid(searchTerm)) {
    return {
      success: false,
      data: [],
    };
    // Throwing an HttpsError so that the client gets the error details.
  }

  const url = "https://api.giphy.com/v1/gifs/search";

  const params = {
    api_key: "xTbQBaXrp92h22qOSCCSNqOte1nS4gG8",
    q: searchTerm || "404",
    limit: 25,
    offset: 0,
    rating: "r",
    lang: "en",
    random_id: "1234",
  };

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res: any) => {
        const gifData = res.data.data.map((gif: any) => {
          return {
            src: gif.images.preview_gif.url,
            height: Number(gif.images.preview_gif.height),
            width: Number(gif.images.preview_gif.width),
          };
        });
        resolve({
          data: gifData,
          success: true,
        });
      })
      .catch((error) => {
        reject({
          data: undefined,
          success: false,
          error,
        });
      });
  });
};

export default giphyBot;
