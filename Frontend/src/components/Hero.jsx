import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Hero() {
    const Navigate = useNavigate();

    function handleShopNow() {
        Navigate("/collection");
    }
    return (
        <section className="min-h-screen pb-10">
            <div className="bg-white shadow-lg overflow-hidden py-3 mb-2">
                <div className=" prata-regular whitespace-nowrap marquee text-center font-medium text-gray-800">
                    New Drops Every Week | Limited Stock &nbsp;  &nbsp;  &nbsp;• &nbsp; End Of Season Sale | Flat 30% Off &nbsp; &nbsp; &nbsp; • &nbsp; New Drops
                    Every Week | Limited Stock &nbsp;  &nbsp;  &nbsp;• &nbsp;  End Of Season Sale | Flat 30% Off 
                </div>
            </div>

            <div className="flex flex-col md:flex-row z-10 shadow-[-10px_10px_20px_rgba(0,0,0,0.678)]">
                {/* TEXT */}
                <div className="order-2 md:order-1 md:w-1/2 bg-[#FFCED8] p-10 md:p-20 flex flex-col justify-center">
                    <h1 className="prata-regular text-4xl md:text-5xl font-bold mb-6">
                        New Arrivals
                    </h1>

                    <p className=" text-gray-700 mb-8 max-w-md">
                        Discover the latest trends with our new arrivals.
                        Designed with a focus on both style and quality.
                    </p>

                    <button
                        onClick={handleShopNow}
                        className="prata-regular bg-black text-white px-6 py-3 w-fit rounded-md hover:bg-gray-100 hover:text-black transition"
                    >
                        Shop Now
                    </button>
                </div>

                {/* IMAGES */}
                <div className="order-1 md:order-2 md:w-1/2 grid grid-cols-2 grid-rows-[3fr_2fr]">
                    <img
                        src={assets.hero_pink1}
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={assets.hero_blue1}
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={assets.hero_pink2}
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={assets.hero_blue2}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
