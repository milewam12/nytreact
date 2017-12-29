import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";
import Results from "./Results"

class Search extends Component {

  state ={
    results : [],
    articleSearch: ""
  }


  setQuery = (newQuery) => {
    API.getRecipes(newQuery)
    .then((data) => {
      this.setState({ results: { docs: data.docs } });
    });
  }

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
    API.getRecipes(this.state.articleSearch)
      .then(res => this.setState({ results: { docs: data.docs } }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>

          <Nav />
          <Jumbotron />
          <Container>
              <Row>
                  <Col size="md-12">
                  <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.artilceSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
                  
                  </Col>
              </Row>
              <Row>

              <Results results={this.state.results} />
              </Row>
              
              </Container>
 
        
   


      </div>
    );
  }
}


export default Search;
