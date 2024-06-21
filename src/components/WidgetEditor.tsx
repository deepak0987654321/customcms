import React, { useState, createContext, useContext } from "react";
import { ShadcnProvider, Button, Input, Textarea } from "shadcn-ui";

interface WidgetEditorContextProps {
  saveDraft: (content: string) => void;
  exitEditMode: () => void;
  content: string;
}

const WidgetEditorContext = createContext<WidgetEditorContextProps | null>(
  null
);

export const WidgetEditor: React.FC<{ pageKey: string }> = ({ pageKey }) => {
  const [content, setContent] = useState<string>(
    localStorage.getItem(pageKey) || ""
  );

  const saveDraft = () => {
    localStorage.setItem(pageKey, content);
  };

  const exitEditMode = () => {
    // Logic to exit edit mode
  };

  return (
    <WidgetEditorContext.Provider value={{ saveDraft, exitEditMode, content }}>
      <ShadcnProvider>
        <div className="editor">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button onClick={saveDraft}>Save Draft</Button>
          <Button onClick={exitEditMode}>Exit</Button>
        </div>
      </ShadcnProvider>
    </WidgetEditorContext.Provider>
  );
};

export const useWidgetEditor = () => useContext(WidgetEditorContext);
