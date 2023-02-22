import { createGlobalStyle } from "styled-components";


export const GlobalStyle= createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Inconsolata', monospace; */
    font-family: 'Open Sans', sans-serif;
    /* background-color: ${({theme}) => theme.color.bg1}; */
    transition: background 0.25s  linear;
    
    
    
    

   
}
body{
    
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
    color:${({theme}) => theme.color.heading}

}
p{
    font-size: 1.5rem;
    color: ${({theme})=> theme.color.text};
    
    

}

a{
    text-decoration: none;
    color: ${({theme})=> theme.color.text};

   
}
li{
    list-style: none;
}

.btn{
background-color:${({theme}) => theme.color.btbg};
border: 1px solid transparent;
outline: none;
/* color:${({theme}) => theme.color.white}; */
border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1.5rem;
    width: 10rem;
}
.dfjac{
     display: flex;
    align-items: center;
    justify-content: center;
}
.df{
    display: flex;
    flex-direction: row;
}
.dfc{
    display: flex;
    flex-direction: column;
}
.jc{
    justify-content: center;
}
.jss{
    justify-content: flex-start;
}
.jsa{
    justify-content: space-around;
}
.jsb{
    justify-content: space-between;
}
.ac{
    align-items: center;
}
.as{
    align-items: flex-start;
}
.gap15{
    gap: 15px;
}
.gap10{
    gap: 10px;
}
.gap20{
    gap: 20px;
}
.wrap{
    flex-wrap: wrap;
}
.container{
    max-width:120rem ;
    margin: 0 auto;
    min-height: 70vh;
}

.btn-text{
    color: white;
}

`