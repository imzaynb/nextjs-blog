import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Zayn Baig';
export const siteTitle = "Zayn's Website";

export default function Layout({ children, home }) {
    return (
        <div className="px-5 py-10 grid justify-center min-h-full">
            <Head>
                <link rel="icon" href='/public/favicon.ico' />
                <meta
                    name="description"
                    content="This is Zayn's Personal Website" />
                <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className="text-center grid justify-center">
                {home ? (
                    <>
                        <Image
                            priority
                            src="/some-profile-pic.jpg"
                            className="rounded-full"
                            height={132}
                            width={132}
                            alt=""
                        />
                        <h1 className="text-3xl mt-2">{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/some-profile-pic.jpg"
                                className="rounded-full"
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h2 className="mt-3 mb-3 text-lg">
                            <Link href="/">{name}</Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className="mt-3">
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}