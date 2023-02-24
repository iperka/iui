import { useState } from "react";

const useDownload = (
  url: RequestInfo | URL,
  options?: RequestInit & {
    fileName?: string;
  }
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [progress, setProgress] = useState(0);
  const [size, setSize] = useState(0);
  const [received, setReceived] = useState(0);

  const saveBlob = (function () {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute("style", "display: none");

    return function (blob: Blob, fileName: string) {
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    };
  })();

  const download = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      if (response.body === null) {
        throw new Error("Body is null.");
      }

      if (response.headers === null) {
        throw new Error("Response headers is null.");
      }

      const reader = response.body.getReader();
      const contentLength = +(response.headers as any).get("Content-Length");
      setSize(contentLength);

      let receivedLength = 0; // received that many bytes at the moment
      let chunks = []; // array of received binary chunks (comprises the body)
      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        chunks.push(value);
        receivedLength += value.length;
        setReceived(receivedLength);
        setProgress(Math.round((100 / contentLength) * receivedLength));
      }

      if (options?.fileName) {
        saveBlob(new Blob(chunks), options.fileName);
      } else {
        saveBlob(new Blob(chunks), "download");
      }

      setIsLoading(false);
      setError(undefined);
    } catch (error) {
      setError(String(error));
      setIsLoading(false);
    }
  };

  return { isLoading, progress, error, size, received, download };
};

export default useDownload;
