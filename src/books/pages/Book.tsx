import { useParams } from "react-router-dom";
import { ShopLayout } from "../../layouts";
import { books } from "../../data";
import { BookDetails } from "../components";

export const Book = () => {
  const { slug } = useParams();
  const book = books.find((book) => book.slug === slug);

  return (
    <ShopLayout title={`Book ${slug}`}>
      <section className="relative py-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto">
            {/* Image Section */}
            <div className="img-box h-4/6 max-lg:mx-auto flex justify-center">
              <img
                src={book?.coverImage}
                alt={book?.title || "Book cover"}
                className="max-w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Book Details */}
            <BookDetails book={book!} />
          </div>
        </div>
      </section>
    </ShopLayout>
  );
};
