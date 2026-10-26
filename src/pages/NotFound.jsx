import { Link } from 'react-router-dom';
export default function NotFound() {
    return (
        <div className="grid min-h-[70vh] place-items-center px-5 text-center">
            <div>
                <div className="text-7xl font-black text-blue-500">404</div>
                <h1 className="display mt-4 text-3xl font-bold">Page Not Found</h1>
                <p className="mt-3 text-slate-400">The page you are looking for does not exist.</p>
                <Link className="mt-7 inline-block rounded-full bg-white px-6 py-3 font-bold text-slate-950" to="/">Back Home</Link>
            </div>
        </div>
    )
}
