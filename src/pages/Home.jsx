import { ArrowRight, CheckCircle2, Code2, Globe2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA, SectionTitle } from '../components/Layout';

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="grid-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.22),transparent_42%)]" />

                <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:py-32 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-36">
                    <div className="relative">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold text-blue-300">
                            <Sparkles size={14} />Global IT Consultancy</div>

                        <h1 className="display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                            Architecting{' '}<span className="text-blue-500">Digital</span>{' '}Excellence.</h1>

                        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400"> We transform complex business requirements into elegant, high-performance software solutions. Scalable. Secure. Future-Proof </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"  >
                                Book Consultation <ArrowRight size={17} /> </Link>

                            <Link to="/services" className="rounded-full border border-slate-700 px-6 py-3 font-semibold hover:bg-white/5" >   View Solutions </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glow overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">
                            <img
                                className="h-[420px] w-full object-cover opacity-75"
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                                alt="Technology hardware" />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-blue-500/10" />

                            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                <div className="glass rounded-2xl p-3">
                                    <div className="text-xl font-bold text-white">200+</div>
                                    <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">Solutions</div>
                                </div>

                                <div className="glass rounded-2xl p-3">
                                    <div className="text-xl font-bold text-white">98%</div>
                                    <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">Retention</div>
                                </div>

                                <div className="glass rounded-2xl p-3">
                                    <div className="text-xl font-bold text-white">12+</div>
                                    <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">Countries</div>
                                </div>

                                <div className="glass rounded-2xl p-3">
                                    <div className="text-xl font-bold text-white">24/7</div>
                                    <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <SectionTitle eyebrow="Our Expertise"
                    title="High-Impact Technology Solutions">End-to-end digital transformation services designed around business
                    outcomes, not buzzwords. </SectionTitle>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900">
                        <div className="flex items-center justify-between">
                            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                                <Code2 />
                            </div>
                            <ArrowRight size={18} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400" />
                        </div>
                        <h3 className="mt-6 text-lg font-bold">Web Development</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">Modern, responsive and high-performance websites for your business.</p>
                        <div className="mt-5 space-y-2">
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Responsive Design</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />React Development</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Performance Optimization</div>
                        </div>
                    </div>

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900">
                        <div className="flex items-center justify-between">
                            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                                <Globe2 />
                            </div>
                            <ArrowRight size={18} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400" />
                        </div>
                        <h3 className="mt-6 text-lg font-bold">Cloud Solutions</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">Reliable cloud infrastructure built for business growth.</p>
                        <div className="mt-5 space-y-2">
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Cloud Deployment</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Scalable Infrastructure</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Cloud Integration</div>
                        </div>
                    </div>

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900">
                        <div className="flex items-center justify-between">
                            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                                <ShieldCheck />
                            </div>
                            <ArrowRight size={18} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400" />
                        </div>
                        <h3 className="mt-6 text-lg font-bold">Cybersecurity</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            Protect applications and business data with secure architecture.
                        </p>
                        <div className="mt-5 space-y-2">
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Security Audits</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Data Protection</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Secure Applications</div>
                        </div>
                    </div>

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900">
                        <div className="flex items-center justify-between">
                            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                                <Code2 />
                            </div>
                            <ArrowRight size={18} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400" />
                        </div>
                        <h3 className="mt-6 text-lg font-bold">Software Development</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            Custom software tailored to your organization's workflow.
                        </p>
                        <div className="mt-5 space-y-2">
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Custom Applications</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />API Integration</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />System Modernization</div>
                        </div>
                    </div>

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900">
                        <div className="flex items-center justify-between">
                            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                                <Globe2 />
                            </div>
                            <ArrowRight size={18} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400" />
                        </div>
                        <h3 className="mt-6 text-lg font-bold">Digital Transformation</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            Improve business processes with modern digital technology.
                        </p>
                        <div className="mt-5 space-y-2">
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Workflow Automation</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Digital Strategy</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Business Integration</div>
                        </div>
                    </div>

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900">
                        <div className="flex items-center justify-between">
                            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                                <ShieldCheck />
                            </div>
                            <ArrowRight size={18} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400" />
                        </div>
                        <h3 className="mt-6 text-lg font-bold">IT Consulting</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            Strategic technical guidance to achieve long-term business goals.
                        </p>
                        <div className="mt-5 space-y-2">
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Technical Strategy</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Architecture Planning</div>
                            <div className="flex gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-blue-400" />Technology Advisory</div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="border-y border-slate-800 bg-slate-950/50">
                <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:items-center">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">Why PixelWave Tech</p>

                        <h2 className="display mt-3 text-4xl font-bold">Engineering the Next Generation of Web.</h2>

                        <p className="mt-5 leading-7 text-slate-400">More than a development agency, we are a strategic technology
                            partner focused on secure architecture, measurable delivery and long-term growth.</p>

                        <div className="mt-7 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-800 p-4 text-sm font-semibold">  Certified Experts</div>
                            <div className="rounded-2xl border border-slate-800 p-4 text-sm font-semibold"> Transparent Pricing</div>
                            <div className="rounded-2xl border border-slate-800 p-4 text-sm font-semibold"> Global Delivery</div>
                        </div>
                    </div>
        <img className="h-80 w-full rounded-3xl object-cover"
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                        alt="Technology team collaborating"/>
                </div>
            </section>

            {/* Delivery Framework */}
            <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <SectionTitle eyebrow="Delivery Framework" title="From Idea to Impact" />
                <div className="mt-12 grid gap-3 md:grid-cols-5">
                    <div className="relative rounded-2xl border border-slate-800 p-5">
                        <span className="text-xs text-blue-400">01</span> <h3 className="mt-5 font-bold">Consultation</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500"> We understand your goals and business requirements.</p>
                    </div>

                    <div className="relative rounded-2xl border border-slate-800 p-5">
                        <span className="text-xs text-blue-400">02</span><h3 className="mt-5 font-bold">Architecture</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500">  We plan a secure and scalable technical foundation. </p>
                    </div>

                    <div className="relative rounded-2xl border border-slate-800 p-5">
                        <span className="text-xs text-blue-400">03</span> <h3 className="mt-5 font-bold">Engineering</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500"> We build and test reliable software solutions.</p>
                    </div>
                    <div className="relative rounded-2xl border border-slate-800 p-5">
                        <span className="text-xs text-blue-400">04</span><h3 className="mt-5 font-bold">Deployment</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500">We launch your solution and prepare it for users</p>
                    </div>

                    <div className="relative rounded-2xl border border-slate-800 p-5">
                        <span className="text-xs text-blue-400">05</span> <h3 className="mt-5 font-bold">Evolution</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500"> We improve and maintain the solution as you grow.</p>
                    </div>
                </div>
            </section>

            {/* Call To Action */}
            <CTA title="Ready to scale your Digital Potential?" text="Stop struggling with technical debt. Let's build a platform that drives revenue and efficiency." />
        </div>
    );
}