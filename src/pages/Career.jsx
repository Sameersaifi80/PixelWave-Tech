import { ArrowRight, BriefcaseBusiness, GraduationCap, Users } from 'lucide-react';
import { CTA, SectionTitle } from '../components/Layout';
import { Link } from 'react-router-dom';

const courses = [['Web Development', 'Web development ranges from simple static sites to complex applications.',
    ['HTML & CSS', 'Node.js & APIs', 'MongoDB', 'Bootstrap', 'JavaScript']
    , 'Rs. 40,000/-', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'],
['React Development', 'Build modern UI with components, rendering lists, events and forms.',
    ['Introduction to React', 'Components', 'Rendering Lists', 'Event Handling', 'Forms & Context'],
    'Rs. 50,000/-', 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80'],
['Node Js Development', 'Learn server-side JavaScript, HTTP servers and asynchronous programming.',
    ['Node.js Framework', 'Node Projects', 'HTTP Server', 'Async Programming', 'Streams & Events'],
    'Rs. 35,000/-', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80'],
['Mern Stack Development', 'A collection of technologies enabling faster full-stack application development.',
    ['MERN Stack', 'MongoDB', 'Advanced React', 'Full Front-end', 'Project Development'],
    'Rs. 35,000/-', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80']];
export default function Career() {
    return <div>
        <section className="grid-bg">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">Career & Education</p>
                    <h1 className="display mt-4 text-4xl font-bold sm:text-6xl">
                        Getting Quality Education And Technical Skills Together Is Now More Easy!</h1>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        We work on live projects and provide practical education to students looking for a great career change.</p>
                    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-bold">
                        Explore Courses <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <img className="h-72 w-full rounded-3xl object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80" />
                    <img className="mt-10 h-72 w-full rounded-3xl object-cover" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80" />
                </div>
            </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <SectionTitle eyebrow="Our Value To Help You" title="Build a Brighter Future">Learning, training, internship and placement support designed around employability.
            </SectionTitle>
            <div className="mt-12 grid gap-4 md:grid-cols-4">
                {[['Learning', GraduationCap, 'Paid learning with practical guidance.'],
                ['Training', Users, 'Experienced mentors and interview preparation.'],
                ['Internship', BriefcaseBusiness, 'Hands-on experience through live work.'],
                ['Placement', ArrowRight, 'Support connecting trained students with opportunities.']]
                    .map(([a, Icon, b]) => <div key={a} className="rounded-2xl border border-slate-800 p-6">
                        <Icon className="text-blue-400" />
                        <h3 className="mt-5 font-bold">{a}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{b}</p>
                    </div>)}
            </div>
        </section>
        <section className="bg-slate-950/50">
            <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <SectionTitle eyebrow="Most Demanding Course" title="Learn by Building" />
                <div className="mt-12 grid gap-5 md:grid-cols-2">{courses.map(([a, b, bullets, price, img]) =>
                    <div key={a} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
                        <img className="h-56 w-full object-cover" src={img} />
                        <div className="p-6">
                            <h3 className="text-xl font-bold">{a}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-400">{b}</p>
                            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-blue-400">
                                Topics Covered</p>
                            <div className="mt-3 grid grid-cols-2 gap-2">{bullets.map(x =>
                                <div key={x} className="text-xs text-slate-300">• {x}</div>)}
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <strong>{price}</strong>
                                <Link to="/contact" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950">
                                    Apply Now</Link>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <SectionTitle eyebrow="Our Achievement" title="Outcomes That Matter" />
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[['1500+', 'Students placed'], ['800+', 'Hiring partners'], ['1000+', 'Industry experts'],
                ['90%', 'Placement Rate']].map(([a, b]) =>
                    <div key={b} className="rounded-2xl border border-slate-800 p-6">
                        <div className="text-3xl font-bold text-blue-400">{a}</div>
                        <p className="mt-2 text-sm text-slate-400">{b}</p>
                    </div>)}
            </div>
        </section>
        <CTA title="24 / 7 & Lifelong Support to Career" text="Get personal guidance, dedicated placement support and interview practice from experienced professionals." />
    </div>
}
