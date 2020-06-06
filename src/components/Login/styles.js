import css from 'styled-jsx/css'

export default css.global`
.base-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
} 
.header {
font-size: 1rem;
font-family: "Open Sans", sans-serif;
}
.form {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-group {
display: flex;
flex-direction: column;
align-items: flex-start;
width: fit-content;
}
.btn {
font-size: 1.5rem;
padding: 5px 20px;
border: 0;
background-color: black;
color: #fff;
border-radius: 3px;
transition: all 250ms ease-in-out;
cursor: pointer;
}
.btn:focus {
outline: none;
}
.disabled{
  background-color:grey;
  cursor:not-allowed;
}
.error{
  margin:1rem 0;
  color:rgb(145, 9, 9);
}
`