import exp1 from "/img/exp1.jpg"
import exp2 from "/img/exp2.jpg"
import exp3 from "/img/exp3.jpg"
import exp4 from "/img/exp4.jpg"
import "aos/dist/aos.css";

export default function About() {
    return (
        <section id="pengalaman" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-384 mx-auto flex flex-col lg:flex-row lg:justify-between gap-5">
                {/* Header */}
                <div className="mb-16">
                    <div data-aos="fade-right" className="inline-block mb-8">
                        <span className="px-4 py-2 border border-foreground/30 rounded-full text-sm font-medium">Pengalaman</span>
                    </div>

                    <h2 data-aos="fade-right" className="text-5xl lg:text-6xl font-medium mb-6 max-w-3xl leading-tight">
                        Membantu bisnis tampil profesional
                    </h2>

                    <p data-aos="fade-right" className="text-lg text-muted-foreground mb-8 max-w-2xl">
                        Layanan kami dirancang untuk membantu bisnis Anda berkembang dengan solusi digital yang inovatif dan
                        strategis
                    </p>

                    <a href="https://wa.me/62895411029846" data-aos="fade-right" className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity">
                        Hubungi
                    </a>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mb-6">
                        {/* Top left card - Web Design */}
                        <div data-aos="fade-left"
                        className="bg-white relative border border-border bg-cover rounded-2xl p-8 h-96 w-full"
                        style={{ backgroundImage: `url(${exp2})` }}
                        >
                            <div className="absolute bg-black/30 hover:bg-black/10 cursor-pointer transition-all inset-0 rounded-2xl"></div>
                        </div>
                        <div data-aos="fade-left"
                        className="bg-white relative border border-border bg-cover rounded-2xl p-8 h-96 w-full"
                        style={{ backgroundImage: `url(${exp3})` }}
                        >
                            <div className="absolute bg-black/30 hover:bg-black/10 cursor-pointer transition-all inset-0 rounded-2xl"></div>
                        </div>
                        <div data-aos="fade-left"
                        className="bg-white relative border border-border bg-cover rounded-2xl p-8 h-96 w-full"
                        style={{ backgroundImage: `url(${exp4})` }}
                        >
                            <div className="absolute bg-black/30 hover:bg-black/10 cursor-pointer transition-all inset-0 rounded-2xl"></div>
                        </div>
                        <div data-aos="fade-left"
                        className="bg-white relative border border-border bg-cover rounded-2xl p-8 h-96 w-full"
                        style={{ backgroundImage: `url(${exp1})` }}
                        >
                            <div className="absolute bg-black/30 hover:bg-black/10 cursor-pointer transition-all inset-0 rounded-2xl"></div>
                        </div>
                </div>
            </div>
        </section>
    )
}
