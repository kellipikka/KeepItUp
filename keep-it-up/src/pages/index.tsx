// src/pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KeepItUp</title>
        <meta name="description" content="Habit tracker homepage" />
        <link rel="icon" href="/icons/logo/logo-initials-only.svg" />
      </Head>
      <Header />
    </div>
  );
}
