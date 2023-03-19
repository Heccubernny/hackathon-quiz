import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

const Onboarding = () => {
	const [screen, setScreen] = useState(0);
	const [check, setCheck] = useState(false);

	const screenDisplay = () => {
		if (screen === 0) {
			return <FirstStep check={check} setCheck={setCheck} />;
		} else if (screen === 1) {
			return <SecondStep />;
		}
	};

	return (
		<section className="">
			<div className="py-8">
				{screenDisplay()}

				<div className="flex justify-center mt-7 gap-5">
					<Link className="bg-[#F9A826] text-white font-semibold py-2 px-6 rounded-md" href="/quiz">
						Proceed
					</Link>
					<Button
						onClick={() => {
							setScreen((prev) => prev + 1);
						}}
						label="Start"
						classes="bg-[#F9A826] text-white font-semibold py-2 px-6 rounded-md "
					/>
				</div>
			</div>
		</section>
	);
};

export default Onboarding;