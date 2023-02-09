import "./styles.css";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Handlebars from "handlebars";
export default function App() {
  const data = {
    uVars_people: [
      {
        fname: "alex",
        lname: "mahabir",
        zip: "209309"
      },
      {
        fname: "john",
        lname: "smith",
        zip: "209309"
      }
    ]
  };
  const editorRef = useRef(null);
  const [contents, setContents] = useState(null);
  const log = () => {
    if (editorRef.current) {
      const template = Handlebars.compile(editorRef.current.getContent());
      setContents(template(data));
    }
  };
  return (
    <div className="App">
      <Editor
        apiKey="yovo1nds29i271pbkfkrjh1z9c4z09bj42h5cumsn9h6f2yu"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='<p>{{#each uVars_people}}<br><strong><em><span style="color: rgb(35, 111, 161);" data-mce-style="color: rgb(35, 111, 161);">{{this.fname}} </span></em>{{this.lname}}</strong> -- <strong><span style="color: rgb(224, 62, 45);" data-mce-style="color: rgb(224, 62, 45);">{{this.zip}}</span></strong> <br>{{/each}}</p>'
        init={{
          height: 200,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount"
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
      />
      <button onClick={log}>Render Output</button>

      <hr />
      <h2> Contents</h2>
      {contents}
      <h2>Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </div>
  );
}
