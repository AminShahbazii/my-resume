import "./globals.css";
import { Footer } from "@/components/footer";


export const metadata = {
    title: "Joqd",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <main className="min-h-screen flex flex-col">
                    <div className="flex-1 relative">
                        <div className="max-w-[640px] mx-auto px-6 sm:px-0 min-h-full flex">
                            <div className="w-full">{children}</div>
                        </div>
                    </div>

                    <Footer />
                </main>
            </body>
        </html>
    );
}