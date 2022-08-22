export type User = {
	name: string;
	profile_image: string;
};

export type Image = {
	id: string | number;
	downloadLink: string;
	aspect_ratio: number;
	color: string;
};

export type ImageBackDropProps = {
	handleImageLike: (imageId: string | number) => void;
	handleImageDownload: (downloadLink: string) => void;
	user: User;
	image: Image;
};

export type ImageWrapProps = {
	children: JSX.Element | null;
	user: User;
	image: Image;
	handleImageDownload: (downloadLink: string) => void;
};

export type ImageGridProps = {
	query: string;
	pageNumber: number;
	increasePageNumber: () => void;
};

export type FakeEventType = {
	currentTarget: any;
	code?: string;
};

export type HeaderProps = {
	onChange: (e: React.FormEvent<HTMLInputElement> | FakeEventType) => void;
	query: string;
};

export type HeaderMenuProps = {
	handleSubmit: (e: React.FormEvent<HTMLInputElement> | FakeEventType) => void;
};
