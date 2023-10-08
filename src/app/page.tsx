"use client";
import { useState } from "react";
import type { MouseEventHandler } from "react";
import LazyImage from "@/components/LazyImage";
import Head from "next/head";
import { random } from "lodash";

const myRandom = () => random(1, 123);

const generateId = (): string =>
	Math.random().toString(36).substring(2, 9);

export default function Home() {
	const [images, setImages] = useState<
		IImageItem[]
	>([]);

	const addNewFox: MouseEventHandler<
		HTMLButtonElement
	> = (event): void => {
		event.preventDefault();
		const newImage: IImageItem = {
			id: generateId(),
			url: `https://randomfox.ca/images/${myRandom()}.jpg`,
		};
		setImages([...images, newImage]);
	};

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="flex justify-center flex-col gap-3 p-10">
					<h1 className="text-3xl font-bold underline">
						Hey Platzi 😎!
					</h1>
					<button
						onClick={addNewFox}
						className="bg-blue-300 w-1/3 h-16 rounded"
					>
						Add new Fox
					</button>
					{images.map(({ id, url }) => (
						<div key={id} className="p-4">
							<LazyImage
								src={url}
								width={320}
								height="auto"
								className="rounded bg-gray-300"
								onClick={() =>
									console.log("hioiiii")
								}
							/>
						</div>
					))}
				</div>
			</main>

			<footer></footer>
		</div>
	);
}
