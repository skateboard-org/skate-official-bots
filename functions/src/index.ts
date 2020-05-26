import * as functions from "firebase-functions";

import giphyBot from "./bots/@giphy";
import capitalizeBot from "./bots/@capitalize";
import dateBot from "./bots/@date";
import kanyeBot from "./bots/@kanye";
import unsplashBot from "./bots/@unsplash";
import wikiBot from "./bots/@wiki";

export const giphy = functions.https.onCall(giphyBot);
export const capitalize = functions.https.onCall(capitalizeBot);
export const date = functions.https.onCall(dateBot);
export const kanye = functions.https.onCall(kanyeBot);
export const unsplash = functions.https.onCall(unsplashBot);
export const wiki = functions.https.onCall(wikiBot);
