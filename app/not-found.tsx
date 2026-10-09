import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-red-50 px-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Decorative blurred blobs */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-200/50 blur-3xl dark:bg-red-900/30" />
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/20" />

            <div className="relative z-10 w-full max-w-xl rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-xl backdrop-blur-xl sm:p-12 dark:border-white/10 dark:bg-white/5">
                {/* Big 404 in Bengali digits */}
                <h1 className="bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-8xl leading-none font-extrabold text-transparent sm:text-9xl">
                    ৪০৪
                </h1>

                <h2 className="mt-6 text-2xl font-bold text-slate-800 sm:text-3xl dark:text-slate-100">
                    পাতাটি খুঁজে পাওয়া যায়নি
                </h2>

                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    দুঃখিত, আপনি যে পাতাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
                    নাম পরিবর্তন করা হয়েছে, অথবা কখনোই ছিল না।
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition hover:scale-105 hover:shadow-red-500/50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M3 10.5 12 3l9 7.5" />
                            <path d="M5 9.5V21h14V9.5" />
                        </svg>
                        হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </main>
    );
}