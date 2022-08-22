import { useState, useEffect } from "react";
import axios from "axios";

const useImageSearch = (query, pageNumber) => {
	const [loading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState("");
	const [allImages, setAllImages] = useState(
		window.innerWidth > 1024 ? [[], [], []] : [[], []],
	);
	const [hasMore, setHasMore] = useState(false);

	//useEffect
	useEffect(() => {
		setAllImages(window.innerWidth > 1024 ? [[], [], []] : [[], []]);
	}, [query]);

	useEffect(() => {
		setLoading(true);
		setError(false);
		let cancel;
		axios({
			method: "GET",
			url: query
				? `https://api.unsplash.com/search/photos`
				: `https://api.unsplash.com/photos`,
			params: {
				query,
				page: pageNumber,
				per_page: 12,
				client_id: process.env.REACT_APP_UNSPLASH_CLIENTID,
			},
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then((res) => {
				const data = res.data.results || res.data;
				let low =
					window.innerWidth > 1024
						? [0, Math.ceil(data.length / 3), Math.ceil(data.length / 3) * 2]
						: [0, Math.ceil(data.length / 2)];
				let high =
					window.innerWidth > 1024
						? [
								Math.ceil(data.length / 3),
								Math.ceil(data.length / 3) * 2,
								data.length,
						  ]
						: [Math.floor(data.length / 2), data.length];
				let srcset = [
					"100w",
					"200w",
					"300w",
					"400w",
					"500w",
					"600w",
					"700w",
					"800w",
					"900w",
					"1000w",
					"1100w",
				];
				setAllImages((prevImagesArray) => {
					return prevImagesArray.map((prevImages, index) => {
						return [
							...prevImages,
							...data.slice(low[index], high[index]).map((result) => {
								return {
									user: {
										name: result?.user?.name,
										profile_image: result?.user?.profile_image.small,
									},
									image: {
										srcSet: srcset
											.map((item) => {
												return `${result?.urls?.full}&w=${item} ${item}`;
											})
											.join(", "),
										url: result?.urls?.small,
										id: result?.id,
										downloadLink: result?.links?.download,
										aspect_ratio: result.height / result.width,
										color: result.color,
									},
								};
							}),
						];
					});
				});
				setHasMore(data.length > 0);
				setLoading(false);
			})
			.catch((e) => {
				if (axios.isCancel(e)) return;
				setError(e.response.data);
				setIsError(true);
				setLoading(false);
			});
		return () => cancel();
	}, [query, pageNumber]);

	return {
		loading,
		error,
		hasMore,
		allImages,
		isError,
	};
};

export default useImageSearch;
