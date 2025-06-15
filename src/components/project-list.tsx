import Link from "next/link";

type Project = {
    title: string;
    description: string;
    url: string;
};

const projects: Project[] = [
    {
        title: "Slovo",
        description: "Russian Dictionary & Learning Platform.",
        url: "https://github.com/joqd/slovo",
    },
    {
        title: "Zen",
        description: "A simple user management, authentication, and role-based authorization system.",
        url: "https://github.com/joqd/zen",
    },
];

export default function ProjectList() {
    return (
        <div className="space-y-4 max-w-[300px] w-full">
            <h2 className="text-sm font-medium text-muted-foreground">Projects</h2>
            <div className="space-y-4">
                {projects.map((project, i) => (
                    <div key={i} className="space-y-1 w-full">
                        <Link
                            href={project.url}
                            className="inline-flex items-center gap-1 font-medium underline underline-offset-2 hover:opacity-80 transition break-words whitespace-normal overflow-hidden text-ellipsis"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.title}
                            <img
                                src="/icons/link.svg"
                                alt="link"
                                className="w-3.5 h-3.5 dark:invert dark:brightness-200"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground break-words whitespace-normal overflow-hidden text-ellipsis">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
