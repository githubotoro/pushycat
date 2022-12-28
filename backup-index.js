import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { Connect } from "../components";

export default function Home() {
	return (
		<>
			<Head>
				<title>Pushycat</title>
				<meta
					name="description"
					content="Say Meow and join the Pushycat Club."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="mainbg flex flex-col w-full min-h-screen items-center place-content-center bg-gradient-to-br from-zeus to-black">
				<div className="p-3 flex flex-col max-w-3xl h-full items-center place-content-center space-y-3 sm:space-y-5">
					<div
						className="flex pb-3 sm:pb-4 font-black drop-shadow-md sm:drop-shadow-lg text-7xl sm:text-8xl
					               text-transparent bg-clip-text bg-gradient-to-r from-magenta to-indigo"
					>
						Pushycat
					</div>
					<div className="flex max-w-2xl text-center font-bold text-lg sm:text-xl drop-shadow-sm text-white">
						A cool Web3 katty club (😎) built on Push Protocol that
						is decentralized + gasless (😳) -- Join Today! 😸
					</div>
					<div className="flex align-middle justify-center max-w-xl h-72">
						<img
							className="object-cover rounded-xl drop-shadow-md w-full"
							src="https://media4.giphy.com/media/3crgHaTFiQjkE13reC/giphy.gif?cid=ecf05e472h5foafalvbrfuur22rugmd51bxkvws9hy6hvb78&rid=giphy.gif&ct=g"
						></img>
					</div>
					{/* <input
						placeholder="Email 📧"
						type="text"
						className="px-2 sm:px-3 py-1 sm:py-2 rounded-xl text-md sm:text-lg
						         text-zeus w-full outline-none border-4 border-amour
						           focus:drop-shadow-lg focus:border-indigo bg-amour focus:bg-bianca"
					></input>
					<textarea
						placeholder="Message 👀"
						rows="4"
						className="px-2 sm:px-3 py-1 sm:py-2 rounded-xl text-md sm:text-lg
						         text-zeus w-full outline-none border-4 border-amour
						           focus:drop-shadow-lg focus:border-indigo bg-amour focus:bg-bianca"
						type="text"
					></textarea> */}
					<Connect />
				</div>
			</main>

			{/* <footer className="-mt-12 w-full text-center align-text-bottom text-bianca italic font-semibold">
				built with <span className="font-extrabold">@shipends</span>
			</footer> */}
		</>
	);
}
