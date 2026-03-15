import Image from "next/image";
import Link from "next/link";

export default function SevelEuropePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Sevel Europe Project</h1>
      <div className="mb-8 w-full max-w-xl flex flex-col items-center">
        <Image
          src="/images/sevelweb.webp"
          alt="Sevel Europe Website Preview"
          width={800}
          height={450}
          className="rounded-lg shadow-lg border mb-6"
        />
        <p className="text-lg text-center mb-6">
          Sevel Europe is a project by Merd. Click below to review the live site!
        </p>
        <Link href="https://necklessx-commits.github.io/sevel-europe/index.html" target="_blank">
          <button className="px-6 py-3 bg-primary text-background rounded-lg font-semibold shadow hover:bg-primary/80 transition">
            Review Sevel Europe
          </button>
        </Link>
      </div>
    </main>
  );
}
