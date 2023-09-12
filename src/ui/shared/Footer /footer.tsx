import { Style } from './footer_styles';

    export function Footer() {
        return (
            <Style.Container>
                <div className="footer-content">
                    <span className='footer-contact'>Contact</span>
                    <ul>
                        <a href='mailto:rolandl1515@gmail.com'>
                            <li>
                                <span className='footer-email'>Email</span>
                            </li>
                        </a>










                    </ul>
                </div>
            </Style.Container>       
  );
}