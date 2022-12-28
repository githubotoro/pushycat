import { ConnectButton } from "@rainbow-me/rainbowkit";
import Meow from "./Meow";

const Connect = () => {
	return (
		<ConnectButton.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openChainModal,
				openConnectModal,
				authenticationStatus,
				mounted,
			}) => {
				const ready = mounted && authenticationStatus !== "loading";
				const connected =
					ready &&
					account &&
					chain &&
					(!authenticationStatus ||
						authenticationStatus === "authenticated");
				return (
					<div
						{...(!ready && {
							"aria-hidden": true,
							style: {
								opacity: 0,
								pointerEvents: "none",
								userSelect: "none",
							},
						})}
					>
						{(() => {
							if (!connected) {
								return (
									<div className="border-animate shadow-[0_0_0_0px_#FFCCFC] hover:shadow-[0_0_0_6px_#FFCCFC] rounded-lg border-opacity-20">
										<button
											onClick={openConnectModal}
											type="button"
											className="px-3 sm:px-4 py-2 rounded-lg text-md sm:text-lg font-bold
                                                       bg-gradient-to-br from-magenta to-violet text-bianca"
										>
											Connect Wallet
										</button>
									</div>
								);
							}
							if (chain.unsupported) {
								return (
									<div className="border-animate shadow-[0_0_0_0px_#FCD7D6] hover:shadow-[0_0_0_6px_#FCD7D6] rounded-lg border-opacity-20">
										<button
											onClick={openChainModal}
											type="button"
											className="px-3 sm:px-4 py-2 rounded-lg text-md sm:text-lg font-bold
                                                   bg-gradient-to-r from-error to-ruddy text-bianca"
										>
											Wrong network!
										</button>
									</div>
								);
							}
							return (
								<div
									style={{ display: "flex" }}
									className="space-x-8"
								>
									<div className="border-animate shadow-[0_0_0_0px_#CCF5FF] hover:shadow-[0_0_0_6px_#CCF5FF] rounded-lg border-opacity-20">
										<button
											onClick={openAccountModal}
											type="button"
											className="px-3 sm:px-4 py-2 rounded-lg text-md sm:text-lg font-bold
                                                       bg-gradient-to-br from-aqua to-azure text-bianca"
										>
											{account.displayName}
											{account.displayBalance
												? ` (${account.displayBalance})`
												: ""}
										</button>
									</div>

									{/* <Meow /> */}
								</div>
							);
						})()}
					</div>
				);
			}}
		</ConnectButton.Custom>
	);
};

export default Connect;
