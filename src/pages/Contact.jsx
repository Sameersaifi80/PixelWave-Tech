import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
export default function Contact() {
    const [sent, setSent] = useState(false);
    const submit = e => {
        e.preventDefault();
        setSent(true)
    };
    return (
        <div>
            <section className="grid-bg px-5 py-20 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-400">Get In Touch</p>
                    <h1 className="display mt-4 text-5xl font-bold">Let's Talk About Your Project</h1>
                    <p className="mt-5 text-lg text-slate-400">
                        Whether you have a question, a project idea, or just want to say hello, our team is ready to listen.</p>
                </div>
            </section>
            <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
                <div>
                    <h2 className="display text-3xl font-bold">Reach Out Directly</h2>
                    <div className="mt-8 space-y-5">{[[Mail, 'Email Address', 'hello@pixelwavetech.com'],
                    [Phone, 'Phone Number', '+91 8076145183'],
                    [MapPin, 'Corporate Office', 'Cyber Hub, Gurugram, India']].map(([Icon, a, b]) => <div key={a} className="flex gap-4 rounded-2xl border border-slate-800 p-5">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                            <Icon size={19} />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider text-slate-500">{a}</p>
                            <p className="mt-1 font-semibold">{b}</p>
                        </div>
                    </div>)}
                    </div>
                    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800">
                        <div className="grid h-64 place-items-center bg-slate-900 text-center">
                            <MapPin className="mx-auto text-blue-400" />
                            <p className="mt-2 text-sm text-slate-400">Google Maps Placeholder<br />Cyber Hub, Gurugram</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={submit} className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
                    <h2 className="display text-3xl font-bold">Send Us a Message</h2>
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                        {[['Full Name', 'John Doe', 'text'], ['Email Address', 'you@company.com', 'email'],
                        ['Phone Number', '+91 XXXXXXXXX', 'tel'],
                        ['Subject / Service Needed', 'Full-Stack SaaS Platform Development', 'text']].map(([l, p, t]) =>
                            <label key={l} className="text-sm text-slate-400">{l} *
                                <input required type={t} placeholder={p} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-blue-500" />
                            </label>)}
                    </div>
                    <label className="mt-5 block text-sm text-slate-400">Your Message *<textarea required rows="6" placeholder="Tell us about your project..." className="mt-2 w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-blue-500" />
                    </label>
                    <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500">
                        <Send size={16} /> Send Message</button>
                    {sent && <p className="mt-4 text-sm text-emerald-400">
                        Message captured locally. Connect your backend/email service when you are ready to go live.</p>}
                </form>
            </section>
        </div>
    )
}
