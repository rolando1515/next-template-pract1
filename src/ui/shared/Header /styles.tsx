import styled from "styled-components";
// You can copy the styles from figma. 
// make sure to open the typescript file so you can see what the styles are being applied to.
export const Style = {
    Container: styled.header`
        height: 60px;
        width: 100%;
        border: 1px #111111 ;
        display: grid;
        place-items: center;
        background-color: #111111;

        .flex-container {
            display: flex;
        }

        .flex-item{
            flex: 1;
            padding:10px;
            border: 1px solid #000000;
        }

        .header-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: var(--width);
            max-width: var(--max-width);
            height: 100%;
            border: 1px solid #000000;
        }
        .header-logo{
            width: 39px;
            height: 29px;
            color: #FFF;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
        }
        ul{
            list-style: none;
            margin: 0;
            padding: 0; 
        }

        li{
            display:inline-block;
            margin-left: 20px;
            color: #FFF;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
        }


    `,

};