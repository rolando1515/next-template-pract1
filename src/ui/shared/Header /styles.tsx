import styled from "styled-components";

export const Style = {
    Container: styled.header`
        height: 60px;
        width: 100%;
        border: 1px #ff0000;
        display: grid;
        place-items: center;
        background-color: #ff0000;

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
        }
        ul{
            list-style: none;
            margin: 0;
            padding: 0; 
        }

        li{
            display:inline-block;
            margin-left: 20px;

        }


    `,

};