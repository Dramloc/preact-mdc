import { h } from 'preact';

import '@material/tabs/mdc-tabs.scss';

import Showcase from '../../components/showcase';
import { TabBar, Tab, TabBarScroller, TabIcon, TabIconText } from '../../components/mdc-tabs';

function TabsHero() {
	return (
		<TabBar>
			<Tab modifiers={{ active: true }}>Home</Tab>
			<Tab>Merchandise</Tab>
			<Tab>About Us</Tab>
		</TabBar>
	);
}

function TabsDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Icon Tabs</Showcase.Section.Title>
				<TabBar>
					<Tab modifiers={{ active: true }}>
						<TabIcon>home</TabIcon>
					</Tab>
					<Tab>
						<TabIcon>shopping_cart</TabIcon>
					</Tab>
					<Tab>
						<TabIcon>info_outline</TabIcon>
					</Tab>
				</TabBar>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Icon with Text Tabs</Showcase.Section.Title>
				<TabBar modifiers={{ 'icons-with-text': true }} activeTabIndex={1}>
					<Tab>
						<TabIcon>home</TabIcon>
						<TabIconText>Home</TabIconText>
					</Tab>
					<Tab>
						<TabIcon>shopping_cart</TabIcon>
						<TabIconText>Merchandise</TabIconText>
					</Tab>
					<Tab>
						<TabIcon>info_outline</TabIcon>
						<TabIconText>About Us</TabIconText>
					</Tab>
				</TabBar>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Scrolling Tabs</Showcase.Section.Title>
				<TabBarScroller>
					<Tab>Passionfruit</Tab>
					<Tab>Orange</Tab>
					<Tab>Guava</Tab>
					<Tab>Pitaya</Tab>
					<Tab>Pineapple</Tab>
					<Tab>Mango</Tab>
					<Tab>Papaya</Tab>
					<Tab>Lychee</Tab>
					<Tab>Mangosteen</Tab>
					<Tab>Banana</Tab>
					<Tab>Pomelo</Tab>
					<Tab>Tamarind</Tab>
					<Tab>Durian</Tab>
					<Tab>Jackfruit</Tab>
				</TabBarScroller>
			</Showcase.Section>
		</div>
	);
}

export default function TabsShowcase() {
	return (
		<Showcase
			title="Tabs"
			description="Tabs make it easy to explore and switch between different views."
			hero={<TabsHero />}
			guidelinesLink="https://material.io/design/components/tabs.html"
			documentationLink="https://material.io/components/web/catalog/tabs/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-tabs"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/tabs"
			demos={<TabsDemos />}
		/>
	);
}
