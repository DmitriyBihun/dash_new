import heroImg from '../../assets/heroImg.avif';

export default function HomePage() {
    return (
        <section className="flex flex-col justify-between min-h-screen pt-20 pb-8 sm:pt-28 sm:pb-10">

            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 sm:gap-14 lg:gap-[clamp(2rem,_-6rem_+_18vw,_12rem)] flex-grow">

                <div className="flex flex-col justify-end w-full lg:flex-[1_1_680px]">
                    <h1 className="text-[clamp(3.5rem,_-0.091rem_+_13vw,_10.938rem)] leading-[0.85] font-semibold text-[#1B1A1F] tracking-[-0.035em] select-none mb-8 lg:mb-12">
                        Dmytro
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 lg:gap-20 self-start sm:self-end sm:mr-6 lg:mr-10">
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono uppercase tracking-widest text-[#1B1A1F]/50">
                                [01 // INTRO]
                            </span>
                        </div>

                        <div className="max-w-full sm:max-w-[340px] space-y-4">
                            <p className="text-sm sm:text-base leading-[1.25] text-[#1B1A1F]/85 font-normal tracking-tight text-justify">
                                Frontend engineer and UI developer. I create clean, scalable web products and interactive experiences with a focus on precise typography, performance, and modern standards.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start w-full sm:w-[380px] lg:flex-[0_1_420px] self-center lg:self-end">
                    <div className="w-full">
                        <div className="flex items-baseline justify-between mb-2.5">
                            <span className="text-[11px] font-mono uppercase tracking-widest text-[#1B1A1F]/50">
                                 // Index
                            </span>
                        </div>

                        <div className="group relative aspect-[420/480] w-full overflow-hidden rounded-sm bg-[#e2e2e2] border border-[#1B1A1F]/15 shadow-sm">
                            <img
                                className="w-full h-full object-cover"
                                src={heroImg}
                                alt="Dmytro Portrait"
                            />

                            <span className="absolute top-2 left-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">+</span>
                            <span className="absolute top-2 right-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">+</span>
                            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">+</span>
                            <span className="absolute bottom-2 right-2 text-[10px] font-mono text-white/70 select-none pointer-events-none">+</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
