import { posts } from '../posts/index';

export const load = async () => {
	const sortedPosts = posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return {
		posts: sortedPosts
	};
};

