const langs = [
  {
    name: "HTML",
    color: "#E34F26",
  },
  {
    name: "CSS",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    name: "React",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    name: "Node.js",
    color: "#3C873A",
  },
  {
    name: "Python",
    color: "#3776AB",
  },
  {
    name: "Ruby",
    color: "#CC342D",
  },
  {
    name: "Assembly",
    color: "#4B5563",
  },
];

export default function LangSection() {
  return <>
  {langs.map((lang) => {
    return (
      <div className="lang-card"
        style={{
          backgroundColor: lang.color,
        }}> 
        {lang.name}
      </div>
    )
  })}</>;
}
