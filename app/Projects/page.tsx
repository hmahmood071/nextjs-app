import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product listings, cart, checkout, and payment integration using Stripe. Built with Next.js, TypeScript, and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    emoji: "🛒",
    color: "from-blue-500 to-indigo-600",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style project management tool with drag-and-drop, real-time updates, and team collaboration features. Inspired by Trello.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    emoji: "📋",
    color: "from-emerald-500 to-teal-600",
    github: "#",
    live: "#",
  },
  {
    title: "Developer Blog",
    description:
      "A markdown-powered personal blog with syntax highlighting, dark mode, and SEO optimization. Statically generated for blazing-fast performance.",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    emoji: "✍️",
    color: "from-purple-500 to-pink-600",
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A real-time weather app that shows current conditions, 7-day forecasts, and interactive maps using the OpenWeatherMap API.",
    tags: ["React", "REST API", "Chart.js"],
    emoji: "🌤️",
    color: "from-orange-500 to-yellow-500",
    github: "#",
    live: "#",
  },
  {
    title: "Chat Application",
    description:
      "A real-time messaging app with private and group chats, file sharing, and read receipts. Built with WebSockets for instant communication.",
    tags: ["React", "Socket.io", "Express", "Redis"],
    emoji: "💬",
    color: "from-cyan-500 to-blue-500",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This very website! A clean, responsive developer portfolio built with Next.js and Tailwind CSS, showcasing projects and skills.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    emoji: "🌐",
    color: "from-slate-500 to-slate-700",
    github: "#",
    live: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            A collection of things I&apos;ve built — from side projects to production apps. Each one taught me something new.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}>
                <span className="text-6xl">{project.emoji}</span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-5">
                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 dark:bg-slate-800/50 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Want to collaborate on a project?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            I&apos;m always looking for interesting problems to solve. Let&apos;s build something together.
          </p>
          <Link
            href="/Contacts"
            className="inline-block px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-600/30"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
