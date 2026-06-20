import "./languages.css"

const langs = [
  {
    name: "HTML",
    color: "#E2680F",
    textColor: "#FFFFFF",
  },
  {
    name: "CSS",
    color: "#328AF1",
    textColor: "#FFFFFF",
  },
  {
    name: "JavaScript",
    color: "#F4EB13",
    textColor: "#000000",
  },
  {
    name: "React",
    color: "#2ED3E9",
    textColor: "#000000",
  },
  {
    name: "TypeScript",
    color: "#298EC6",
    textColor: "#FFFFFF",
  },
  {
    name: "Node.js",
    color: "#599137",
    textColor: "#FFFFFF",
  },
  {
    name: "Python",
    color: "#FFD742",
    textColor: "#000000",
  },
  {
    name: "Ruby",
    color: "#D02B2B",
    textColor: "#FFFFFF",
  },
  {
    name: "Assembly",
    color: "#2D519F",
    textColor: "#FFFFFF",
  },
];

export default function LangSection() {
  return <div className="lang-Sec">
  {langs.map((lang) => {
    return (
      <div className="lang-card"
        style={{
          backgroundColor: lang.color,
          color: lang.textColor,
        }}> 
        {lang.name}
      </div>
    )
  })}</div>;
}
