import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components
		// h1: props => <h1 className='text-4xl font-bold mt-8 mb-4' {...props} />
	};
}
