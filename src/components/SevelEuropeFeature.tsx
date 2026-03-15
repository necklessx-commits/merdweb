import Image from "next/image";
import Link from "next/link";

export default function SevelEuropeFeature() {
  return (
    <section className="flex flex-col items-center justify-center py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">Sevel Europe Project</h2>
      <Image
        src="/images/sevelweb.png"
        alt="Sevel Europe Website Preview"
        width={800}
        height={450}
        className="rounded-lg shadow-lg border mb-6"
        style={{ background: '#f3f3f3', objectFit: 'cover' }}
        priority
      />
      <p className="text-lg text-center mb-6">
        Sevel Europe is a project by Merd. Click below to review the live site!
      </p>
      <Link href="https://necklessx-commits.github.io/sevel-europe/index.html" target="_blank" passHref legacyBehavior>
        <a className="px-6 py-3 bg-white text-black rounded-lg font-semibold shadow hover:bg-gray-100 transition block text-center w-fit border border-gray-200">
          Visit Sevel Europe Website
        </a>
      </Link>
    </section>
  );
}
