import { Box, Layers3, Play, Scan, Video } from 'lucide-react';
import { CTA, SectionTitle } from '../components/Layout';

const items = [['3D Product Videos', 'Stunning 3D product showcases that bring products to life.',
    ['Product Visualization', '360° Views', 'Interactive Models', 'E-Commerce Integration'], Box],
['3D Animation & Motion Graphics', 'Captivating animations and motion graphics that tell your story.',
    ['Character Animation', 'Logo Animation', 'Explainer Videos', 'Motion Graphics'], Layers3],
['Virtual Reality (VR) Videos', 'Immersive VR experiences that transport your audience into virtual worlds.',
    ['VR Experiences', '360° Video Tours', 'Virtual Showrooms', 'Interactive VR']
    , Scan], ['Architectural Visualization', 'Photorealistic renders and walkthroughs for real estate and construction.',
    ['3D Renders', 'Virtual Tours', 'Interior Design', 'Exterior Visualization']
    , Box], ['3D Marketing Videos', 'Eye-catching videos that grab attention and drive conversions.'
    , ['Social Media Videos', 'Advertisement Clips', 'Brand Videos', 'Promotional Content'], Video],
['3D Video Editing & Post-Production', 'Professional editing, compositing and post-production services.',
    ['Color Grading', 'Visual Effects', 'Motion Tracking', '3D Compositing'], Layers3]];
export default function ThreeD() {
    return (
        <div>
            <section className="grid-bg">
                <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">Immersive Visuals</p>
                        <h1 className="display mt-4 text-5xl font-bold">3D Videos</h1>
                        <p className="mt-6 text-lg leading-8 text-slate-400">Bring ideas to life with stunning 3D
                            visualization and animation services—from product showcases to architectural walkthroughs.</p>
                        <a href="/contact" className="mt-8 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold">Get Your Project</a>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-slate-800">
                        <img className="h-[360px] w-full object-cover"
                            src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80" />
                    </div>
                </div>
            </section>
            <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <SectionTitle eyebrow="Our 3D Video Services" title="Solutions Built for Attention" />
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map(([a, b, bullets, Icon]) =>
                    <div key={a} className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                            <Icon />
                        </div>
                        <h3 className="mt-6 text-xl font-bold">{a}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{b}</p>
                        <div className="mt-5 space-y-2">{bullets.map(x =>
                            <div key={x} className="text-xs text-slate-300">• {x}</div>)}
                        </div>
                    </div>)}
                </div>
            </section>
            <section className="bg-slate-950/50">
                <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                    <SectionTitle eyebrow="Our Video Portfolio" title="Recent 3D Projects" />
                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {['3D Product Animation', '3D Architectural Visualization', '3D Motion Graphics']
                            .map((x, i) => <div key={x} className="group overflow-hidden rounded-2xl border border-slate-800">
                                <div className="relative">
                                    <img className="h-64 w-full object-cover transition group-hover:scale-105"
                                        src={`https://images.unsplash.com/photo-${['1618005198919-d3d4b5a92ead', '1487958449943-2429e8be8625', '1633356122544-f134324a6cee']
                                        [i]}?auto=format&fit=crop&w=800&q=80`} />
                                    <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs">3D</span>
                                    <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-blue-600">
                                        <Play size={15} fill="currentColor" />
                                    </span>
                                </div>
                                <div className="p-5">
                                    <p className="text-xs text-blue-400">{i === 1 ? '3D Visualization' : '3D Animation'}</p>
                                    <h3 className="mt-2 font-bold">{x}</h3>
                                    <p className="mt-2 text-sm text-slate-500">Explore immersive visuals, smooth animation and professional rendering.</p>
                                </div>
                            </div>)}
                    </div>
                </div>
            </section>
            <CTA title="Ready to Create Stunning 3D Videos?" />
        </div>
    )
}
