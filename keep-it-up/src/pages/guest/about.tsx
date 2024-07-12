import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/habit-tracker/dashboard">Habit Tracker</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
