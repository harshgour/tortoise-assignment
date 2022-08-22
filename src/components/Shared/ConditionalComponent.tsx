import React from "react";

type ConditionalComponentProps = {
	isVisible: Boolean;
	children: JSX.Element | null;
};

const ConditionalComponent: React.FC<ConditionalComponentProps> = (props) => {
	return props.isVisible ? props.children : null;
};

export default ConditionalComponent;
