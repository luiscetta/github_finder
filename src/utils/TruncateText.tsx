import { useState, useEffect } from "react";

type TruncateTextProps = {
  text: string;
  maxLength: number;
  className?: string;
};

const TruncateText = ({ text, maxLength, className }: TruncateTextProps) => {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      setTruncatedText(text.substring(0, maxLength) + "...");
    }
  }, [text, maxLength]);

  return <div className={className}>{truncatedText}</div>;
};

export default TruncateText;
