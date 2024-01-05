import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Register",
	description: "Example register page",
};

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tr from-cyan-500 to-blue-500">
			<div className="bg-zinc-50 text-gray-950 p-4 rounded-xl">
				<h1 className="text-4xl font-bold">Register</h1>
			</div>
		</main>
	);
}
