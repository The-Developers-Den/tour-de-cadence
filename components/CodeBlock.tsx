import { useEffect, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/midnight.css";

type EditableCodeBlockProps = {
  code: string;
  handleCodeChange: (_editor: unknown, data: unknown, value: string) => void;
};

const EditableCodeBlock = ({
  code,
  handleCodeChange,
}: EditableCodeBlockProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <section>
        <CodeMirror
          onBeforeChange={handleCodeChange}
          value={code}
          options={{
            mode: "jsx",
            theme: "midnight",
            lineNumbers: true,
            lineWrapping: true,
            lint: true,
            gutters: ["CodeMirror-lint-markers"],
          }}
        />
      </section>
    )
  );
};

export default EditableCodeBlock;
