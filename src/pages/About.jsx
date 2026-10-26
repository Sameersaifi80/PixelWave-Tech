import { CTA, SectionTitle } from '../components/Layout';
import { CheckCircle2 } from 'lucide-react';
 import { tech } from '../data/site';
import { Fragment } from 'react/jsx-runtime';

export default function About() {
    return (
    <Fragment>
        <section className="grid-bg px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">
                About PixelWave Tech
            </p>
            <h1 className="display mt-4 text-5xl font-bold sm:text-6xl">
                Engineering Tomorrow
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Where vision meets code. PixelWave Tech transforms ambitious ideas into scalable,
                secure and stunning digital experiences that drive real business impact.</p>
            <div className="mt-9 flex justify-center gap-3">
                <a href="/contact" className="rounded-full bg-white px-6 py-3 font-bold text-slate-950">
                    Start Your Project
                </a>

                <a href="/services" className="rounded-full border border-slate-700 px-6 py-3 font-bold">
                    Explore Services
                </a>
            </div>
        </div>
    </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[['500+', 'Projects Delivered'], ['50+', 'Global Clients'], ['98%', 'Client Satisfaction'],
                ['24/7', 'Support Available']].map(([n, l]) =>
                    <div key={l} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                        <div className="display text-3xl font-bold text-blue-400">{n}</div>
                        <p className="mt-2 text-sm text-slate-400">{l}</p>
                    </div>)}
            </div>
        </section>
        <section className="bg-slate-950/50">
            <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <SectionTitle eyebrow="Our DNA" title="Principles That Shape Our Work" />
                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {[['Innovation First', 'Pushing boundaries with modern technology and creative solutions.'],
                    ['Built to Scale', 'Enterprise-grade architecture designed for exponential growth.'],
                    ['Integrity Always', 'Transparent partnerships built on trust and ethical practices.']]
                        .map(([a, b]) => <div key={a} className="rounded-2xl border border-slate-800 p-7">
                            <CheckCircle2 className="text-blue-400" />
                            <h3 className="mt-5 text-xl font-bold">{a}</h3>
                            <p className="mt-2 leading-7 text-slate-400">{b}</p>
                        </div>)}
                </div>
            </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <SectionTitle eyebrow="Tech Arsenal" title="Modern Tools, Practical Engineering" />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
                {Object.entries(tech).slice(0, 4).map(([k, arr]) =>
                    <div key={k} className="rounded-2xl border border-slate-800 p-6">
                        <h3 className="font-bold">{k}</h3>
                        <div className="mt-5 flex flex-wrap gap-2">{arr.map(x =>
                            <span key={x} className="rounded-full bg-slate-800 px-3 py-2 text-xs text-slate-300">{x}</span>)}
                        </div>
                    </div>)}
            </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
            <SectionTitle eyebrow="Our Journey" title="Growing Through Innovation" />
            <div className="mx-auto mt-12 max-w-3xl space-y-5">
                {[['2018', 'Founded with a vision to revolutionize digital solutions.'],
                ['2020', 'Expanded globally with enterprise-grade SaaS platforms.'],
                ['2022', 'Achieved AWS Advanced Partner status and launched an AI-powered framework.'],
                ['2024', 'Pioneered GenAI integration for modern businesses.'],
                ['Present', 'Leading digital transformation across Fintech, EdTech and Healthcare.']]
                    .map(([y, t]) => <div key={y} className="grid grid-cols-[80px_1fr] gap-5 rounded-2xl border border-slate-800 p-5">
                        <div className="font-bold text-blue-400">{y}</div>
                        <p className="text-sm leading-6 text-slate-400">{t}</p>
                    </div>)}
            </div>
        </section>
        <CTA title="Ready to Build Something Extraordinary?" />
    </Fragment>
)}
