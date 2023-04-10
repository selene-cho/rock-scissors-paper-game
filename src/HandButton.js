import HandIcon from './HandIcon';
import './HandButton.css';

export default function HandButton({ className, value, onClick }) {
  const handleClick = () => onClick(value);

  return (
    <button className={className} onClick={handleClick}>
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  );
}
