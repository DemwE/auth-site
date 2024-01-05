// Nic nie moge zrobic, udostepnij port

import { Metadata } from "next";
import Form from "@/components/form";
import Github from "@/components/github";
import Google from "@/components/google";


export const metadata: Metadata = {
	title: "Login",
	description: "Example login page",
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tr from-sky-500 to-indigo-500">
			<Form>
				<h1 className="text-3xl text-center pb-2.5 font-medium">Login in</h1>
				<div className="space-y-5">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-nunito font-bold leading-6 text-gray-900"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-nunito font-bold leading-6 text-gray-900"
							>
								Password
							</label>
							<div className="text-sm">
								<a
									href="#"
									className="font-nunito text-gray-800 hover:text-gray-500"
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
						>
							Sign in
						</button>
					</div>
					<div className="flex space-x-2">
						<Google />
						<Github />
					</div>
					<div className="text-sm text-center">
						<a
							href="#"
							className="font-nunito text-gray-800 hover:text-gray-500"
						>
							Don't have an account?
						</a>
					</div>
				</div>
			</Form>
		</main>
	);
}
