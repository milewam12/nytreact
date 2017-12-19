import React from "react";
import { Container, Row, Col } from "../Grid";

// ArticleListItem renders a bootstrap list item containing data from the article api call
export const ArticleListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-8 sm-9">
          <h3>{props.headline.main}</h3>
          <p>Date: {props.pub_date}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.web_url}>Read article!</a>
        </Col>
        {/* <Col size="xs-4 sm-2" >
        <button> Save</button>
        </Col> */}
      </Row>
    </Container>
  </li>
);
