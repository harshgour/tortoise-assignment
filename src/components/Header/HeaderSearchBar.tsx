import React from "react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

type HeaderSearchBarProps = {
	searchQuery: string;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onClear: () => void;
};

const HeaderSearchBar: React.FC<HeaderSearchBarProps> = (props) => {
	return (
		<div className='nav-header-search flex-grow p-2'>
			<div className='flex bg-[#eee] px-6 py-2 rounded-full focus-within:bg-white focus-within:ring-1 ring-pink ring-inset ring-black'>
				<span className='pr-2 my-auto'>
					<IoSearchOutline />
				</span>
				<input
					type='text'
					className='w-full block bg-inherit focus-visible:outline-none placeholder:text-gray-500 placeholder:text-sm'
					placeholder='Search free high-resolution photos'
					value={props.searchQuery}
					onChange={props.onChange}
					onKeyUp={props.onSubmit}
				/>
				{props.searchQuery && (
					<span
						className='pl-2 my-auto text-xl cursor-pointer'
						onClick={props.onClear}>
						<IoCloseOutline />
					</span>
				)}
			</div>
		</div>
	);
};

export default HeaderSearchBar;
