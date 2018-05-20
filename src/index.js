import Helmet from 'preact-helmet';

import App from './components/app';

import './style/index.scss';

const rewind = Helmet.rewind;
// Export rewind method for SSR
export { rewind };
export default App;
