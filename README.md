# preact-mdc

[Preact](https://github.com/developit/preact) wrapper for [Material Components Web](https://github.com/material-components/material-components-web).

Docs and demos available at [https://preact-mdc.surge.sh](https://preact-mdc.surge.sh).

## Installation

```bash
yarn add @preact/mdc
```

`@material/*` sass stylesheets are used for styling.

## Usage

```jsx
import { h } from 'preact';
import { Button } from '@preact/mdc/button';
import '@material/button/mdc-button.scss';

export function MyButton() {
  return <Button>Click me!</Button>;
}
```

## License

[MIT](https://oss.ninja/mit/dramloc)