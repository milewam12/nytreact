import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export const ArticleListItem = props => (
  <li className="list-group-item">
    <Container>

      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.multimedia.legacy.xlarge || "https://placehold.it/100x100"} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.headline.main}</h3>
          <p>Date: {props.pub_date}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.web_url}>Go to Article!</a>
        </Col>
      </Row>

    </Container>
  </li>
);
