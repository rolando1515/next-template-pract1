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

                        <a href='https://www.linkedin.com/in/rolando1515/'>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_61_5900)">
                                <path d="M6.93994 4.99999C6.93968 5.53043 6.72871 6.03903 6.35345 6.41391C5.97819 6.7888 5.46937 6.99926 4.93894 6.99899C4.40851 6.99873 3.89991 6.78776 3.52502 6.4125C3.15014 6.03724 2.93968 5.52843 2.93994 4.99799C2.94021 4.46756 3.15117 3.95896 3.52644 3.58407C3.9017 3.20919 4.41051 2.99873 4.94094 2.99899C5.47137 2.99926 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46956 6.93994 4.99999ZM6.99994 8.47999H2.99994V21H6.99994V8.47999ZM13.3199 8.47999H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.89999 14.9399 7.12999 13.2799 10.16L13.3199 8.47999Z" fill="#C4C4C4"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_61_5900">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>



                            </li>
                        </a>







                    </ul>
                </div>
            </Style.Container>       
  );
}