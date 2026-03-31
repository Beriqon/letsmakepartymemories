import Link from "next/link";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#0B0B0B] pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-[#F5F5F5]/70 transition-all hover:text-[#F5F5F5] hover:underline underline-offset-2"
          >
            ← Terug naar home
          </Link>
        </div>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl font-serif">
            {title}
          </h1>

          <div className="rounded-2xl border border-[#C8A45B]/20 bg-[#111111]/60 p-6 shadow-md backdrop-blur-sm sm:p-8">
            <div
              className={[
                "max-w-none leading-relaxed text-[#F5F5F5]/80",
                "space-y-4",
                "[&>h2]:mt-10 [&>h2]:mb-3 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-[#F5F5F5] [&>h2]:font-serif",
                "[&>p]:my-3",
                "[&>ul]:my-3 [&>ul]:list-disc [&>ul]:pl-6",
                "[&>ul>li]:my-1 [&>ul>li]:text-[#F5F5F5]/80",
                "[&>p>a]:text-[#F5F5F5] [&>p>a:hover]:text-[#F5F5F5]/80 [&>p>a:hover]:underline [&>p>a:hover]:underline-offset-2",
                "[&>p>strong]:text-[#F5F5F5]",
              ].join(" ")}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

