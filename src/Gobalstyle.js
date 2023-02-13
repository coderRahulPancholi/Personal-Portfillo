import { createGlobalStyle } from "styled-components";


export const GlobalStyle= createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Inconsolata', monospace; */
    font-family: 'Open Sans', sans-serif;

   
}
body{
    background-color: #181a18;
    color:${({theme}) => theme.color.white}; 
}

html{
    font-size: 62.5%;
    overflow-x: hidden;


}
h1{
    font-size: 4rem;
    font-weight: 900;
   color:${({theme}) => theme.color.heading};
   /* text-align: center; */

}
h2{
    font-size: 4.4rem;
    font-weight: 300;
    color:${({theme}) => theme.color.heading};
    /* text-align: center; */
    white-space: normal;
    
  
}
h2{
    font-size: 1.65rem;
    opacity: .7;
    font-weight: 400;
  
   line-height: 1.5;
   margin-top: 1rem;
}
h3{
    width: 100%;
    text-align: center;
    font-size: 3rem;
    padding: 1rem 0;
    color: white;

}
p{
    font-size: 1.5rem;
    
    

}

a{
    text-decoration: none;

   
}
li{
    list-style: none;
}

.btn{
background-color:${({theme}) => theme.color.btbg};
border: 1px solid transparent;
outline: none;
color:${({theme}) => theme.color.white};
border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1.5rem;
    width: 10rem;
}

.container{
    max-width:120rem ;
    margin: 0 auto;
    min-height: 70vh;
}
.grid{
    display: grid;
    gap:9rem;

}
.grid-two-column{
    grid-template-columns: repeat(2,1fr);
}


`