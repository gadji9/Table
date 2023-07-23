declare const __IS_DEV__: boolean;

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.json';

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

interface IPost {
  id: number;
  userId: string;
  title: string;
  body: string;
}
