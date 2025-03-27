interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Floyd Miles",
    avatar: "/images/reviewlady.png",
    rating: 4,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    name: "Ronald Richards",
    avatar: "https://img.freepik.com/free-photo/front-view-young-male-grey-t-shirt-holding-white-sign-with-smile-yellow-wall-man-expression-emotion-color-model_140725-26518.jpg?ga=GA1.1.1236369542.1738934698&semt=ais_hybrid",
    rating: 5,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    avatar: "https://t4.ftcdn.net/jpg/10/11/93/69/240_F_1011936927_N4lmGWetbUPz1FGnuLldT6C1ahtv88Ft.jpg",
    rating: 3,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];