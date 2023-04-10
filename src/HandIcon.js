import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/papaer.svg';
import './HandIcon.css';

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

export default function HandIcon({ value, className }) {
  const src = IMAGES[value];
  return <img className={className} src={src} alt={value} />;
}
