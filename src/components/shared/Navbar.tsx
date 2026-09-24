
import React from 'react';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/90 backdrop-blur-md">
            <div className="navbar container mx-auto min-h-16 px-4">

                {/* Navbar Start */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-base-content/10 bg-base-100 p-3 shadow-xl"
                        >
                            <li>
                                <a className="font-medium">Home</a>
                            </li>
                            <li>
                                <a className="font-medium">Books</a>
                            </li>
                            <li>
                                <a className="font-medium">Categories</a>
                            </li>
                            <li>
                                <a className="font-medium">About Us</a>
                            </li>
                            <li>
                                <a className="font-medium">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <a className="btn btn-ghost px-2 text-xl font-extrabold tracking-tight sm:text-2xl">
                        <span className="text-primary">Book</span>
                        <span>Vibe</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-1">
                        <li>
                            <a className="rounded-xl font-medium">
                                Home
                            </a>
                        </li>

                        <li>
                            <a className="rounded-xl font-medium">
                                Books
                            </a>
                        </li>

                        <li>
                            <details>
                                <summary className="rounded-xl font-medium">
                                    Categories
                                </summary>

                                <ul className="z-50 mt-3 w-48 rounded-2xl border border-base-content/10 bg-base-100 p-2 shadow-xl">
                                    <li>
                                        <a>Fiction</a>
                                    </li>
                                    <li>
                                        <a>Non-Fiction</a>
                                    </li>
                                    <li>
                                        <a>Science</a>
                                    </li>
                                    <li>
                                        <a>Biography</a>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <a className="rounded-xl font-medium">
                                About
                            </a>
                        </li>

                        <li>
                            <a className="rounded-xl font-medium">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-2">

                    {/* Search */}
                    <button className="btn btn-ghost btn-circle hidden sm:flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                            />
                        </svg>
                    </button>

                    {/* Sign In */}
                    <button className="btn btn-ghost hidden sm:flex">
                        Sign In
                    </button>

                    {/* Sign Up */}
                    <button className="btn btn-primary rounded-xl px-4 sm:px-5">
                        Sign Up
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Navbar;

