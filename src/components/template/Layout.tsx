import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";


interface LayoutProps {
    tabTitle: string;
    children: any;
}


export function Layout({ children, tabTitle }: LayoutProps) {
    return (
        <div className="w-screen h-screen flex flex-col items-center">
            <Head>
                <title>{tabTitle ? `${tabTitle} - NoBugs` : "NoBugs"}</title>
            </Head>
            <Header />

            <main className="flex-grow max-w-6xl w-full">
                {children}
            </main>

            <Footer />
        </div>
    );
}