import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

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
  margin-right: 8px;
`;

function unicodeToChar(text) {
  return text.replace(/\\u[\dA-F]{4}/gi, function(match) {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
  });
}

const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
);

export default function SmallRes(props) {
  return (
    <div className="container__item">
      <div className="item__img">
        <LazyLoad
          once={true}
          height={100}
          offset={[-100, 100]}
          placeholder={<Loading />}
        >
          <img
            src={props.data.image}
            className="item__img__detail"
            alt="restaurant"
          ></img>
        </LazyLoad>
      </div>
      <div className="item__bottom">
        <div className="item__bottom__upper">
          <div className="item__bottom__title">
            <Name>{unicodeToChar(props.data.name)}</Name>
            <Description>{unicodeToChar(props.data.description)}</Description>
          </div>
          <div className="item__bottom__status">
            <Status status={props.data.online}></Status>
          </div>
        </div>
        <div className="item__bottom__bottom">
          <span>{showTag(props.data.tags)}</span>
          <span>Delivery: €3.90</span>
        </div>
      </div>
    </div>
  );
}

const showTag = tags => {
  return tags.map((ele, index) => {
    return <span key={index}>{ele} </span>;
  });
};
