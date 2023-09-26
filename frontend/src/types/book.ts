export type BookInfo = {
  address: string;
  average_score: number;
  cover: string;
  genre: string;
  introduction: string;
  purchase_price: number;
  rental_price: number;
  sale_count: number;
  title: string;
  total_pages: number;
  author_id: number;
};

export type postBookReqProps = {
  title: string;
  cover: string;
  price: number;
  introduce: string;
  genre: string;
  file: FormData;
};

export type getBookshelfResProp = {
  bookId: number;
  title: FormData;
  address: string;
  cover: FormData;
  progress: number;
};

export type postBookReviewProps = {
  bookId: number;
  cover: string;
  content: string;
  score: number;
};
