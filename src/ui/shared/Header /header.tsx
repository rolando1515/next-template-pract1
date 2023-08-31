import { Style } from "./styles";

export function Header() {
    return (
      <Style.Container>
        <div className="header-content">
          <span className="header-logo">R.L</span>
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
          </ul>
        </div>
      </Style.Container>
    );
  }