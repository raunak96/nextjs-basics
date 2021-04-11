import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import URI from "../../config";

const article = ({ article }) => {
	// const { query } = useRouter();
	// const { id } = query;
	const router = useRouter();

	return (
		<>
			<Meta
				title={`Article ${article?.id ?? ""}`}
				description={`Details about Article ${article?.id ?? ""}`}
			/>
			{router.isFallback ? (
				<div>Loading...</div>
			) : (
				<>
					<h1>{article.title}</h1>
					<p>{article.body}</p>
					<br />
					<Link href="/">Go Back</Link>
				</>
			)}
		</>
	);
};

// Server Side Rendering- Makes this call on each request instead of build time as done in Statically generated

// export const getServerSideProps = async ({ params }) => {
// 	const { data: article } = await axios.get(
// 		`https://jsonplaceholder.typicode.com/posts/${params.id}`
// 	);
// 	return {
// 		props: {
// 			article,
// 		},
// 	};
// };

export const getStaticPaths = async () => {
	const { data: articles } = await axios.get(`${URI}/api/articles`);

	// only 6 posts generated run time, for rest fallback and when content loaded, display it (somewhat dynamic rendering though only 1st time)
	const paths = articles.slice(0, 6).map(article => ({
		params: { id: article.id.toString() },
	}));
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params }) => {
	const { data: article } = await axios.get(
		`${URI}/api/articles/${params.id}`
	);
	return {
		props: { article },
		revalidate: 1,
	};
};

export default article;
