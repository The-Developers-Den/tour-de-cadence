import { useEffect, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const EditableCodeBlock = () => {
  const [isClient, setIsClient] = useState(false);
  const [code1, setCode] = useState(`function greet() {
    console.log('Hello, world!');
  }
  greet();
  `);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (_editor: unknown, data: unknown, value: string) => {
    setCode(value);
  };
  return (
    isClient && (
      <CodeMirror
        onBeforeChange={handleChange}
        value={code1}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
          lint: true,
        }}
      />
    )
  );
};

export default EditableCodeBlock;
