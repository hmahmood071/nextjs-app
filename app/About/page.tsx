import Link from "next/link";

const timeline = [
  {
    year: "2024 – Present",
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    description: "Leading the frontend team to build scalable React applications with TypeScript and Next.js.",
  },
  {
    year: "2022 – 2024",
    title: "Full-Stack Developer",
    company: "StartupHub",
    description: "Developed full-stack features using Node.js, PostgreSQL, and React for a SaaS platform.",
  },
  {
    year: "2021 – 2022",
    title: "Junior Web Developer",
    company: "Digital Agency BD",
    description: "Built responsive websites and landing pages for clients across various industries.",
  },
];

const values = [
  {
    icon: "🚀",
    title: "Performance First",
    description: "I optimize every application for speed, accessibility, and a smooth user experience.",
  },
  {
    icon: "🧹",
    title: "Clean Code",
    description: "I write readable, maintainable code that teams can build on for years.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "I thrive in team environments and believe great products are built together.",
  },
  {
    icon: "📚",
    title: "Always Learning",
    description: "The web evolves fast — I stay current with the latest tools and best practices.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            I&apos;m Mahmood Hassan — a passionate full-stack developer from Bangladesh, dedicated to crafting
            digital experiences that are both beautiful and functional.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <span className="text-8xl">👨‍💻</span>
            </div>
          </div>
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Who am I?
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                I&apos;m a full-stack developer with 3+ years of experience building modern web applications.
                I specialize in React, Next.js, Node.js, and TypeScript — and I love turning complex problems
                into simple, elegant solutions.
              </p>
              <p>
                I&apos;m based in Dhaka, Bangladesh, and I&apos;ve worked with startups and agencies to deliver
                high-quality products. I&apos;m also an active open-source contributor and enjoy writing
                technical articles to share what I learn.
              </p>
              <p>
                Outside of coding, I enjoy reading tech blogs, playing chess, and exploring new places.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Link
                href="/Projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                See My Work
              </Link>
              <Link
                href="/Contacts"
                className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-100 dark:bg-slate-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
            What I Value
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{v.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
          Work Experience
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 md:left-1/2"></div>
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 pl-10 md:pl-0 md:pr-10 md:text-right">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-1">{item.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{item.company}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-blue-600 border-2 border-white dark:border-slate-900 md:left-1/2 md:-translate-x-1.5"></div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
