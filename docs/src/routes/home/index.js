import { h } from 'preact';

import readme from '@preact/mdc/README.md';

import Markdown from '../../components/markdown';

export default function Home() {
  return <Markdown content={readme} />
}
