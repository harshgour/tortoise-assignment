import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HeaderProps } from "../../types";

const BrandImageBanner: React.FC<HeaderProps> = (props) => {
	const [searchQuery, setSearchQuery] = useState<string>("");

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setSearchQuery(e.currentTarget.value);
	};
	const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === "Enter") {
			console.log("triggered");
			props.onChange(e);
		}
	};

	return (
		<div className='brand-image w-full bg-slate-400 relative min-h-[30vh]'>
			<img
				src='https://picsum.photos/id/538/1000/300'
				className='w-full min-h-[30vh]'
				alt=''
			/>
			<div className='brand-imagecontent absolute top-[50%] left-[50%] text-left -translate-x-1/2 -translate-y-1/2 w-max md:w-2/3 lg:w-2/5'>
				<div className='brandname-title text-md md:text-2xl lg:text-5xl font-bold text-white mb-6'>
					BrandName.
				</div>
				<div className='brand-description text-sm md:text-lg lg:text-xl font-medium text-white'>
					Some random description about the page.
				</div>
				<div className='brand-poweredby text-sm md:text-lg lg:text-xl font-medium text-white'>
					Powered by the creator.
				</div>
				<div className='image-searchbar my-5 bg-white px-4 rounded-md hidden md:flex'>
					<span className='pr-2 my-auto text-xl'>
						<IoSearchOutline />
					</span>
					<input
						type='text'
						className='w-full h-8 md:h-10 lg:h-14 focus-visible:outline-none placeholder:text-gray-500 placeholder:text-sm'
						placeholder='Search free high-resolution photos'
						value={searchQuery}
						onChange={handleChange}
						onKeyUp={handleSubmit}
					/>
				</div>
				<div className='trending text-sm text-white'>
					<span className='font-medium'>Trending: </span>
					<span className='text-slate-200 font-medium'>
						flower, wallpaper, backgrounds
					</span>
				</div>
			</div>
		</div>
	);
};

export default BrandImageBanner;
