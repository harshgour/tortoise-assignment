import React from "react";
import { IoHeart } from "react-icons/io5";
import { ImageWrapProps } from "../../types";

const ImageWrap: React.FC<ImageWrapProps> = (props) => {
	return (
		<>
			<div className='mobile-name text-left p-3 flex md:hidden'>
				<img
					src={props.user.profile_image}
					className='h-6 w-6 rounded-full mr-2'
					alt=''
				/>
				<span className='text-md font-medium'>{props.user.name}</span>
			</div>
			{props.children}
			<div className='mobile-download text-left p-3 flex justify-between items-center md:hidden'>
				<span className='text-lg text-gray-500 border border-solid border-slate-300 py-1 px-2 rounded-sm cursor-pointer'>
					<IoHeart />
				</span>
				<span
					className='text-sm border border-solid border-slate-300 text-gray-500 font-medium py-1 px-2 rounded-sm cursor-pointer'
					onClick={() => props.handleImageDownload(props.image.downloadLink)}>
					Download
				</span>
			</div>
		</>
	);
};

export default ImageWrap;
