import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { headerMenuOptions } from "../../constants";
import { HeaderMenuProps } from "../../types";

import "./Header.scss";

const HeaderMenu: React.FC<HeaderMenuProps> = (props) => {
	//states
	const [arrowPosition, setArrowPosition] = React.useState<string>("right");

	//functions
	const handleMenuScroll: React.UIEventHandler<HTMLDivElement> = (
		e: React.SyntheticEvent,
	): any => {
		const windowWidth = window.innerWidth;
		if (windowWidth < e.currentTarget.scrollWidth + 100) {
			if (
				e.currentTarget.scrollLeft > 0 &&
				e.currentTarget.scrollLeft <
					e.currentTarget.scrollWidth - e.currentTarget.clientWidth
			) {
				setArrowPosition("both");
			} else if (
				e.currentTarget.scrollLeft ===
				e.currentTarget.scrollWidth - e.currentTarget.clientWidth
			) {
				setArrowPosition("left");
			} else {
				setArrowPosition("right");
			}
		}
	};
	const handleOptionClick = (label: string) => {
		props.handleSubmit({ currentTarget: { value: label }, code: "click" });
	};
	const handleLeftButtonClick: React.UIEventHandler<HTMLDivElement> = () => {}; //TBD
	const handleRightButtonClick: React.UIEventHandler<HTMLDivElement> = () => {}; //TBD

	return (
		<div className='header-menu px-6 py-1 flex relative'>
			<div
				className='header-menu-option border-r pr-4 py-2 my-auto border-r-slate-400 text-sm font-medium text-gray-700 hover:text-black cursor-pointer'
				onClick={() => handleOptionClick("")}>
				Editorial
			</div>
			{["left", "both"].includes(arrowPosition) && (
				<div
					className='menu-arrow arrow-left text-xl cursor-pointer'
					onClick={handleLeftButtonClick}>
					<IoChevronBackOutline />
				</div>
			)}
			{headerMenuOptions.map((options, index) => {
				return (
					<div
						className={`header-menu-options flex mx-4 py-2 overflow-x-auto overflow-y-hidden`}
						key={index}
						onScroll={handleMenuScroll}>
						{options.map((option, index) => {
							return (
								<div
									key={option.label + index}
									className={`header-menu-option whitespace-nowrap my-1 text-sm font-medium text-gray-700 hover:text-black cursor-pointer ${
										options.length !== index + 1 ? "pr-4" : ""
									}`}
									onClick={() => handleOptionClick(option.label)}>
									{option.label}
								</div>
							);
						})}
					</div>
				);
			})}
			{["right", "both"].includes(arrowPosition) && (
				<div
					className='menu-arrow arrow-right text-xl cursor-pointer'
					onClick={handleRightButtonClick}>
					<IoChevronForwardOutline />
				</div>
			)}
		</div>
	);
};

export default HeaderMenu;
