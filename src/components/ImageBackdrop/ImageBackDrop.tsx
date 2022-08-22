import React from "react";
import { IoHeart } from "react-icons/io5";
import { ImageBackDropProps } from "../../types";

const ImageBackDrop: React.FC<ImageBackDropProps> = (props) => {
	return (
		<div className='image-hover-backdrop cursor-pointer absolute h-full w-full top-0 left-0 text-white justify-between flex-col p-6 hidden md:flex opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.4)]'>
			<div className='flex justify-end'>
				<span
					className='text-lg text-white-500 border border-solid border-slate-300 py-1 px-2 rounded-sm cursor-pointer'
					onClick={() => props.handleImageLike(props.image.id)}>
					<IoHeart />
				</span>
			</div>
			<div className='flex justify-between'>
				<div className='flex'>
					<img
						src={props.user.profile_image}
						className='h-6 w-6 rounded-full mr-2'
						alt=''
					/>
					<span className='font-medium'>{props.user.name}</span>
				</div>
				<span
					className='text-sm border border-solid border-slate-300 text-white-500 font-medium py-1 px-2 rounded-sm cursor-pointer'
					onClick={() => props.handleImageDownload(props.image.downloadLink)}>
					Download
				</span>
			</div>
		</div>
	);
};

export default ImageBackDrop;
