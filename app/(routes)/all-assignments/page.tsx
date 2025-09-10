import { Button } from "@/components/ui/liquid-glass-button";
import StatCard from "@/components/ui/stat-card";
import Link from "next/link";
import { Github } from "lucide-react"; // иконка GitHub

export default function AllAssignments() {
  const assignments = [
    { id: 1, value: "1", label: "Assignment 1", file: "Assignment1" },
    { id: 2, value: "2", label: "Assignment 2", file: "Assignment2" },
    { id: 3, value: "3", label: "Assignment 3", file: "Assignment3" },
  ];

  return (
    <div>
      <main className="container mx-auto px-4">
        {/* Заголовок + кнопка справа */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-30 mb-8 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
            All Assignments
          </h1>
          <Link
            href="https://github.com/твоя-ссылка-на-репозиторий"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto flex items-center gap-2 hover:text-orange-500"
            >
              <Github className="w-5 h-5" />
              GitHub репо
            </Button>
          </Link>
        </div>

        {/* Грид карточек */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
             {assignments.map((a) => (
          <Link key={a.id} href={`/assignments/${a.file}`}>
                <StatCard value={a.value} label={a.label} />
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
}
