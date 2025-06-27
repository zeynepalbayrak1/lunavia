import React from "react";
import "../assets/css/CompatibilityResult.css";

export default function CompatibilityResult({ data }) {
  return (
    <div className="compatibility-result">
      <h3>
        💖 Compatibility Score: <span>{data.score}%</span>
      </h3>
      <p>
        <strong>💫 Type:</strong> {data.type}
      </p>
      <p>
        <strong>📝 Summary:</strong> {data.summary}
      </p>
      <p>📚 {data.details}</p>
    </div>
  );
}
