import Head from "next/head";
import PropTypes from "prop-types";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords.join("")} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
};
Meta.PropTypes = {
	title: PropTypes.string.isRequired,
	keywords: PropTypes.array.isRequired,
	description: PropTypes.string.isRequired,
};
Meta.defaultProps = {
	title: "WebDev Newz",
	keywords: ["web development, programming, SEO, SSR"],
	description: "Get the latest news in web dev",
};

export default Meta;
