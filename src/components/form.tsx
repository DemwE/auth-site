export default function Form({
	children,
}: {
	children: React.ReactNode;
}) {
	{
		return (
			<div className="bg-zinc-50 text-gray-950 p-4 rounded-xl w-2/5 px-6">
				{children}
			</div>
		);
	}
}
