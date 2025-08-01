import Link from "next/link";

type Project = {
    title: string;
    description: string;
    url: string;
};

const projects: Project[] = [
    {
        title: "Authentication-Authorization-JWT",
        description: "Authentication-And-Usermanagement-And a little Authorization.",
        url: "https://github.com/AminShahbazii/Authentication-And-Usermanagement",
    },
    {
        title: "Notification",
        description: "It is a service. It is for imaginary microservice and i have no idea why I developed it.",
        url: "https://github.com/AminShahbazii/NotificationService",
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
