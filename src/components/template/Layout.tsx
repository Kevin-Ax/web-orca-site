import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";


interface LayoutProps {
    tabTitle: string;
    children: React.ReactNode;
}


export function Layout({ children, tabTitle }: LayoutProps) {
    return (
        <div className="w-screen h-screen flex flex-col items-center">
            <Head>
                <title>{tabTitle ? `${tabTitle} - NoBugs` : "NoBugs"}</title>
            </Head>
            <Header />

            <main className="flex-grow max-w-6xl w-full flex items-center justify-center">
                {children}
            </main>

            <Footer />
        </div>
    );
}