export const highlightText = (text: string, highlightClassName: string) => {
  return text.split("{").map((part, index) => {
    if (index === 0) {
      return part;
    }
    const [highlightedPart, remainingPart] = part.split("}");
    return (
      <span key={index}>
        <span className={highlightClassName}>{highlightedPart}</span>
        {remainingPart}
      </span>
    );
  });
};
