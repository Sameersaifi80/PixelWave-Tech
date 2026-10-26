
import { CTA, SectionTitle } from '../components/Layout';

export default function Clients() {
    const logos = Array.from(
        { length: 32 },
        (_, index) => `./src/image/${index + 1}.png`
    );

    return (
        <>
            <section className="grid-bg px-5 py-20 lg:px-8">
                <SectionTitle eyebrow="Our Clients" title="Making Your Idea Happen!">
                    We help entrepreneurs and established businesses build, innovate and scale their ideas.
                </SectionTitle>
            </section>


            <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

                    {logos.map((logo, index) => (
                        <div key={logo}
                            className="group flex min-h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-5
                            transition-all duration-300
                            hover:-translate-y-1 hover:border-blue-500/40hover:shadow-lg">
                            <img src={logo} alt={`Client Logo ${index + 1}`} loading="lazy"
                                className="h-16 w-full object-contain  transition-transform duration-300 group-hover:scale-110" />
                        </div>
                    ))}
                </div>
            </section>

            <CTA
                title="Ready to Shape Your Future?"
                text="Let's collaborate to build your next industry-defining product. Your success story starts here."
            />
        </>
    );
}
