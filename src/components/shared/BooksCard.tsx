
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IBook } from '../../types/book.type';

interface IbookCardProps {
    book: IBook;
}

const BooksCard = ({ book }: IbookCardProps) => {
    return (
        <div
            className="
                group overflow-hidden rounded-3xl
                border border-base-content/10
                bg-base-100
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:border-primary/20
                hover:shadow-xl
                hover:shadow-primary/10
            "
        >
            {/* Image */}
            <div className="relative m-3 h-72 overflow-hidden rounded-2xl bg-primary/5">

                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={400}
                    height={500}
                    className="
                        h-full w-full object-cover
                        transition duration-500
                        group-hover:scale-105
                    "
                />

                {/* Dark Overlay on Hover */}
                <div
                    className="
                        absolute inset-0
                        bg-black/0
                        transition-all duration-300
                        group-hover:bg-black/10
                    "
                />

                {/* Category */}
                <div className="absolute left-3 top-3">
                    <span
                        className="
                            rounded-full
                            bg-base-100/90
                            px-3 py-1.5
                            text-xs font-semibold
                            shadow-sm
                            backdrop-blur
                        "
                    >
                        {book.category}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute right-3 top-3">
                    <span
                        className="
                            inline-flex items-center gap-1
                            rounded-full
                            bg-base-100/90
                            px-3 py-1.5
                            text-xs font-semibold
                            shadow-sm
                            backdrop-blur
                        "
                    >
                        <span className="text-warning">★</span>
                        {book.rating}
                    </span>
                </div>

                {/* View Icon */}
                <Link
                    href={`/books/${book.bookId}`}
                    aria-label={`View ${book.bookName}`}
                    className="
                        absolute bottom-3 right-3
                        flex h-10 w-10
                        translate-y-3 items-center justify-center
                        rounded-full
                        bg-base-100/95
                        text-base-content
                        opacity-0
                        shadow-lg
                        backdrop-blur
                        transition-all duration-300
                        hover:bg-primary
                        hover:text-primary-content
                        group-hover:translate-y-0
                        group-hover:opacity-100
                    "
                >
                    {/* Eye Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                </Link>
            </div>

            {/* Content */}
            <div className="px-5 pb-5">

                {/* Book Name */}
                <h3
                    className="
                        line-clamp-1
                        text-xl font-bold
                        transition-colors
                        group-hover:text-primary
                    "
                >
                    {book.bookName}
                </h3>

                {/* Author */}
                <p className="mt-1 line-clamp-1 text-sm text-base-content/50">
                    by {book.author}
                </p>

                {/* Meta Info */}
                <div
                    className="
                        mt-4 flex items-center
                        justify-between
                        border-t border-base-content/10
                        pt-4
                    "
                >
                    {/* Pages */}
                    <div>
                        <p className="text-xs text-base-content/40">
                            Pages
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                            {book.totalPages}
                        </p>
                    </div>

                    {/* Published */}
                    <div>
                        <p className="text-xs text-base-content/40">
                            Published
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                            {book.yearOfPublishing}
                        </p>
                    </div>
                </div>

                {/* View Details Button */}
                <Link
                    href={`/books/${book.bookId}`}
                    className="
                        btn btn-sm mt-5 w-full
                        rounded-xl
                        border-0
                        bg-primary/10
                        text-primary
                        transition-all duration-300
                        hover:bg-primary
                        hover:text-primary-content
                    "
                >
                    View Details

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="
                            h-4 w-4
                            transition-transform duration-300
                            group-hover:translate-x-1
                        "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default BooksCard;


