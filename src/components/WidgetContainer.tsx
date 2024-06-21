import React, { useEffect, useState } from "react";
import { useWidgetEditor } from "./WidgetEditor";

export const WidgetContainer: React.FC<{ pageKey: string }> = ({ pageKey }) => {
  const { content } = useWidgetEditor();
  const [draft, setDraft] = useState<string>(
    localStorage.getItem(pageKey) || ""
  );

  useEffect(() => {
    if (content) {
      setDraft(content);
    }
  }, [content]);

  return <div className="container">{draft}</div>;
};
