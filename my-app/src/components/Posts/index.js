import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";

class Posts extends Component {
  state = {
    data: [],
    isLoading: true, // Added loading state
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts");
      const posts = await response.json();
      console.log(posts);

      
      this.setState({ data: posts, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);

      
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { data, isLoading } = this.state;

    return (
      <div className="loader">
        {isLoading ? ( 
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        ) : (
          <ul>
            {data.map((item) => (
              <li className="list-item" key={uuidv4()}>
                <h3>{item.title}</h3>
                <p>
                  {item.content.slice(0, 100)}
                  {item.content.length > 20 ? "..." : ""}
                </p>
                <p>
                  <span className="posted-by">Posted by</span> :{" "}
                  {item.user_name}
                </p>
                <button className="view-btn" type="button">
                  View Post
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Posts;
