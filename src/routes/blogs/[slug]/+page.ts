import { posts } from '../../../posts/index';

export const load = async ({ params }) => {
  const post = await import(`../../../posts/${params.slug}.md`);
  const { default: content } = post;
	const metadata = posts.find(p => p.slug === params.slug);
	
	return {
		content,
		metadata
	};
};