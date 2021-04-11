import axios from "axios";
import ArticleList from "../components/ArticleList";
import URI from "../config";

export default function Home({ articles }) {
	return (
		<div>
			<ArticleList articles={articles} />
		</div>
	);
}

export const getStaticProps = async () => {
	const { data: articles } = await axios.get(`${URI}/api/articles`);
	return {
		props: { articles },
	};
};
