import BooksCard from "@/components/shared/BooksCard";
import { IBook } from "@/types/book.type";


const getBooks = async () => {
    const response = await fetch(
        'http://localhost:3000/booksData.json'
    );

    const data = await response.json();

    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto px-4 py-16 sm:py-20">

            {/* Section Header */}
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                <div>
                    {/* Small Badge */}
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        <span className="h-2 w-2 rounded-full bg-success ring-4 ring-success/20"></span>
                        Our Collection
                    </span>

                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Explore Our{' '}
                        <span className="text-primary">
                            Books
                        </span>
                    </h2>

                    <p className="mt-3 max-w-xl text-base leading-7 text-base-content/60">
                        Discover stories, ideas, and unforgettable
                        characters from our carefully selected collection.
                    </p>
                </div>

                {/* View All */}
                <button className="btn btn-outline rounded-xl">
                    View All Books
                    <span>→</span>
                </button>
            </div>


            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {booksData?.map((book:IBook,ind:number) => {

                        return <BooksCard key={ind} book={book}></BooksCard>})}

            </div>
        </section>
    );
};

export default Books;

