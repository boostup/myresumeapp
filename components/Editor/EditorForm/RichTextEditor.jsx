import dynamic from "next/dynamic";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

import "suneditor/dist/css/suneditor.min.css";

const plugins = dynamic(() => import("suneditor/src/plugins"), {
  ssr: false,
});

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const RichTextEditor = (props) => {
  const placeholder = "placeholder text from code";
  const [content, setContent] = useLocalStorage("sunEditorTest", placeholder);

  // When the editor's content has changed, store it in state
  const handleOnChange = (editorContent) => setContent(editorContent);

  // Send data to Firebase
  const handleSubmit = (contents, isChanged) => {
    try {
      isChanged && setContent(contents);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SunEditor
        onChange={handleOnChange}
        setDefaultStyle="font-family: verdana; font-size: 14px;"
        setContents={content}
        setOptions={{
          callBackSave: handleSubmit,
          height: "100vh",
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["align", "horizontalRule", "list", "lineHeight"],
            [
              "removeFormat",
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["image", "video"],
            ["preview", "save"],
          ],
          placeholder,
        }}
      />
    </div>
  );
};
export default RichTextEditor;
