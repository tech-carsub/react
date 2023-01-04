declare module '*.mdx' {
  const content: React.FunctionComponent<{}>;
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '@honk-ds/css';
declare module '@honk-ds/css/component-classes';
declare module '@honk-ds/css/tailwind-css';
