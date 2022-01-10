import { Global, css } from '@emotion/react';

const ResetCss = css`
  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 10px;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%; /* 크롬, 사파리, 오페라 신버전 */
    -ms-text-size-adjust: 100%; /* IE */
    -moz-text-size-adjust: 100%; /* 파이어폭스 */
    -o-text-size-adjust: 100%; /* 오페라 구버전 */
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
`;

export const GlobalStyle = () => <Global styles={ResetCss} />;
