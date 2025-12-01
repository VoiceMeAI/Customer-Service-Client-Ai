import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font text-4xl">Welcome to CSA Portal</h1>
      <Link href="/playground" className="underline">
        Check Playground for More Info about the set up
      </Link>
    </div>
  );
}
