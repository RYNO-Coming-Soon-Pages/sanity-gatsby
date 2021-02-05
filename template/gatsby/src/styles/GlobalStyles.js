import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    .container {
        box-shadow: 2px 8px 20px 0 ${props => props.highlight || '#fff'};
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 25px;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    .logo {
        max-width: 400px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0;
    }
    .intro-text {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 150px;
    }
    .flex-column {
        -ms-flex-direction: column;
        flex-direction: column;
    }
    strong a {
        color: #df0f0f;
    }
    strong a:hover {
        color: #df0f0f;
        text-decoration: none;
    }
    .van {
        max-width: 300px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .address,
    .copyright {
        font-size: 10px;
        text-align: center;
        margin-bottom: 0;
    }
    
    @media (min-width: 992px) {
        .container {
        max-width: 960px;
        }
    }
    
    @media (min-width: 768px) {
        .container {
        max-width: 720px;
        }
    }
    
    @media (min-width: 576px) {
        .container {
        max-width: 540px;
        }
    }
    
    @media (min-width: 1200px) {
        .container {
        max-width: 1140px;
        }
    }
    
`;

export default GlobalStyles;