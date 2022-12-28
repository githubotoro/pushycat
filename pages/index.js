import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { Connect, Feed } from "../components";

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

			<svg className="pointer-events-none fixed isolate z-50 opacity-100 mix-blend-soft-light w-full h-full">
				<filter id="grains">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.70"
						numOctaves="5"
						stitchTiles="stitch"
					></feTurbulence>
				</filter>
				<rect width="100%" height="100%" filter="url(#grains)"></rect>
			</svg>

			<main className="flex flex-col w-full min-h-screen items-center place-content-center bg-bianca">
				<div className="p-3 flex flex-col max-w-3xl h-full items-center place-content-center space-y-3 sm:space-y-5">
					<div className="flex flex-col md:flex-row items-center place-content-center justify-center">
						<div className="flex flex-col place-content-center items-center">
							<div className="p-6 md:p-0">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1038.5 945.41"
									className="p-5 md:p-3 w-full md:w-auto md:h-[300px] md:mt-11"
								>
									<g id="eyes">
										<path
											d="M750.4,966.7H262.05c-133.27,0-241.3-108-241.3-241.3v-603c0-16.83,20.51-35.87,38-42.21s38-4.22,50.66,0l19.52,11.47,49.76,29.24,66.88,39.3,70.89,41.67q28.56,16.77,57.11,33.58c12.4,7.32,24,16.05,37.16,22.09,16.09,7.42,32.72,7.94,50.09,8.49,39.63,1.26,204-2.08,246.54-1.54,97,1.21,194.82,31.39,248.74,117.69a237.09,237.09,0,0,1,18,35.21,228.88,228.88,0,0,1,8.5,24.46,236.33,236.33,0,0,1,8.11,43.75q1,10.8,1,21.64V725.4C991.71,858.67,883.67,966.7,750.4,966.7Z"
											transform="translate(-20.75 -21.3)"
											className="fill-azure"
										/>
										<path
											d="M750.4,966.7H262.05c-133.27,0-241.3-108-241.3-241.3v-603c0-16.83,20.51-35.87,38-42.21s38-4.22,50.66,0l19.52,11.47,49.76,29.24,66.88,39.3,70.89,41.67q28.56,16.77,57.11,33.58c12.4,7.32,24,16.05,37.16,22.09,16.09,7.42,32.72,7.94,50.09,8.49,39.63,1.26,204-2.08,246.54-1.54,97,1.21,194.82,31.39,248.74,117.69a237.09,237.09,0,0,1,18,35.21,228.88,228.88,0,0,1,8.5,24.46,236.33,236.33,0,0,1,8.11,43.75q1,10.8,1,21.64V725.4C991.71,858.67,883.67,966.7,750.4,966.7Z"
											transform="translate(-20.75 -21.3)"
											className="fill-magenta"
										/>
										<path
											d="M329.6,911.82H818c133.27,0,241.3-108,241.3-241.3v-603c0-16.83-20.51-35.87-38-42.21s-38-4.22-50.66,0L951.08,36.77,901.32,66l-66.88,39.3L763.55,147Q735,163.75,706.44,180.56c-12.4,7.32-24,16.05-37.16,22.09-16.09,7.42-32.72,7.94-50.09,8.49-39.63,1.26-204-2.08-246.54-1.54-97,1.21-194.82,31.39-248.74,117.69a237.09,237.09,0,0,0-18,35.21A228.88,228.88,0,0,0,97.36,387a236.33,236.33,0,0,0-8.11,43.75q-1,10.8-1,21.64V670.52C88.29,803.79,196.33,911.82,329.6,911.82Z"
											transform="translate(-20.75 -21.3)"
											className="fill-azure"
										/>
										<path
											d="M991.71,507.23q0-10.83-1-21.64a236.33,236.33,0,0,0-8.11-43.75,228.88,228.88,0,0,0-8.5-24.46,237.09,237.09,0,0,0-18-35.21c-53.92-86.3-151.73-116.48-248.74-117.69-42.56-.54-206.91,2.8-246.54,1.54-17.37-.55-34-1.07-50.09-8.49-13.12-6-24.76-14.77-37.16-22.09q-20.12-11.85-40.25-23.67C250,220,170.53,252.68,123.91,327.29a237.09,237.09,0,0,0-18,35.21A228.88,228.88,0,0,0,97.36,387a236.33,236.33,0,0,0-8.11,43.75q-1,10.8-1,21.64V670.52c0,133.27,108,241.3,241.31,241.3H818a240.13,240.13,0,0,0,115.69-29.51A240.26,240.26,0,0,0,991.71,725.4Z"
											transform="translate(-20.75 -21.3)"
											className="fill-zeus"
										/>
										<circle
											cx="280.73"
											cy="571.8"
											r="82.32"
											className="fill-bianca"
										/>
										<circle
											cx="753.55"
											cy="571.8"
											r="82.32"
											className="fill-bianca"
										/>
										<path
											d="M568.3,830.67c.09-1.86.09-1.87-1.81-1.87h-46c-3.9,0-7.79,0-11.69,0-1.1,0-1.56.35-1.4,1.51.21,1.6.28,3.22.64,4.79,3.63,15.84,17.86,25.77,34.08,23.77A30.39,30.39,0,0,0,568.3,830.67Z"
											transform="translate(-20.75 -21.3)"
											className="fill-bianca"
										/>
										<path
											d="M614.55,801.35a20,20,0,0,1-10.19-3.44c-5.53-4-8.14-9.47-8.13-16.27q0-20.5,0-41a55.64,55.64,0,0,0-.59-8.84q-5.57-33.91-37.55-46.58c-2.31-.92-3.25-1.93-3.62-4.4A16.57,16.57,0,0,0,537,667c-8.91.69-15,6.8-15.92,15.73a1.88,1.88,0,0,1-1.46,1.8,57.88,57.88,0,0,0-39.79,51.75c-.32,5.37-.15,10.75-.18,16.12-.05,10.22.09,20.44-.09,30.66a18,18,0,0,1-8,14.82c-3.15,2.28-6.78,3.11-10.58,3.53a8.39,8.39,0,0,0-7.47,6.09,8.74,8.74,0,0,0,2.29,9.51,9.4,9.4,0,0,0,7,2.6H613.07a9.6,9.6,0,0,0,6.39-2,9.1,9.1,0,0,0,3-9.81A8.89,8.89,0,0,0,614.55,801.35Z"
											transform="translate(-20.75 -21.3)"
											className="fill-bianca"
										/>
									</g>
								</svg>
							</div>
						</div>

						<div className="-mt-8 md:mt-0 flex flex-col w-full items-center sm:space-y-3">
							<div
								className="flex p-3 sm:p-4 font-black text-6xl sm:text-8xl place-content-center
					               text-transparent bg-clip-text bg-gradient-to-r from-magenta to-indigo"
							>
								Pushycat
							</div>
							<div className="flex p-3 md:p-2 w-full md:w-[450px] lg:w-[550px] text-center justify-center font-bold text-lg sm:text-xl text-zeus">
								A cool Web3 katty club (😎) built on Push
								Protocol that is decentralized + gasless (😳) --
								Join Today! 😸
							</div>
							<Connect />
						</div>
					</div>

					{/* <div className="flex align-middle justify-center max-w-xl h-72 ">
						<img
							className="object-cover w-full rounded-xl"
							src="https://media4.giphy.com/media/3crgHaTFiQjkE13reC/giphy.gif?cid=ecf05e472h5foafalvbrfuur22rugmd51bxkvws9hy6hvb78&rid=giphy.gif&ct=g"
						></img>
					</div> */}

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
				</div>
				<Feed />
			</main>

			{/* <footer className="-mt-12 w-full text-center align-text-bottom text-bianca italic font-semibold">
				built with <span className="font-extrabold">@shipends</span>
			</footer> */}
		</>
	);
}
