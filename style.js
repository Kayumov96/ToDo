import styled from "styled-components";

export const Container = styled.div`
 width: 80%;
 height: 650px;
 margin: auto;
 background-color: #dededc;
 border-radius: 6px;
`;
export const Header = styled.div`
 width:100%;
 height: 150px;
 position: sticky;
 border: 1px solid #fff;
 border-top-left-radius: 6px;
 border-top-right-radius: 6px;
 background: #dcdcde;
`;
export const Text = styled.h1`
 color: black;
 opacity: 0.8;
 width: 30%;
 margin: 8px 35%;
`;
export const Input = styled.input`
 width:70%;
 height:30px;
 margin: 2% 9%;
 font-size: 20px;
 outline: none;
 color: black;
 border-radius: 6px;
`;
export const Button = styled.button`
 width:10%;
 height:35px;
 border-radius: 6px;
 position:absolute;
 left:80%;
 top:43%;
`;
export const ToDoDiv = styled.div`
 width: 95%;
 height: 30px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin: 4% 2%;
 padding: 0 2px;
 border: 1px solid black;
 border-radius: 6px;

`;
export const Savedinfo = styled.div`
 width: 100%;
 height:77%;
 border-bottom-left-radius: 6px;
 border-bottom-right-radius: 6px;
 overflow-y:scroll ;
`;