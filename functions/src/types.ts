export enum ResponseTypesEnum {
  ListOfImages = "ListOfImages",
  ListOfGifs = "ListOfGifs",
  ListOfLinks = "ListOfLinks",
  ListOfText = "ListOfText",
  Command = "Command",
}

// GIF

export interface ListOfGifsResponseType {
  data: GifItemType[];
  success: boolean;
}

export interface GifItemType {
  src: string;
  width: number;
  height: number;
}

// IMAGES

export interface ImageItemType {
  src: string;
  width: number;
  height: number;
}

export interface ListOfImagesResponseType {
  data: ImageItemType[];
  success: boolean;
}

// LINKS
export interface LinkItemType {
  link: string;
  title: string;
}

export interface ListOfLinksResponseType {
  data: LinkItemType[];
  success: boolean;
}

// TEXT

export interface TextItemType {
  text: string;
}

export interface ListOfTextResponseType {
  data: TextItemType[];
  success: boolean;
}

// COMMAND
export interface CommandResponseType {
  success: boolean;
  data: boolean;
}

// ERROR

export interface ErrorType {
  data: string;
  success: boolean;
}

export type ResponseTypes =
  | CommandResponseType
  | ListOfTextResponseType
  | ListOfGifsResponseType
  | ListOfImagesResponseType
  | ListOfLinksResponseType;

export interface BotPropertiesType {
  name: string;
  title: string;
  icon: string;
  desc: string;
  url: string;
  responseType: string;
  inputParameter: string;
  parameterDesc: string;
  typeAheadUrl: string;
  parameterEnabled: boolean;
  typeAheadEnabled: boolean;

  terminalCommandTemplate: string;

  type: string;
  typeAheadSource: string;
  typeAheadOptions: string[];
}

export interface BotType {
  properties: BotPropertiesType;
  execute?: (param: any) => Promise<ResponseTypes>;
}
