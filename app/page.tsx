import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-8">Welcome to My Portfolio</h1>
      <p className="text-center mt-4 text-gray-600 text-3xl text-bold">Hi, I am Mahmood Hassan, a passionate developer.Check out my projects
        and feel free to contact me for collaborations or inquiries. I am always open to new opportunities and love connecting with other developers. Let's create something amazing together!
        I also enjoy contributing to open-source projects and giving back to the developer community. If you're interested in collaborating on a project or just want to chat about tech, feel free to contact me!
      </p>
      <button className="text-2xl px-6 py-3 bg-blue-500 text-white rounded-full mt-6 block mx-auto hover:bg-blue-600 transition duration-300">
        View Projects
      </button>
    </div>
  );
}
