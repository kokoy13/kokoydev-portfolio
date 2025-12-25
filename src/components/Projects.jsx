import project1 from "/img/suarakan.png"
import project2 from "/img/kpk.png"
import project3 from "/img/blog.png"
import project4 from "/img/samasta.png"
import project5 from "/img/realorfake.png"
import project6 from "/img/trans.png"
import "aos/dist/aos.css";

export default function Projects() {
    const projects = [
        {
        id: 1,
        title: "Suarakan",
        description: "Platform menyuarakan aspirasi atau petisi yang dilakukan oleh seluruh masyarakat indonesia untuk membangun indonesia yang lebih baik",
        tags: ["React", "Node.js", "Express.js","Mysql"],
        image: project1,
        },
        {
        id: 2,
        title: "CrussCure",
        description: "Forum komunikasi global sharing informasi terkait peduli kesehatan",
        tags: ["Node.js", "Express.js", "MongoDB"],
        image: project2,
        },
        {
        id: 3,
        title: "IkokoyNotes",
        description: "Web blog sharing informasi seputar teknologi",
        tags: ["Laravel", "Talwindcss", "Mysql"],
        image: project3,
        },
        {
        id: 4,
        title: "Pesona Cirebon Regency",
        description: "Halaman Promosi Perumahan Perumnas Regency Cirebon",
        tags: ["React", "Tailwindcss"],
        image: project4,
        },
        {
        id: 5,
        title: "Real or Fake",
        description: "Analisis Klasifikasi Sentimen berita Hoax dan Fakta berdasarkan tabulasi data atau dataset",
        tags: ["Fastapi", "Python", "React"],
        image: project5,
        },
        {
        id: 6,
        title: "Transmanagement App",
        description: "Web app payment order untuk Internet Service Provider",
        tags: ["Laravel", "Talwindcss", "Mysql"],
        image: project6,
        },
    ]

    return (
        <section className="pb-20 px-4 sm:px-6 lg:px-8" id="proyek">
        <div className="max-w-384 mx-auto">
            <div data-aos="fade-up" className="inline-block mb-8">
                <span  className="px-4 py-2 border border-foreground/30 rounded-full text-sm font-medium">Proyek</span>
            </div>
            <div data-aos="fade-up" className="flex flex-col lg:flex-row items-end justify-between">
                <h2 className="text-5xl lg:text-6xl font-medium mb-6 max-w-3xl leading-tight">
                    Jelajahi real proyek yang pernah dikerjakan
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                    Jelajahi real proyek yang pernah dikerjakan
                </p>
            </div>
                <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                    key={project.id}
                    data-aos="fade-up"
                    className="group cursor-pointer border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                    >
                    <div className="relative overflow-hidden bg-muted h-48">
                        <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                            key={tag}
                            className="text-xs font-medium text-muted-foreground border border-border px-2 py-1 rounded"
                            >
                            {tag}
                            </span>
                        ))}
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}
