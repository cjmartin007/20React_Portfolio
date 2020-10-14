import React from "react";
import Container from '@material-ui/core/Container';


function HomeStory() {
return (
    <Container
    style={{
        height:"200px",
        width:"400px",
        opacity:"60%",
        backgroundColor:"black",
        color:"darkorange"   
        }}
        fixed>
            Personal Dev Page! 
            <div style={{color:"white"}}>I really hope you enjoy it!</div>
            <div style={{color:"lightgreen"}}>If you are reading this!</div>
            <div style={{color:"skyblue"}}>I made this just for you!</div>
            <div style={{color:"yellow"}}>Explore my buttons and see the REACT.js power!</div>
        </Container>
    )

}

export default HomeStory;