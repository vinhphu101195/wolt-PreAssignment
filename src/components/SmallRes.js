import React from "react";
import styled from "styled-components";

const Name = styled.h3`
  color: #3c3d40;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: uppercase;

  font-weight: 500;
  font-size: 1rem;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  color: #868780;
`;
const Status = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${props => (props.status ? "rgb(66, 183, 42)" : "#bbb")};
  border-radius: 50%;
  display: inline-block;
`;

function unicodeToChar(text) {
  return text.replace(/\\u[\dA-F]{4}/gi, function(match) {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
  });
}

export default function SmallRes() {
  var string = "Ilmi\u00f6m\u00e4isi\u00e4 sushiburritoja";
  console.log(unicodeToChar(string));

  return (
    <div className="container__item">
      <div className="item__img">
        <img
          src="https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90"
          className="item__img__detail"
          alt="restaurant"
        ></img>
      </div>
      <div className="item__bottom">
        <div className="item__bottom__upper">
          <div className="item__bottom__title">
            <Name>Social Burgerjoint Citycenter</Name>
            <Description>{unicodeToChar(string)}</Description>
          </div>
          <div className="item__bottom__status">
            <Status status={false}></Status>
          </div>
        </div>
        <div className="item__bottom__bottom">
          <span>Delivery: €3.90</span>
          <span>hamburger, fries</span>
        </div>
      </div>
    </div>
  );
}
