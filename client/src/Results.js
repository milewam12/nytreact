import React, { Component } from "react";
import { ArticleList, ArticleListItem } from "./components/ArticleList";
import { Container, Row, Col } from "./components/Grid";



class Results extends Component {
  state = {
    title: "",
    url: "",
    pubdate: ""
  };



  render() {
    return (
      <div>
        <Container>
  
          <Row>
            <Col size="xs-12">
              {/* {!this.props.results.docs? (
                <h1 className="text-center">No Articles to Display</h1>
              ) : (
        
              )} */}

              {/* I cannot Display in te browser the data I'm getting from NTY API */}
              

                  <ArticleList>
                  
                 {this.props.results.docs.map((article, index) => {
                    return (
                      <div key={index}>
                        <ArticleListItem
                        // key={recipe.headline.main}
                        title={article.headline.main}
                        href={article.web_url}
                        ingredients={article.pub_date}
                        thumbnail={article.multimedia.legacy.xlarge }
                      />

                      </div>
                    
                    );
                  })}
                </ArticleList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Results;
