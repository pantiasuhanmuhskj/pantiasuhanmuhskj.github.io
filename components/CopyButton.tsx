import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div>
      <CopyToClipboard text={textToCopy} onCopy={() => setIsCopied(true)}>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          aria-label={isCopied ? "Tersalin!" : "Salin ke Clipboard"}>
          {isCopied ? "Tersalin!" : "Salin Nomor Rekening"}
        </button>
      </CopyToClipboard>
      {isCopied && (
        <div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded whitespace-nowrap shadow-md z-10"
          role="tooltip"
          aria-hidden={!isCopied}>
          Copied!
        </div>
      )}
    </div>
  );
};

export default CopyButton;
