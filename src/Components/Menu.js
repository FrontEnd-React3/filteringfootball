import React from "react";
import "./Menu.css";

import styled from "styled-components";
const ContentDetails = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 100%; // play with this value for fade direction
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;

  h3 {
    color: #fff;
    font-weight: 500;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  p {
    color: #fff;
    font-size: 0.8em;
  }
`;
const ContentOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: auto;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
`;
const Content = styled.div`
  position: relative;
  max-width: 400px;
  overflow: hidden;
  box-shadow: 0 8px 6px -6px black;

  &:hover {
    ${ContentOverlay} {
      opacity: 1;
    }
    ${ContentDetails} {
      top: 50%; // play with this value for fade direction
      left: 50%;
      opacity: 1;
    }
  }
`;

function Menu({ menuItem }) {
  return (
    <div className="item">
      {menuItem.map(item => {
        return (
          <Content className="item-con" key={item.id}>
            <ContentOverlay />
            <ContentDetails>
              <h3>{item.titleO}</h3>
              <p>
                {item.textO}{" "}
                {
                  (console.log("eeee" + item.title),
                  console.log("eeee" + item.titleO))
                }
              </p>
            </ContentDetails>
            <div className="item-container">
              <img className="Groupimage" src={item.image} alt="" />

              <h3>{item.title}</h3>
            </div>
          </Content>
        );
      })}
    </div>
  );
}

export default Menu;
