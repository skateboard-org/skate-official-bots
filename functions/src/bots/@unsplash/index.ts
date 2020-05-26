import fetch from "node-fetch";
declare var global: any;
global.fetch = fetch;
import Unsplash, { toJson } from "unsplash-js";
import { ListOfImagesResponseType } from "../../types";
import { isStringValid } from "../../utility";

const unsplashService = new Unsplash({
  accessKey: "-JcIggEahmGvBSADMG8ScEseFVwpEloiPJxha7MNuWg",
  secret: "CD8V0o_s_FUSSHP3r5lwrYv1EdLAD5aIAGDh4m-MEVU",
});

const unsplashBot = async (data: any): Promise<ListOfImagesResponseType> => {
  const searchTerm = data.param || "";

  if (!isStringValid(searchTerm)) {
    return {
      success: false,
      data: [],
    };
    // Throwing an HttpsError so that the client gets the error details.
  }

  return new Promise((resolve, reject) => {
    unsplashService.search
      .photos(searchTerm, 1, 50)
      .then(toJson)
      .then((json: { results: any[] }) => {
        const unsplashData = json.results.map((item) => ({
          // alt: item.alt_description,
          // color: item.color,
          // description: item.description,
          height: Number(item.height),
          width: Number(item.width),
          src: String(item.urls.thumb),
        }));

        resolve({ data: unsplashData, success: true });
      })
      .catch((error: any) => {
        reject({ error, success: false });
      });
  });
};

export default unsplashBot;
