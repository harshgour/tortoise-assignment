import React, {
	LegacyRef,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import useImageSearch from "../../Hooks/useImageSearch";
import { ImageGridProps } from "../../types";
import ImageBackDrop from "../ImageBackdrop/ImageBackDrop";
import ImageWrap from "../ImageWrap/ImageWrap";

const ImageGrid: React.FC<ImageGridProps> = (props) => {
	const { allImages, hasMore, loading } = useImageSearch(
		props.query,
		props.pageNumber,
	);

	const observer = useRef<any>();
	const lastImageRef = useCallback(
		(node: Node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					props.increasePageNumber();
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore],
	) as LegacyRef<HTMLImageElement>;

	const handleImageDownload = (downloadLink: string) => {
		console.log("Downloaded Image ", downloadLink);
	};
	const handleImageLike = (imageId: string | number) => {
		console.log("Image Liked/Unliked! ", imageId);
	};

	return (
		<>
			<div className='image-container container mx-auto flex flex-wrap md:px-2 mt-12 row'>
				{allImages.map((columnImages, index) => {
					return (
						<div
							className='column md:px-2 flex-[100%] md:flex-[50%] lg:flex-[33.33%]'
							key={index}>
							{columnImages.map(({ image, user }, imageIndex) => {
								return (
									<div
										className={`images relative mt-14 md:mt-4`}
										key={imageIndex}>
										<ImageBackDrop
											user={user}
											image={image}
											handleImageDownload={handleImageDownload}
											handleImageLike={handleImageLike}
										/>
										<ImageWrap
											user={user}
											image={image}
											handleImageDownload={handleImageDownload}>
											{index + 1 === allImages.length &&
											imageIndex + 1 === columnImages.length - 1 ? (
												<div
													style={{
														backgroundColor: image["color"],
														minHeight: `${Math.floor(
															image["aspect_ratio"] * 320,
														)}px`,
													}}>
													<img
														key={imageIndex}
														src={image["url"]}
														alt=''
														className='w-full align-middle hover:brightness-[0.8] cursor-pointer'
														loading='eager'
														ref={lastImageRef}
														sizes='(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw'
													/>
												</div>
											) : (
												<div
													style={{
														backgroundColor: image["color"],
														minHeight: `${Math.floor(
															image["aspect_ratio"] * 320,
														)}px`,
													}}>
													<img
														key={imageIndex}
														src={image["url"]}
														alt=''
														className='w-full align-middle hover:brightness-[0.8] cursor-pointer'
														loading='eager'
														sizes='(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw'
													/>
												</div>
											)}
										</ImageWrap>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ImageGrid;