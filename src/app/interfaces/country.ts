export interface Country {
  name: {
    official: string;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
}