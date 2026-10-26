import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA, SectionTitle } from '../components/Layout';
import { services, tech } from '../data/site';
export default function Services() {
    return( 
    <div>
        <section className="grid-bg px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">WHAT WE OFFER</p>
                <h1 className="display mt-4 text-5xl font-bold">Our Services</h1>
                <p className="mt-5 text-lg text-slate-400">Comprehensive digital solutions crafted to accelerate your business growth.</p>
                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">{[['200+', 'Projects'],
                ['50+', 'Clients'], ['99.9%', 'Uptime'], ['24/7', 'Support']].map(([a, b]) =>
                    <div key={b} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                        <b className="text-xl">{a}</b>
                        <span className="block mt-1 text-xs text-slate-500">{b}</span>
                    </div>)}
                </div>
            </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <SectionTitle eyebrow="Premium Services" title="End-to-End Digital Transformation" />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {services.map(([name, desc, bullets], i) =>
                    <div key={name} className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 hover:border-blue-500/30">
                        <div className="flex justify-between">
                            <span className="text-xs font-bold text-blue-400">{String(i + 1).padStart(2, '0')}</span>
                            <ArrowUpRight size={17} className="text-slate-600 group-hover:text-blue-400" />
                        </div>
                        <h3 className="mt-7 text-xl font-bold">{name}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p>
                        <div className="mt-5 space-y-2">{bullets.map(x =>
                            <div key={x} className="text-xs text-slate-300">• {x}</div>)}
                        </div>
                    </div>)}
            </div>
        </section>
        <section className="border-y border-slate-800 bg-slate-950/50">
            <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <SectionTitle eyebrow="Technology Stack" title="Industry-Leading Tools" />
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(tech).map(([k, arr]) =>
                        <div key={k} className="rounded-2xl border border-slate-800 p-6">
                            <h3 className="font-bold">{k}</h3>
                            <div className="mt-4 flex flex-wrap gap-2">{arr.map(x =>
                                <span key={x} className="rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-400">{x}</span>)}
                            </div>
                        </div>)}
                </div>
            </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <SectionTitle eyebrow="Delivery Process" title="A Proven Methodology" />
            <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                {[['Discovery', '1-2 weeks'], ['Design', '2-3 weeks'], ['Development', '6-12 weeks'],
                ['Testing', '1-2 weeks'], ['Deployment', '1 week'], ['Support', 'Continuous']].map(([a, b], i) =>
                    <div key={a} className="rounded-2xl border border-slate-800 p-5">
                        <div className="text-2xl font-bold text-blue-400">{i + 1}</div>
                        <h3 className="mt-4 font-bold">{a}</h3>
                        <p className="mt-2 text-xs text-slate-500">{b}</p>
                    </div>)}
            </div>
        </section>
        <CTA />
    </div>
    
)}
