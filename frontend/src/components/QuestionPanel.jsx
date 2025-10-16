import { useState } from "react";
import { generateQuestion } from "../api";

export default function QuestionPanel() {
  const [topic, setTopic] = useState("graphs");
  const [question, setQuestion] = useState("");

  const ask = async () => {
    const { data } = await generateQuestion(topic);
    setQuestion(data.question);
  };

  return (
    <div>
      <h2>Interview Question Generator</h2>
      <input value={topic} onChange={e=>setTopic(e.target.value)} placeholder="topic" />
      <button onClick={ask}>Generate</button>
      {question && <pre>{question}</pre>}
    </div>
  );
}
