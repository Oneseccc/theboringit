import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)] px-8">
			{/* Navigation */}
			<nav className="flex gap-8 mb-16 text-sm text-gray-400">
				<a href="/projects" className="hover:text-white transition-colors">
					Projects
				</a>
				<a href="/contact" className="hover:text-white transition-colors">
					Contact
				</a>
			</nav>

			{/* Main Header */}
			<h1 className="text-6xl sm:text-8xl font-bold tracking-tight mb-6 text-center">
				TheBoringIT.
			</h1>

			{/* Optional description */}
			<p className="text-gray-400 text-center text-lg max-w-xl">
				Creating simple and modern solutions for developers.
			</p>
		</div>
	);
}

