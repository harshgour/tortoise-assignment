import React, { useEffect } from "react";
import { FakeEventType, HeaderProps } from "../../types";
import "./Header.scss";
import HeaderMenu from "./HeaderMenu";
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderSearchBar from "./HeaderSearchBar";

const Header: React.FC<HeaderProps> = (props) => {
	//states
	const [searchQuery, setSearchQuery] = React.useState<string>("");
	const [windowScrolled, setWindowScrolled] = React.useState<Boolean>(false);

	//listeners
	window.addEventListener("scroll", (e: any) => {
		if (e.currentTarget.scrollY) {
			setWindowScrolled(true);
		} else {
			setWindowScrolled(false);
		}
	});

	//useEffect
	useEffect(() => {
		setSearchQuery(props.query);
	}, [props.query]);

	//functions
	const handleHeaderOptionClick = (action: string) => {}; //TBD
	const handleQueryChange = (e: React.FormEvent<HTMLInputElement>) => {
		setSearchQuery(e.currentTarget.value);
	};
	const handleQuerySubmit = (
		e: React.KeyboardEvent<HTMLInputElement> | FakeEventType,
	) => {
		if (e.code === "Enter" || e.code === "click") {
			console.log("triggered");
			props.onChange(e);
		}
	};
	const handleClearQuery = () => {
		setSearchQuery("");
		props.onChange({ currentTarget: { value: "" } });
	};

	return (
		<div
			className={`header sticky top-0 bg-white z-50 ${
				windowScrolled ? "show-shadow" : ""
			}`}>
			<div className='nav-header flex justify-between items-center py-1'>
				<div className='nav-header-title h-14 p-6 py-4 flex items-center justify-center cursor-pointer'>
					<a
						href=''
						className='h-full decoration-none flex my-auto'
						rel='noopener noreferrer'>
						<img
							src='https://picsum.photos/200'
							alt='random-logo'
							className='h-full mr-2'
						/>
						<span className='my-auto'>Logo</span>
					</a>
				</div>
				<HeaderSearchBar
					searchQuery={searchQuery}
					onSubmit={handleQuerySubmit}
					onChange={handleQueryChange}
					onClear={handleClearQuery}
				/>
				<HeaderNavMenu handleClick={handleHeaderOptionClick} />
			</div>
			<HeaderMenu handleSubmit={handleQuerySubmit} />
		</div>
	);
};

export default Header;
