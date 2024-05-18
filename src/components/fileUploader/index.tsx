import React, { useRef, useEffect } from "react";

const FileUploader: React.FC = () => {
  const ctxProviderRef = useRef(null);

  useEffect(() => {
    const handleUploadEvent = (e: CustomEvent) => {
      if (e.detail) {
        console.log("The uploaded file event is: ", e);
      }
    };

    const ctxProviderCurrent = ctxProviderRef.current;
    ctxProviderCurrent?.addEventListener("data-output", handleUploadEvent);

    return () => {
      ctxProviderCurrent?.removeEventListener("data-output", handleUploadEvent);
    };
  }, []);

  return <div>File Uploader Component</div>;
};

export default FileUploader;