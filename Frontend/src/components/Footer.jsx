import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 pt-20 mb-10 text-sm px-6 sm:px-0">
                <div className="md:ms-30">
                    <img src={assets.logo} className="mb-2 w-25" alt="" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMAPNY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+1-223-945-4545</li>
                        <li>contact@closet.com</li>
                    </ul>
                </div>
            </div>
            <div className="py-5">
                <hr className="w-full border-gray-500 mt-10" />
                <p className="py-5 text-sm text-center">
                    Copyright 2025@ Closet.com - All Rights Reserved.
                </p>
                <p className="font-semibold text-sm text-center">
                    ____ Designed & Developed by Snehasish Parida ____
                </p>
            </div>
        </div>
    );
};

export default Footer;
