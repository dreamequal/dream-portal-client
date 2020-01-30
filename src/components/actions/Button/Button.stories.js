import React from "react";
import { action } from "@storybook/addon-actions";
import Button, { Types } from "./Button"

export default {
  	title: "Button",
  	component: Button,
};

export const Primary = () => (
	<Button
		label="Click Me"
		onClick={action("Clicked")}
		type={Types.PRIMARY}
	/>
);

export const Danger = () => (
	<Button
		label="Click Me"
		onClick={action("Clicked")}
		type={Types.DANGER}
	/>
);

export const Link = () => (
	<Button
		label="Click Me"
		onClick={action("Clicked")}
		type={Types.DANGER}
	/>
);