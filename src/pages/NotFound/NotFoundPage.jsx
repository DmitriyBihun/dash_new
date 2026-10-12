import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen pt-20 pb-8 sm:pt-28 sm:pb-10 text-center">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#1B1A1F]/60 uppercase mb-6">
                [404 // Page Not Found]
            </span>

            <h1 className="text-[clamp(5rem,_1rem_+_18vw,_14rem)] leading-[0.85] font-semibold text-[#1B1A1F] tracking-[-0.035em] select-none">
                404
            </h1>

            <p className="max-w-[420px] mt-8 text-sm sm:text-base leading-[1.35] text-[#1B1A1F]/70">
                The page you are looking for does not exist or has been moved. Check the address or return home.
            </p>

            <Link
                to="/"
                className="mt-10 inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-5 py-3 rounded-md hover:bg-black transition-colors text-sm uppercase"
            >
                Home
                <span className="text-lg leading-none">↗</span>
            </Link>
        </section>
    );
}
