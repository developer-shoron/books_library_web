
import React from 'react';

const Banner = () => {
    return (
        <section className="px-4 py-8 sm:py-12 lg:py-16">
            <div className="container mx-auto overflow-hidden rounded-3xl bg-base-200">
                <div className="grid min-h-[480px] grid-cols-1 items-center lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
                        
                        {/* Small Badge */}
                        <div className="mb-5">
                          
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            <span className="h-2.5 w-2.5 rounded-full bg-success ring-4 ring-success/20"></span>
                            Explore Your Next Read
                        </span>


                        </div>

                        {/* Heading */}
                        <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Books to freshen up{' '}
                            <span className="text-primary">
                                your bookshelf
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-lg text-base leading-7 text-base-content/60 sm:text-lg">
                            Discover inspiring stories, timeless classics,
                            and exciting new reads curated just for you.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <button className="btn btn-primary rounded-xl px-7">
                                Explore Books
                            </button>

                            <button className="btn btn-outline rounded-xl px-7">
                                View Collection
                            </button>
                        </div>

                        {/* Small Stats */}
                        <div className="mt-10 flex items-center gap-6 sm:gap-10">
                            <div>
                                <p className="text-2xl font-bold">10K+</p>
                                <p className="text-sm text-base-content/50">
                                    Books
                                </p>
                            </div>

                            <div className="h-10 w-px bg-base-content/10" />

                            <div>
                                <p className="text-2xl font-bold">5K+</p>
                                <p className="text-sm text-base-content/50">
                                    Readers
                                </p>
                            </div>

                            <div className="h-10 w-px bg-base-content/10" />

                            <div>
                                <p className="text-2xl font-bold">4.9★</p>
                                <p className="text-sm text-base-content/50">
                                    Rating
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative flex min-h-[350px] items-center justify-center bg-primary/5 px-6 py-10 lg:min-h-full">

                        {/* Background Circle */}
                        <div className="absolute h-64 w-64 rounded-full bg-primary/10 blur-2xl sm:h-80 sm:w-80" />

                        {/* Book Card */}
                        <div className="relative w-full max-w-sm">
                            <div className="rounded-3xl border border-base-content/5 bg-base-100 p-5 shadow-2xl shadow-primary/10">

                                <div className="flex h-72 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                                    <div className="text-center">
                                        <div className="text-7xl">📖</div>
                                        <p className="mt-4 text-xl font-bold">
                                            Your Next Favorite Book
                                        </p>
                                        <p className="mt-1 text-sm text-base-content/50">
                                            Start reading today
                                        </p>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className="mt-5 flex items-center justify-between">
                                    <div>
                                        <p className="font-bold">
                                            Discover More
                                        </p>
                                        <p className="text-sm text-base-content/50">
                                            New books every week
                                        </p>
                                    </div>

                                    <div className="btn btn-circle btn-primary">
                                        →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;

