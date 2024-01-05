"use client";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();
	router.push("/auth/login");

	return <main className="bg-gray-950 h-screen"></main>;
}
