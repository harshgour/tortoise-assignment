import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import BrandImageBanner from "./components/BrandBanner/BrandImageBanner";
import ConditionalComponent from "./components/Shared/ConditionalComponent";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import { FakeEventType } from "./types";

const App: React.FC = () => {
	const [query, setQuery] = useState("");
	const [pageNumber, setPageNumber] = useState(1);

	const handleSearch = (
		e: React.FormEvent<HTMLInputElement> | FakeEventType,
	) => {
		setQuery(e?.currentTarget?.value);
		setPageNumber(1);
	};

	const increasePageNumber = () => {
		setPageNumber((prev) => prev + 1);
	};

	return (
		<div className='App'>
			<Header onChange={(e) => handleSearch(e)} query={query} />
			<div className='content w-full text-center mt-6 mb-10'>
				<ConditionalComponent isVisible={!query}>
					<BrandImageBanner onChange={(e) => handleSearch(e)} query={query} />
				</ConditionalComponent>
				<ConditionalComponent isVisible={!!query}>
					<div className='mt-6'>Search results for "{query}"</div>
				</ConditionalComponent>
				<ImageGrid
					pageNumber={pageNumber}
					query={query}
					increasePageNumber={increasePageNumber}
				/>
			</div>
		</div>
	);
};

export default App;
