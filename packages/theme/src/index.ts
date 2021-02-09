import Button from './button';

export default function DefaultTheme(config: unknown): unknown {
  return {
    Button: Button(config)
  };
}

export {
  Button
};
