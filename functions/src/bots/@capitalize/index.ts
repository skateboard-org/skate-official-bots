import { ListOfTextResponseType } from "../../types";

import { titleCase } from "title-case";
import { isStringValid } from "../../utility";

const capitalizeBot = async (data: any): Promise<ListOfTextResponseType> => {
  const str = data.param || "";

  if (!isStringValid(str)) {
    return {
      success: false,
      data: [],
    };
    // Throwing an HttpsError so that the client gets the error details.
  }

  return new Promise((resolve, reject) => {
    try {
      resolve({
        success: true,
        data: [{ text: titleCase(str) }],
      });
    } catch (error) {
      reject({ error, success: false });
    }
  });
};

export default capitalizeBot;
