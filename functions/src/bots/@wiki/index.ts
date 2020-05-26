import { ListOfLinksResponseType } from "../../types";
import wiki from "wikijs";
import { isStringValid } from "../../utility";

function transformResponse(res: any) {
  const obj = res[1].map((title: string, index: number) => {
    return {
      title,
      link: res[3][index],
    };
  });
  return obj;
}

const wikiBot = async (data: any): Promise<ListOfLinksResponseType> => {
  const searchTerm = data.param || "";

  if (!isStringValid(searchTerm)) {
    return {
      success: false,
      data: [],
    };
    // Throwing an HttpsError so that the client gets the error details.
  }

  return new Promise((resolve, reject) => {
    (wiki() as any)
      .api({
        action: "opensearch",
        format: "json",
        namespace: "0",
        limit: "10",
        search: searchTerm,
        redirects: "return",
      })
      .then((res: any) => {
        resolve({
          data: transformResponse(res),
          success: true,
        });
      })
      .catch((error: any) => {
        console.log(error);
        reject({ error, success: false });
      });
  });
};

export default wikiBot;
