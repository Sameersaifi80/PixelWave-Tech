import { CTA, SectionTitle } from '../components/Layout';
import sameerPhoto from "../image/sameer.png";
const team = [['Mohammad Sameer', 'CEO & Managing Director', sameerPhoto],
['nikolas sons', 'Backend Developer', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80'],
['Neha Verma', 'UI/UX Designer', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80'],
['Rahul Singh', 'Backend Developer', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80'],
['Ronnie Kelvin', 'Backend Developer', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80'],
['Mahish Kumar', 'Backend Developer', 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=80'],
['Sushant Singh', 'Backend Developer', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80']];
export default function Team() {
    return (
        <>
        <section className="grid-bg px-5 py-20 lg:px-8">
            <SectionTitle eyebrow="Our People" title="Meet Our Amazing Team">
                A passionate team of professionals dedicated to innovation, excellence and growth.
            </SectionTitle>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900/50 text-center">
                <img className="h-80 w-full object-cover object-top" src={team[0][2]} />
                <div className="p-7">
                    <h2 className="text-2xl font-bold">{team[0][0]}</h2>
                    <p className="mt-1 text-sm text-blue-400">{team[0][1]}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-400">
                        A visionary leader driven by passion for technology and a strong history of building successful digital solutions.</p>
                </div>
            </div>
            <div className="mt-20">
                <SectionTitle eyebrow="Our Team Members" title="Experts Behind the Work" />
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {team.slice(1).map(([a, b, img]) =>
                        <div key={a} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30">
                            <img className="h-72 w-full object-cover" src={img} />
                            <div className="p-5">
                                <h3 className="font-bold">{a}</h3>
                                <p className="mt-1 text-sm text-blue-400">{b}</p>
                            </div>
                        </div>)}
                </div>
            </div>
        </section>
        <CTA title="Want to work with our team?" />
    </>
)}
