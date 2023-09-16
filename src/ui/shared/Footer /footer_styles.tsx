import styled from "styled-components";

export const Style = {
    Container:styled.footer`
         height: 123px;
         width: 100%;
         border: 1px #000000;
         display: grid;
         place-items: center;
         background-color: #000000;

        @media (max-width: 768px) {
            span{
                margin-bottom: 10px;
             }
        }
        // justify content throws the list to the right. 
        .footer-content{
          width: var(--width);
          color: #ffffff;
          max-width: var(--max-width);
          height: 100%;
          border: 1px #000000;
          display: flex;
          align-items: center;
          justify-content: space-between;

            @media (max-width: 768px) {
             flex-direction: column;
            }


        }
        .footer-contact{
            width: 86px;
            height: 22px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 22px;
            box-sizing: border-box;
        }

        ul{
            list-style: none;
             margin: 0;
             padding: 0;
             display: flex;
  // display flex is what makes it so the list items are next to each other.

        }
        li{
            display: flex;
            margin-left: 30px;
            font-size: 15px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 300;
            border: 1px solid red;
            border-radius: 4px;
            box-sizing: border-box;
            text-transform:uppercase;   
            text-align: center;
            padding: 5px 20px;
            align-items: center;
        }

      



         svg {
        display: flex;
        width: 15px;
        margin-right: 15px;
      }



        `,
};