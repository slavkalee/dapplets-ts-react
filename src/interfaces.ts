export interface IDappletState {
  success: boolean;
  data: IDapplet[];
  loading: boolean;
  errors: any;
  total: number;
  isFirstCall: boolean;
}

export interface ITagState {
  success: boolean;
  data: ITag[];
  loading: boolean;
  errors: any;
}

export interface ITag {
  id: string;
  name: string;
}

export interface IDapplet {
  id: string;
  title: string;
  author: string;
  description: string;
  icon: string;
  released: Date;
  tags: ITag[] | string[];
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
  text_5: string;
  text_6: string;
  text_7: string;
  text_8: string;
  text_9: string;
}

export interface ITagObject {
  [key: string]: string;
}

export interface IParams {
  limit: number;
  start: number;
  filter: any[];
  sort: any[];
}
