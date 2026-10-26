import { BrainCircuit, Camera, Eye, Play } from 'lucide-react';
import { CTA } from '../components/Layout';
import { Link } from 'react-router-dom';
export default function AI() {
    return <div>
        <section className="grid-bg">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
                <div><p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">Intelligent Systems</p>
                    <h1 className="display mt-4 text-5xl font-bold sm:text-6xl">AI & ML</h1>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Discover the power of artificial intelligence and machine learning—from personalized recommendations to intelligent automation.</p>
                    <Link to="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 font-bold">Get Your Project</Link>
                </div><div className="overflow-hidden rounded-3xl border border-slate-800">
                    <img className="h-[360px] w-full object-cover" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" />
                </div>
            </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="mb-10 text-center">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">Our Recent Work</p>
                <h2 className="display mt-3 text-4xl font-bold">AI in Action</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                {[['Surveillance',
                    'This AI model catches suspicious activity in video.',
                    'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80', Camera],
                ['Face Recognition', 'This AI model recognizes people in video.',
                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1000&q=80', Eye]]
                    .map(([a, b, img, Icon]) =>
                        <div key={a} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">
                            <div className="relative">
                                <img className="h-72 w-full object-cover" src={img} />
                                <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-black/60">
                                    <Icon />
                                </span>
                                <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-blue-600">
                                    <Play size={16} fill="currentColor" />
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-blue-400">
                                    <BrainCircuit size={14} /> AI Model</div>
                                <h3 className="mt-3 text-xl font-bold">{a}</h3>
                                <p className="mt-2 text-sm text-slate-400">{b}</p>
                            </div>
                        </div>)}
            </div>
        </section>
        <CTA title="Ready to Leverage AI?" text="Let's discuss how AI and machine learning can transform your business processes and drive innovation." />
    </div>
}
