import { Global, css } from '@emotion/react';

const ResetCss = css`
  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 10px;
    font-family: sans-serif;
    font-smoothing: antialiased;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html,
  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  button,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
  }
  ul,
  ol {
    list-style: none;
  }
  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    background-color: #f8f8fa;
  }
`;

export const GlobalStyle = () => <Global styles={ResetCss} />;
