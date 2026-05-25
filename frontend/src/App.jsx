import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [translated, setTranslated] =
    useState("");

  const [source, setSource] =
    useState("en");

  const [target, setTarget] =
    useState("hi");

  const [loading, setLoading] =
    useState(false);


  const translateText =
    async () => {

      if (!text.trim()) return;

      try {

        setLoading(true);

        const response =
          await axios.post(
            "http://127.0.0.1:8000/translate",
            {
              text,
              source,
              target,
            }
          );

        if (response.data.error) {
          alert(
            response.data.error
          );

        } else {

          setTranslated(
            response.data
              .translated_text
          );
        }

      } catch (error) {

        console.error(error);

        alert(
          "Translation failed"
        );

      } finally {

        setLoading(false);
      }
    };


  const copyText = () => {

    if (!translated) return;

    navigator.clipboard.writeText(
      translated
    );

    alert("Copied!");
  };


  const swapLanguages = () => {

    setSource(target);
    setTarget(source);

    setText(translated);
    setTranslated(text);
  };


  return (

    <div className="container">

      <h1>
        🌍 Language Translator
      </h1>

      <p className="subtitle">
        Translate text instantly
        between languages
      </p>


      <textarea
        placeholder=
          "Enter text here..."
        value={text}
        onChange={(e) =>
          setText(
            e.target.value
          )
        }
      />


      <div className="row">

        <select
          value={source}
          onChange={(e) =>
            setSource(
              e.target.value
            )
          }
        >
          <option value="en">
            English
          </option>

          <option value="ml">
            Malayalam
          </option>

          <option value="hi">
            Hindi
          </option>

          <option value="fr">
            French
          </option>

          <option value="de">
            German
          </option>

        </select>


        <select
          value={target}
          onChange={(e) =>
            setTarget(
              e.target.value
            )
          }
        >
          <option value="hi">
            Hindi
          </option>

          <option value="en">
            English
          </option>

          <option value="ml">
            Malayalam
          </option>

          <option value="fr">
            French
          </option>

          <option value="de">
            German
          </option>

        </select>

      </div>


      <button
        onClick={
          swapLanguages
        }
      >
        🔄 Swap Languages
      </button>


      <button
        onClick={
          translateText
        }
      >
        {
          loading
            ? "Translating..."
            : "Translate"
        }
      </button>


      <h3>
        Translated Text
      </h3>


      <div className="result">
        {translated}
      </div>


      <button
        onClick={copyText}
      >
        📋 Copy
      </button>

    </div>
  );
}

export default App;