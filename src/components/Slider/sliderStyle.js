import css from 'styled-jsx/css'

export default css.global`
.slider{
    position:relative;
    display:flex;
    height: 100%;
    width:100%;
    box-sizing: border-box;
    margin:0;
    padding:0;
    align-items:center;
    overflow: hidden;
}
.slide{
    min-width:100%;
    height:100%;
    transition: 0.5s;
}

.goLeft{
    position:absolute;
    top:50%;
    transform:translate(-15%,-50%);
    left:0; 
    width:10%;
    height:10%;
    background: none;
    cursor:pointer;
    transition: all 0.2s linear;
}
.goRight{
    position:absolute;
    background: none;
    top:50%;
    transform:translate(15%,-50%);
    right:0;
    width:10%;
    height:10%;
    cursor:pointer;
    transition: all 0.2s linear;
}
.goRight:hover{
    width:12%;
    height:12%;
    color:rgb(178, 119, 184);;
    transition: all 0.2s linear;
}
.goLeft:hover{
    width:12%;
    height:12%;
    color:rgb(178, 119, 184);
    transition: all 0.2s linear;
}

.sliderBullets{
    display:flex;
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    justify-content:center;
}
.dots{
    color:white;
    background:transparent;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
}
.active{
    color:black;
    transition: all 0.2s ease-in-out;
}
`