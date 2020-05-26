import { ListOfTextResponseType } from "../../types";

import moment from "moment";

const formatList: string[] = [
  "DD-MM-YYYY", // "23-02-2017"
  "MM-YY-YYYY", // "02-23-2017"
  "YYYY-MM-DD", // "2017-02-23"
  "MMMM D, YYYY", // "January 23, 2017"
  "ddd, hA", // "Sun, 3 PM"
  "MMMM Do YYYY, h:mm a", // "August 2nd 2017, 08:30 PM"
  "dddd, MMMM Do YYYY, h:mm a", // "Monday, August 2nd 2017, 08:30 PM"
  "ddd, MMM D YYYY h:mm a", // "Mon, Aug 2 2017 08:30 PM"
];

const dateBot = async (): Promise<ListOfTextResponseType> => {
  return new Promise((resolve, reject) => {
    const data = formatList.map((format) => {
      return { text: String(moment().format(format)) };
    });

    if (data.length === formatList.length) {
      resolve({ data, success: true });
    } else {
      reject({ data: undefined, success: false });
    }
  });
};

export default dateBot;
