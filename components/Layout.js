import Head from 'next/head';
import React, { Children } from 'react';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title : 'burr home page'} </title>
        <meta name="description" content="description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              BUUR
            </Link>

            <button
              className="rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black"
              type="submit"
              id="button-addon2"
            >
              <Link href="/createProduct" className="text-lg font-bold p-3">
                Creer une annonce
              </Link>
            </button>
            <Link href="/login" className=" p-3">
              Login
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2023 Buur</p>
        </footer>
      </div>
    </>
  );
}
