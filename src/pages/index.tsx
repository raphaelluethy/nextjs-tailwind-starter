import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="grid place-items-center grid-rows-2 grid-flow-col gap-4 h-[20vh]">
			<h1 className="text-2xl font-bold underline text-red-200">
				This is NextJs with TailwindCSS
			</h1>
			<p>by Raphael</p>
		</div>
	);
};

export default Home;
