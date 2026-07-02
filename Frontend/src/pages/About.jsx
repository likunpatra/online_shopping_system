import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
    return (
        <>
            <div className="shadow-[-10px_10px_20px_rgba(0,0,0,0.678)] bg-white p-20 pt-10 mb-20 ">
                <div className="text-2xl text-center">
                    <Title text1={"ABOUT"} text2={"US"} />
                </div>
                <div className="my-10 flex flex-col md:flex-row gap-16">
                    <img
                        className="w-full md:max-w-112.5"
                        src={assets.about_img3}
                        alt=""
                    />
                    <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                        <p>
                            Closet was born from a love for style and a vision
                            to make fashion effortlessly accessible. What
                            started as a simple idea soon evolved into a
                            platform designed to bring the latest trends,
                            timeless essentials, and everyday style inspiration
                            directly to your doorstep.
                        </p>
                        <p>
                            From the very beginning, our focus has been on
                            curating collections that reflect individuality and
                            confidence. At Closet, we carefully select
                            high-quality apparel and accessories that blend
                            comfort, elegance, and modern design—so you can
                            express yourself without compromise.
                        </p>
                        <p>
                            Whether you're dressing for everyday moments or
                            special occasions, Closet offers a versatile range
                            that fits every mood, season, and lifestyle.
                        </p>
                        <b className="text-gray-800">Our Mission</b>
                        <p>
                            Our mission at Closet is to redefine the way you
                            experience fashion. We aim to empower individuals
                            with style choices that feel personal, accessible,
                            and inspiring—while delivering a seamless and
                            enjoyable shopping journey from discovery to
                            delivery and beyond.
                        </p>
                    </div>
                </div>
                <div className="text-xl py-4">
                    <Title text1={"WHY"} text2={"CHOOSE US"} />
                </div>
                <div className="flex flex-col md:flex-row text-sm mb-20">
                    <div className="border px-10 md:px-16 sm:py-20 flex-col gap-5">
                        <b>Quality Assurance:</b>
                        <p className="text-gray-600">
                            We meticulously select and vet each product to
                            ensure it meets our stringent quality standards
                        </p>
                    </div>
                    <div className="border px-10 md:px-16 sm:py-20 flex-col gap-5">
                        <b>Convinence:</b>
                        <p className="text-gray-600">
                            With our user-friendly interface and hassle-free
                            ordering process, shopping has never been easier
                        </p>
                    </div>
                    <div className="border px-10 md:px-16 sm:py-20 flex-col gap-5">
                        <b>Exceptional Customer Service:</b>
                        <p className="text-gray-600">
                            Our team of dedicated proffessionals is here to
                            assist you the way, ensuring your satisfaction is
                            our top priority
                        </p>
                    </div>
                </div>
            </div>
            <NewsletterBox />
        </>
    );
};

export default About;
