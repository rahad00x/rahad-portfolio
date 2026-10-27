import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-screen max-w-xl place-content-center px-6 text-center">
      <p className="text-sm text-mute">Error 404</p>
      <h1 className="mt-2 text-5xl font-medium tracking-tight">Page not found</h1>
      <p className="mt-4 text-mute">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="mx-auto mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas">
        Back to home
      </Link>
    </main>
  );
}
