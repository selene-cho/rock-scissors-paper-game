import './Score.css';

export default function Score({ className, name, score }) {
  return (
    <div className={className}>
      <div className="Score-num">{score}</div>
      <div className="Score-name">{name}</div>
    </div>
  );
}
