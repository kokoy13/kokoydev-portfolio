import { Instagram, Twitter, Youtube, PinIcon } from "lucide-react"
import logo from "/img/logo(white).png"

export default function Footer({ activeSection, setActiveSection }) {

    return (
        <footer className="bg-black text-white" id="kontak">
        <div className="max-w-384 mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row gap-3 justify-between items-start mb-16">
                <h2 className="text-5xl md:text-6xl font-bold max-w-2xl leading-tight">Mari Terhubung Di Sini</h2>
                <a href="https://wa.me/62895411029846" className="border border-white rounded-full px-8 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                    <span className="text-xl">»</span>
                    <span>Hubungi Saya</span>
                </a>
            </div>

            <div className="border-t border-white/30 my-12"></div>

            <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Left column - Logo and social */}
            <div>
                <div className="flex gap-2 items-center mb-2">
                    <img className="w-6" src={logo} alt="" />
                    <h3 className="font-bold text-xl">KokoyDev</h3>
                </div>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Dipelopori oleh andika, founder beserta web developer yang dengan berbagai pengalaman digital dibidang teknologi informasi
                </p>
                <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Instagram size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Twitter size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <Youtube size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <PinIcon size={20} />
                </a>
                </div>
            </div>

            {/* Middle column - Contact Info */}
            <div className="md:col-span-2">
                <div className="grid md:grid-cols-3 gap-8">
                {/* Address */}
                <div>
                    <h4 className="text-white/80 text-sm font-medium mb-3">Alamat</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                    Batang Anai No.9A Rimbo Kaluang 
                    <br />
                    Kota Padang, Sumatera Barat
                    </p>
                </div>

                {/* Email */}
                <div>
                    <h4 className="text-white/80 text-sm font-medium mb-3">Alamat Email</h4>
                    <div className="space-y-1 text-white/60 text-sm">
                    <p>kokoydev@gmail.com</p>
                    <p>andikafiransyah1905@gmail.com</p>
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <h4 className="text-white/80 text-sm font-medium mb-3">Nomor Telepon</h4>
                    <div className="space-y-1 text-white/60 text-sm">
                    <p>+62 895411029846</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="border-t border-white/30 pt-8">
            <div className="flex flex-wrap justify-center gap-8 text-sm">
                <a href="#pengalaman"
                    onClick={() => setActiveSection("pengalaman")}
                    className={`text-sm cursor-pointer font-normal transition-colors ${
                    activeSection === "pengalaman" ? "text-white" : "text-white/60 hover:text-white"
                    }`}>
                    Pengalaman
                </a>
                <a href="#proyek" 
                    onClick={() => setActiveSection("proyek")}
                    className={`text-sm cursor-pointer font-normal transition-colors ${
                    activeSection === "proyek" ? "text-white" : "text-white/60 hover:text-white"
                    }`}>
                    Proyek
                </a>
                <a href="#kontak" 
                    onClick={() => setActiveSection("kontak")}
                    className={`text-sm cursor-pointer font-normal transition-colors ${
                    activeSection === "kontak" ? "text-white" : "text-white/60 hover:text-white"
                    }`}>
                    Kontak
                </a>
            </div>
            </div>

            <div className="border-t border-white/30 mt-12 pt-8 text-center text-sm text-white/60">
            <p>Semua hak dilindungi @kokoydev</p>
            </div>
        </div>
        </footer>
    )
}
