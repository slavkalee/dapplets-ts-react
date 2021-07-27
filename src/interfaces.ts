export interface ITag {
  id: number | string;
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
}
