import React from 'react';

class Likes extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      likes: 100,
      dislikes: 25,
      updated: false,
      likeClassNames: "",
      dislikeClassNames: ""
    }
  }

  updateLikes = () => {
    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
          likeClassNames: "like-button liked"
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false,
          likeClassNames: "like-button"
        };
      });
    }
  }

  updateDislikes = () => {
    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          dislikes: prevState.dislikes + 1,
          updated: true,
          dislikeClassNames: "dislike-button disliked"
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          dislikes: prevState.dislikes - 1,
          updated: false,
          dislikeClassNames: "dislike-button"
        };
      });
    }
  }

  render(){
    return(
      <div className="likes">
        <h2>Likes & Dislikes</h2>


        <div className="likes-counters">
          <h3>Counter Inside Button</h3>
          <button className={this.state.likeClassNames} onClick={this.updateLikes}>Like | <span class="likes-counter"> {this.state.likes}</span></button>
          <button className={this.state.dislikeClassNames} onClick={this.updateDislikes}>Dislike | <span class="likes-counter">{this.state.dislikes}</span></button>
        </div>

        <div className="likes-counters">
          <h3>Counter Outside Button</h3>
          <div>
            <button className={this.state.likeClassNames} onClick={this.updateLikes}>Like</button><span class="likes-counter"> {this.state.likes}</span>
          </div>
          <div>
            <button className={this.state.dislikeClassNames} onClick={this.updateDislikes}>Dislike</button><span class="likes-counter">{this.state.dislikes}</span>
          </div>
        </div>

        <div className="likes-counters">
          <h3>Icons Counter</h3>
        </div>
      </div>
    );
  }

}

export default Likes;
