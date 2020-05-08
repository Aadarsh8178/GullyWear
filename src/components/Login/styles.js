import css from 'styled-jsx/css'

export default css.global`
.base-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
} 
.header {
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
}
.image {
  width: 21em;
}
img {
  width: 100%;
  height: 100%;
}
.form {
    margin-top: 2em;
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
label {
  font-size: 20px;
}
input {
  margin-top: 6px;
  height: 37px;
  padding: 0px 10px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  background-color: #f3f3f3;
  border: 0;
  border-radius: 4px;
  margin-bottom: 31px;
  transition: all 250ms ease-in-out;
}
input:focus {
  outline: none;
  box-shadow: 0px 0px 12px 0.8px #3474dbb2;
}
.btn {
  font-size: 21px;
  padding: 5px 20px;
  border: 0;
  background-color: #3498db;
  color: #fff;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
}
btn:hover {
  background-color: #2386c8;
}
btn:focus {
  outline: none;
}
`