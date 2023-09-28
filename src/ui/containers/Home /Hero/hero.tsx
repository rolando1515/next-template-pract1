import { RightArrow } from 'ui/Components/Icons';
import { Style } from './styles';

export function Hero() {
  return (
    <Style.Container>
      <span>Hey, I'm</span>
      <h1>Rolando Labrador</h1>
      <p>
        I'm a software engineer .
      </p>
      <button>
        Say hi <RightArrow />
      </button>
    </Style.Container>
  );
}
