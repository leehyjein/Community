import React from "react";
import styled from "styled-components";

const Button = (props) => {
  
  const {text, _onClick, is_float, children, margin, width, padding} = props;
   
  if(is_float){
    return (
        <React.Fragment>
            <FloatButton onClick={_onClick}>{text? text : children}</FloatButton>
        </React.Fragment>
      );
  }
 
  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <React.Fragment>
    <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
    </React.Fragment>
    );
}

Button.defaultProps = {
    text: false,
    children: null,
    _onClick: ()=>{}, 
    is_float: false,
    margin: false,
    width: '100%',
    padding: "12px 0px"
}

const ElButton = styled.button`
    width: ${(props) => props.width};
    background-color:#ffa7f485;
    color: #ffffff;
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    border: 1px solid white;
    ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

const FloatButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: #afe0ff;
    color: #ffffff;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
    text-align: center; 
    border: none;
    border-radius: 50px;
    // display: flex;
    // justify-content: center;
    vertical-align: middle;     
`;  //text-align: 텍스트 크기 조정 속성?
export default Button;