import axios from "axios";

const handler = async ({ query: { id } }, res) => {
	try {
		const { data: article } = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		if (Object.keys(article).length > 0) res.status(200).json(article);
		else res.status(404).json({ message: "No such article found" });
	} catch (error) {
		res.status(404).json({ message: "No such article found" });
	}
};

export default handler;
