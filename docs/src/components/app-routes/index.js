import { h } from 'preact';
import { Router } from 'preact-router';

import ButtonShowcase from '../../routes/button';
import CardShowcase from '../../routes/card';
import CheckboxShowcase from '../../routes/checkbox';
import ChipsShowcase from '../../routes/chips';
import DialogShowcase from '../../routes/dialog';
import DrawerShowcase from '../../routes/drawer';
import ElevationShowcase from '../../routes/elevation';
import FabShowcase from '../../routes/fab';
import Home from '../../routes/home';
import IconToggleShowcase from '../../routes/icon-toggle';
import ImageListShowcase from '../../routes/image-list';
import LayoutGridShowcase from '../../routes/layout-grid';
import LinearProgressShowcase from '../../routes/linear-progress';
import ListShowcase from '../../routes/list';
import MenuShowcase from '../../routes/menu';
import RadioShowcase from '../../routes/radio';
import RippleShowcase from '../../routes/ripple';
import SelectShowcase from '../../routes/select';
import ShapeShowcase from '../../routes/shape';
import SliderShowcase from '../../routes/slider';
import SnackbarShowcase from '../../routes/snackbar';
import SwitchShowcase from '../../routes/switch';
import TabsShowcase from '../../routes/tabs';
import TextFieldShowcase from '../../routes/text-field';
import TopAppBarShowcase from '../../routes/top-app-bar';
import TypographyShowcase from '../../routes/typography';

export default function AppRoutes() {
	return (
		<Router>
			<Home path="/" />
			<ButtonShowcase path="/button" />
			<CardShowcase path="/card" />
			<CheckboxShowcase path="/checkbox" />
			<ChipsShowcase path="/chips" />
			<DialogShowcase path="/dialog" />
			<DrawerShowcase path="/drawer" />
			<ElevationShowcase path="/elevation" />
			<FabShowcase path="/fab" />
			<IconToggleShowcase path="/icon-toggle" />
			<ImageListShowcase path="/image-list" />
			<LayoutGridShowcase path="/layout-grid" />
			<LinearProgressShowcase path="/linear-progress" />
			<ListShowcase path="/list" />
			<MenuShowcase path="/menu" />
			<RadioShowcase path="/radio" />
			<RippleShowcase path="/ripple" />
			<SelectShowcase path="/select" />
			<ShapeShowcase path="/shape" />
			<SliderShowcase path="/slider" />
			<SnackbarShowcase path="/snackbar" />
			<SwitchShowcase path="/switch" />
			<TabsShowcase path="/tabs" />
			<TextFieldShowcase path="/text-field" />
			<TopAppBarShowcase path="/top-app-bar" />
			<TypographyShowcase path="/typography" />
		</Router>
	);
}
