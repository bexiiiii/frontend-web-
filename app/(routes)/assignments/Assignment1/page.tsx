import { Button } from "@/components/ui/liquid-glass-button";
import { Github } from "lucide-react";
import Link from "next/dist/client/link";

export default function Assignment1() {
  return (
    <div className="container mx-auto px-4 py-20">
      
      <h1 className="text-3xl font-bold mb-4">Assignment 3</h1>
 <header className="mb-6 mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
  <div className="flex-1">
    <h1 className="text-4xl font-bold">Bekhruz Tokhtamishov</h1>
    <h2 className="text-2xl">Software Engineering</h2>
    <h3 className="text-xl font-semibold mt-2">About Me</h3>
    <p>I'm a 2nd course student. I'm learning web development.</p>
  </div>

  <div className="flex flex-col items-center gap-4 flex-shrink-0">
    <Link
      href="https://github.com/твоя-ссылка-на-репозиторий"
      target="_blank"
      className="w-full sm:w-auto"
    >
      <Button
        size="lg"
        className="w-full sm:w-auto flex items-center gap-2 hover:text-orange-500"
      >
        <Github className="w-5 h-5 " />
        ссылка на GitHub репо
      </Button>
    </Link>

    <img
      src="../images/behruz.jpg"
      alt="My Photo"
      className="rounded-full w-50 h-50 object-cover shadow-md"
    />
  </div>
</header>


      <section className="mb-6">
        <h3 className="text-xl font-semibold">My Hobbies</h3>
        <ol className="list-decimal list-inside">
          <li>Coding</li>
          <li>watching Films</li>
          <li>Graphic Design</li>
        </ol>

        <h3 className="text-xl font-semibold mt-4">My Favorite Websites</h3>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://huggingface.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Huggingface
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              YouTube
            </a>
          </li>
        </ul>
      </section>

      

      <button className="bg-orange-500 text-main-light px-4 py-2 rounded hover:bg-orange-600 border">
        Button
      </button>

      <section className="mt-8">
        <h3 className="text-xl font-semibold">Student Life Schedule</h3>
<table className="border-collapse border border-gray-400 mt-3">
  <thead>
    <tr>
      <th className="border border-gray-400 px-4 py-2">Activity</th>
      <th className="border border-gray-400 px-4 py-2">Time</th>
      <th className="border border-gray-400 px-4 py-2">Mood</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-400 px-4 py-2">Procrastination</td>
      <td className="border border-gray-400 px-4 py-2">9:00 AM - 11:00 AM</td>
      <td className="border border-gray-400 px-4 py-2">Peak energy for nothing</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-4 py-2">Coffee Break</td>
      <td className="border border-gray-400 px-4 py-2">11:00 AM - 11:30 AM</td>
      <td className="border border-gray-400 px-4 py-2">Life saver</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-4 py-2">Coding Frenzy</td>
      <td className="border border-gray-400 px-4 py-2">12:00 PM - 3:00 PM</td>
      <td className="border border-gray-400 px-4 py-2">Brain: 200%, Fingers: 0%</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-4 py-2">Nap Attempt</td>
      <td className="border border-gray-400 px-4 py-2">3:00 PM - 4:00 PM</td>
      <td className="border border-gray-400 px-4 py-2">Mission failed</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-4 py-2">Snack Attack</td>
      <td className="border border-gray-400 px-4 py-2">4:00 PM - 4:30 PM</td>
      <td className="border border-gray-400 px-4 py-2">Energy restored</td>
    </tr>
  </tbody>
</table>

      </section>


     
    </div>
   
  );
}

