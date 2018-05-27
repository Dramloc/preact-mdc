import { h } from 'preact';

import readme from '../../../../README.md';

import Markdown from '../../components/markdown';

export default function Home() {
	return <Markdown content={readme} />;
}
