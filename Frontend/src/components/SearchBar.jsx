import React, { useContext, useRef, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } =
        useContext(ShopContext);
    const inputRef = useRef(null);
    const location = useLocation();

    const isCollectionPage = location.pathname.includes("collection");

    useEffect(() => {
        if (showSearch && isCollectionPage) {
            inputRef.current?.focus();
        }
    }, [showSearch, isCollectionPage]);

    return (
        <div
            className={`bg-white text-center overflow-hidden transition-all duration-300 ease-in-out
            ${
                showSearch && isCollectionPage
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
            }`}
        >
            <div
                className={`inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-5 
                rounded-full w-3/4 sm:w-1/2 transform transition-all duration-300
                ${
                    showSearch && isCollectionPage
                        ? "translate-y-0"
                        : "-translate-y-4"
                }`}
            >
                <input
                    ref={inputRef}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="flex-1 outline-none bg-inherit text-sm"
                />
                <img className="w-4 me-4" src={assets.search_icon} alt="" />
                <img
                    onClick={() => setShowSearch(false)}
                    className="inline w-3 cursor-pointer me-1"
                    src={assets.cross_icon}
                    alt=""
                />
            </div>
        </div>
    );
};

export default SearchBar;
