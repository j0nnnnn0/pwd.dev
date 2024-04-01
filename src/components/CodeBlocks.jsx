import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";

function CodeBlocks({ code, language, filename }) {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(code);
  };

  return (
    <CodeBlock code={code} language={language} lines={["4:6"]}>
      <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg">
        {/* Filename */}
        <div className="text-sm text-gray-400 px-6 py-4">{filename}</div>

        <CodeBlock.Code className="!px-0">
          {({ isLineHighlighted }) => (
            <div
              className={`table-row ${
                isLineHighlighted ? "bg-emerald-400/25" : ""
              }`}
            >
              {/* Rendering a plus sign */}
              <div
                className={`table-cell px-4 text-emerald-400 select-none ${
                  isLineHighlighted ? "opacity-100" : "opacity-0"
                }`}
              >
                +
              </div>
              <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
              <CodeBlock.LineContent className="table-cell w-full pr-6">
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          )}
        </CodeBlock.Code>
        <button
          className="rounded-md px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold"
          onClick={copyCode}
        >
          {state.value ? "Copied!" : "Copy code"}
        </button>

        {/* Language being used */}
        <div className="text-xs text-gray-400 px-6  text-right select-none">
          {language}
        </div>
      </div>
    </CodeBlock>
  );
}

export default CodeBlocks;
