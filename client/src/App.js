import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { ArticleList, ArticleListItem } from "./components/ArticlesList";
import { Container, Row, Col } from "./components/Grid";



class App extends Component {
state = {
  articles: [],
  articleSearch: ""
};

handleInputChange = event => {
  // Destructure the name and value properties off of event.target
  // Update the appropriate state
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
  // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  event.preventDefault();
  API.getArticles(this.state.articleSearch)
    .then(res => this.setState({ articles: res.data }))
    .catch(err => console.log(err));
};



  render() {
    return (
      <div>
       
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
            <form>
            <Container>
              <Row>
                <Col size="xs-12">
                <Input
                  name="articleSearch"
                  value={this.state.articleSearch}
                  onChange={this.handleInputChange}
                  placeholder="Search for articles in the NYT"
                  />
                </Col>

              </Row>
              <Row>
                <Col size="xs-12">
                <Button
                  onClick={this.handleFormSubmit}
                  type="success"
                  className="input-lg"
                 >
                 SEARCH
            </Button>
                
                </Col>
              </Row>
            </Container>  
            </form>
            </Col>
          </Row>
          
          <Row>
            <Col size="xs-12">
            {!this.state.articles.length ? (
                <h1 className="text-center">No Articles to Display</h1>
              ) : (
                <ArticleList>
                  {this.state.articles.map(article => {
                    return (
                      <ArticleListItem
                        key={article.headline.main}
                        headline={article.headline.main}
                        date={article.pub_date}
                        href={article.web_url}
                      />
                    );
                  })}
                </ArticleList>
              )}
            
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
