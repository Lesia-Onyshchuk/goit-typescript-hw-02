export type Picture = {
  id: string;
  urls: {
    small: string;
  };
  alt_description?: string;
};

export type Props = {
  pictures: Picture[];
  onClick: (picture: Picture) => void;
};
