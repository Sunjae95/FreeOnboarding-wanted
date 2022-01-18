export const MediaQueries = ({ minWidth, maxWidth }) => {
  const mediaMinWidth = minWidth ? `(min-width:${minWidth}px)` : null;
  const mediaMaxWidth = maxWidth ? `(max-width:${maxWidth}px)` : null;

  if (mediaMinWidth && mediaMaxWidth)
    return `@media ${mediaMinWidth} and ${mediaMaxWidth}`;

  if (mediaMinWidth) return `@media ${mediaMinWidth}`;
  if (mediaMaxWidth) return `@media ${mediaMaxWidth}`;
};
