import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import { toKebabCase } from './lib/string-utils';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const computedFields: ComputedFields = {
slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
},
params: {
    type: 'list',
    resolve: (doc) => doc._raw.flattenedPath.split('/'),
},
};

const Blog = defineDocumentType(() => ({
name: 'Blog',
filePathPattern: 'blog/**/*.mdx',
contentType: 'mdx',
fields: {
    featured: { type: 'boolean' },
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
},
computedFields: {
    ...computedFields,
    ogImageUrl: {
    type: 'string',
    resolve: (doc) => `https://www.fabrik.se/static/images/og/${toKebabCase(doc.title)}.png`,
    },
},
}));

const Review = defineDocumentType(() => ({
name: 'Review',
filePathPattern: 'reviews/*.mdx',
contentType: 'mdx',
fields: {
    featured: { type: 'boolean' },
    format: { type: 'string' },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    image: { type: 'string', required: true },
    url: { type: 'string', required: true },
    product: { type: 'string' },
    tags: { type: 'list', required: true, of: { type: 'string' } },
},
computedFields,
}));

const contentLayerConfig = makeSource({
contentDirPath: 'data',
documentTypes: [Blog, Review],
mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
    rehypeSlug,
    [
        rehypeAutolinkHeadings,
        {
        behavior: 'append',
        test: ['h2', 'h3', 'h4', 'h5', 'h6'],
        properties: {
            className: ['anchor'],
        },
        },
    ],
    ],
},
});

export default contentLayerConfig;
