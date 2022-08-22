import React from "react";
import { headerNavOptions } from "../../constants";
import { IoMenuOutline } from "react-icons/io5";

type HeaderNavMenuProps = {
	handleClick: (action: string) => void;
};

const HeaderNavMenu: React.FC<HeaderNavMenuProps> = (props) => {
	return (
		<div className='nav-header-options flex w-max text-sm p-2'>
			{headerNavOptions.map((options, index) => {
				return (
					<div
						className={`flex lg:border-r ${
							headerNavOptions.length !== index + 1
								? "lg:border-r-slate-400"
								: "border-none"
						}`}
						key={"option" + index}>
						{options.map((option, index) => {
							return option.label ? (
								<div
									className={`header-option p-4 py-1 my-auto cursor-pointer text-gray-700 font-medium hover:text-black hidden lg:block ${
										option.type === "button"
											? "border border-solid border-slate-300 rounded-md hover:border-black"
											: ""
									}`}
									key={option.label}
									onClick={() => props.handleClick(option.action)}>
									{<div>{option.label}</div>}
								</div>
							) : (
								<div
									className={`header-option p-4 py-1 my-auto cursor-pointer text-gray-700 font-medium hover:text-black 
											}`}
									key={option.label}
									onClick={() => props.handleClick(option.action)}>
									<div className='text-2xl'>
										<IoMenuOutline />
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default HeaderNavMenu;
