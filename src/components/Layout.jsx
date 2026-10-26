import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Header() {
    const [open, setOpen] = useState(false);
    return <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-[#050914]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
            <div className="flex items-center gap-4"><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 font-black">P
            </span>
                <span className="display text-lg font-bold tracking-tight">PixelWave<span className="text-blue-400">Tech</span>
                </span></div>

            <nav className="hidden items-center gap-5 lg:flex">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/services"}>Services</Link>
                <Link to={'/services/ai-ml'}>AI/ML</Link>
                <Link to={'/services/3d-videos'}>3D Videos</Link>
                <Link to={'/clients'}>Clients</Link>
                <Link to={"/about/team"}>Team</Link>
                <Link to={'/about/career'}>Career</Link>
            </nav>

            <Link to="/contact" className="hidden items-center gap-2 rounded-full bg-blue-800 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-black lg:flex">Get Started <ArrowUpRight size={16} />
            </Link>
            <div>
                {/* Menu Button */}
                <button className="rounded-lg border border-slate-700 p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
                    {open ? <X /> : <Menu />}
                </button> </div>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute left-0 top-full w-full border-t border-slate-800 bg-[#070d19] px-5 pb-5 lg:hidden">
                    <Link to="/" onClick={() => setOpen(false)} className="block border-b border-slate-800 py-3 ">Home</Link>
                    <Link to="/about" onClick={() => setOpen(false)} className="block border-b border-slate-800 py-3" >About</Link>
                    <Link to="/services" onClick={() => setOpen(false)} className="block border-b border-slate-800 py-3" >Services</Link>
                    <Link to="/services/ai-ml" onClick={() => setOpen(false)} className="block border-b border-slate-800 py-3" >AI/ML</Link>
                    <Link to="/services/3d-videos" onClick={() => setOpen(false)} className="block border-b border-slate-800 py-3">3D Videos</Link>
                    <Link to="/clients" onClick={() => setOpen(false)} className="block border-b border-slate-800 py-3" > Clients </Link>
                    <Link to="/about/team" onClick={() => setOpen(false)} className="block border-b border-slate-800 py-3" > Team</Link>
                    <Link to="/about/career" onClick={() => setOpen(false)} className="block border-b border-slate-800 py-3" >Career</Link>
                    <Link to="/contact" onClick={() => setOpen(false)} className="block border-b border-slate-800 py-3" >Contact</Link>
                </div>
            )}
        </div>

    </header>
}
export function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-[#030712]">
            <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <div className="display text-xl font-bold">PixelWave<span className="text-blue-400">Tech</span>
                        </div>
                        <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">Premier software consultancy delivering enterprise-grade digital transformation.</p>
                        <div className="mt-6 flex gap-3">
                            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">React</span>
                            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">AI/ML</span>
                            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">Cloud</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Services</h4>
                        <div className="mt-4 space-y-2 text-sm text-slate-400">
                            <Link className="block hover:text-white" to="/services">Our Services</Link>
                            <Link className="block hover:text-white" to="/services/ai-ml">AI/ML</Link>
                            <Link className="block hover:text-white" to="/services/3d-videos">3D Videos</Link>
                            <Link className="block hover:text-white" to="/services">Custom Development</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Company</h4>
                        <div className="mt-4 space-y-2 text-sm text-slate-400">
                            <Link className="block hover:text-white" to="/about">About Us</Link>
                            <Link className="block hover:text-white" to="/about/team">Our Team</Link>
                            <Link className="block hover:text-white" to="/about/career">Careers</Link>
                            <Link className="block hover:text-white" to="/clients">Clients</Link>
                            <Link className="block hover:text-white" to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:justify-between">
                    <span>Cyber Hub, Gurugram, India · hello@pixelwavetech.com</span>
                    <span>© 2026 PixelWave Tech Inc. All rights reserved.</span>
                </div>
            </div>
        </footer>)
}
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="pt-[73px]">{children}</main>
            <Footer /></>)
}
export function SectionTitle({ eyebrow, title, children }) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">{eyebrow}</p>
            <h2 className="display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
            {children && <p className="mt-5 leading-7 text-slate-400">{children}</p>}
        </div>)
}
export function CTA({ title = 'Ready to transform your business?', text = "Let's discuss how we can turn your vision into a digital reality." }) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-950 p-8 text-center sm:p-14">
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
                <h2 className="display relative text-3xl font-bold sm:text-5xl">{title}</h2>
                <p className="relative mx-auto mt-4 max-w-2xl text-slate-400">{text}</p>
                <Link to="/contact" className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950">Start Your Project
                    <ArrowUpRight size={17} />
                </Link>
            </div>
        </section>)
}
