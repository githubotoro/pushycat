import * as PushAPI from "@pushprotocol/restapi";
import { useEffect, useState } from "react";
import useSWR from "swr";

// const getNotifications = async () => {
// 	const notifications = await PushAPI.user.getFeeds({
// 		user: "eip155:5:0xC424Bde140D16E7Ff86c49Ee84fFeEEfCafc26Ba", // user address in CAIP
// 		env: "staging",
// 	});

// 	console.log(notifications);
// };

const fetcher = async () => {
	const response = await PushAPI.user.getFeeds({
		user: "eip155:5:0xC424Bde140D16E7Ff86c49Ee84fFeEEfCafc26Ba",
		env: "staging",
	});

	await response;

	console.log(response[0]);

	return response;
};

const Feed = () => {
	const [feed, setFeed] = useState("");

	const { data, error } = useSWR("Notifications", fetcher);

	return (
		<>
			<div className="w-full bg-blue-200">This is my feed</div>
			<button
				onClick={() => {
					getNotifications();
				}}
			>
				Get Notifications
			</button>

			{/* {data.notification.title}
			{data.notification.body} */}
		</>
	);
};

export default Feed;
