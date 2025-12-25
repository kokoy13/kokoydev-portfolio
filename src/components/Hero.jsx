import image from "/img/hero.jpg"
import "aos/dist/aos.css";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-24 px-6 lg:px-8 bg-white">
        <div className="max-w-384 mx-auto w-full">
            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
                {/* Left Column - Main Headline */}
                <div className="flex flex-col self-center lg:self-end">
                    <h1 data-aos="fade-right" className="text-6xl flex flex-col items-center lg:items-start sm:text-7xl lg:text-[164px] text-black">
                        <span>Web</span>
                        <span>Developer</span>
                    </h1>
                </div>

                {/* Right Column - Image and Description */}
                <div className="flex flex-col items-end gap-8">
                    <div data-aos="fade-down" className="relative w-full sm:w-80 h-96 rounded-2xl overflow-hidden">
                        <img
                            src={image}
                            alt="Founder Kokoy Dev"
                            className="object-cover"
                        />
                    </div>

                    <div className="text-right" data-aos="fade-left">
                        <p className="text-base font-medium line flex flex-col text-black leading-4.5">
                            Halo, saya andika founder
                            <br /> KokoyDev dengan
                            <br /> Berbagai Pengalaman
                            <br /> Digital.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
