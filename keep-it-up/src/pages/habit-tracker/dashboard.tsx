import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1>Welcome to My Habit Tracker</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/guest/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
