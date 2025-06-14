import Link from "next/link";

type Experience = {
    title: string;
    description: string;
    url: string;
};

const expericences: Experience[] = [
    {
        title: "Healifa",
        description: "Collaboration in backend development with Django framework.",
        url: "https://healifa.com",
    },
    {
        title: "Ponisha",
        description: "Collaboration on several projects on the Ponisha job site.",
        url: "https://ponisha.ir/profile/gorgdis",
    },
];

export default function ExperienceList() {
    return (
        <div className="space-y-6 max-w-[300px] w-full">
            <h2 className="text-sm font-medium text-muted-foreground">Experiences</h2>
            <div className="space-y-6">
                {expericences.map((experience, i) => (
                    <div key={i} className="space-y-1 w-full">
                        <Link
                            href={experience.url}
                            className="inline-flex items-center gap-1 font-medium underline underline-offset-2 hover:opacity-80 transition break-words whitespace-normal overflow-hidden text-ellipsis"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {experience.title}
                            <img
                                src="/icons/link.svg"
                                alt="link"
                                className="w-3.5 h-3.5 dark:invert dark:brightness-200"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground break-words whitespace-normal overflow-hidden text-ellipsis">
                            {experience.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
