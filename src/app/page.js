import Link from "next/link";

export default function Home() {
  return (
    <main>
      Shadow platform project
      <button>
        <Link href="/registration">Reģistrēties</Link>
      </button>
    </main>
  );
}
