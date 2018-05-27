import { h } from 'preact';
import { TabBar, Tab, TabBarScroller, TabIcon, TabIconText } from '../../../../src/tabs';

import '@material/tabs/mdc-tabs.scss';

import Showcase from '../../components/showcase';

function TabsHero() {
	return (
		<Showcase.Demo>
			<TabBar>
				<Tab modifiers={{ active: true }}>Home</Tab>
				<Tab>Merchandise</Tab>
				<Tab>About Us</Tab>
			</TabBar>
		</Showcase.Demo>
	);
}

function TabsDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Icon Tabs</Showcase.Section.Title>
				<Showcase.Demo>
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
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Icon with Text Tabs</Showcase.Section.Title>
				<Showcase.Demo>
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
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Scrolling Tabs</Showcase.Section.Title>
				<Showcase.Demo>
					<TabBarScroller>
						<Tab modifiers={{ active: true }}>Passionfruit</Tab>
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
				</Showcase.Demo>
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
