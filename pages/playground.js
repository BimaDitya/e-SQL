import Head from "next/head";
import dynamic from "next/dynamic";
const CodeEditor = dynamic(import("@/components/editor"), { ssr: false });
export default function Playground() {
	return (
		<>
			<Head>
				<title>Playground</title>
				<link rel="icon" href="/icons/favicon.ico"></link>
			</Head>
			<div className="flex flex-row px-16 py-6">
				{/* Left */}
				<div className="items-start h-full flex w-full justify-center">
					<div className="w-[30%] p-4 rounded-md backdrop-blur-sm bg-white/10 border-2 border-gray-200 mr-2">
						<p className="text-xl font-head font-semibold text-secondary-400">
							Latihan
						</p>
					</div>
					{/* Right */}
					<CodeEditor />
				</div>
			</div>
		</>
	);
}
