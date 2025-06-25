"use client";

import { useEffect, useMemo, useState, useCallback } from "react";

export default function ParentPostMessageHandler() {
  const [iframeUrl, setIframeUrl] = useState(
    "https://okdol1.github.io/Postmessage-Child-Example/"
  );

  const expectedOrigin = useMemo(() => {
    try {
      return new URL(iframeUrl).origin;
    } catch {
      return "";
    }
  }, [iframeUrl]);

  const handleIframeUrlChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIframeUrl(e.target.value);
    },
    []
  );

  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (event.origin !== expectedOrigin) {
        console.warn(
          `[Parent] 거부된 메시지: 예상 origin과 다릅니다.\n수신 origin: ${event.origin}\n허용 origin: ${expectedOrigin}`
        );
        return;
      }

      console.info("[Parent] 수신된 메시지:", event.data);

      switch (event.data.type) {
        case "SCROLL_TOP":
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case "GO_BACK":
          window.history.back();
          break;
        default:
          console.warn("[Parent] 알 수 없는 메시지 타입:", event.data.type);
      }
    },
    [expectedOrigin]
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-zinc-900 rounded-2xl shadow-lg">
      <div className="mb-6">
        <label
          htmlFor="iframe-url"
          className="block text-sm font-semibold text-gray-300 mb-2"
        >
          자식 웹 iframe URL
        </label>
        <input
          id="iframe-url"
          value={iframeUrl}
          onChange={handleIframeUrlChange}
          placeholder="https://your-child-web.com"
          className="w-full px-4 py-2 bg-zinc-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      <iframe
        src={iframeUrl}
        title="postMessage_example_child"
        height={600}
        className="w-full rounded-lg border border-zinc-700"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
