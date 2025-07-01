import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface MarkdownComponentProps {
  content: string;
}

export const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  content,
}) => {
  return (
    <Markdown
      children={content}
      components={{
        code(props) {
          const { children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              showLineNumbers
              wrapLines
              wrapLongLines
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};
