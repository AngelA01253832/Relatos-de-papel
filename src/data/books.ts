import { Book } from "../books/models";

export const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "Set in the Jazz Age on Long Island, this novel tells the story of Jay Gatsby, a mysterious millionaire, and his quixotic passion for the beautiful Daisy Buchanan. Through the eyes of Nick Carraway, the novel explores themes of wealth, social change, idealism, and the disillusionment of the American Dream.",
    price: 10.99,
    genre: "Classic",
    inStock: 10,
    coverImage:
      "https://www.hachettebookgroup.com/wp-content/uploads/2020/06/9780762498130-3.jpg?w=640",
    rating: 4.5,
    code: "GG1925",
    slug: "the-great-gatsby",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "Set in the racially divided South of the 1930s, this Pulitzer Prize-winning novel follows young Scout Finch and her brother Jem as they come of age. The narrative, told through Scout's eyes, delves into themes of racial injustice, moral courage, and the complexities of human nature, as seen through the trial of Tom Robinson, an innocent black man accused of a crime he didn’t commit.",
    price: 8.99,
    genre: "Historical Fiction",
    inStock: 4,
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/800px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    rating: 4.8,
    code: "TKAM1960",
    slug: "to-kill-a-mockingbird",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description:
      "A harrowing vision of a dystopian future where the government, known as the Party, exercises total control over its citizens. Winston Smith, a low-ranking Party member, secretly rebels against the oppressive regime led by Big Brother. This novel explores themes of surveillance, propaganda, censorship, and the loss of individuality in a totalitarian state.",
    price: 12.49,
    genre: "Dystopian",
    inStock: 0,
    coverImage:
      "https://m.media-amazon.com/images/I/715WdnBHqYL._UF1000,1000_QL80_.jpg",
    rating: 4.3,
    code: "NINETEEN84",
    slug: "1984",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A timeless romantic novel that follows Elizabeth Bennet, a witty and independent young woman, as she navigates issues of class, family expectations, and societal norms in 19th-century England. The book explores her complex relationship with the enigmatic Mr. Darcy, weaving themes of love, pride, and personal growth.",
    price: 7.5,
    genre: "Romance",
    inStock: 4,
    coverImage:
      "https://image.cdn1.buscalibre.com/5b57313ef4df7312578b4569.__RS360x360__.jpg",
    rating: 4.9,
    code: "PAP1813",
    slug: "pride-and-prejudice",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "This iconic novel captures the complexities of teenage angst and alienation through the eyes of Holden Caulfield. As he wanders the streets of New York City after being expelled from school, Holden grapples with themes of innocence, identity, and belonging in a world he perceives as phony.",
    price: 9.99,
    genre: "Young Adult",
    inStock: 20,
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
    rating: 3.7,
    code: "TCITR1951",
    slug: "the-catcher-in-the-rye",
  },
];
