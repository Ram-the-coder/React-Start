import React, { Component } from 'react'
//The toggle_visibility function is used for displaying user information in on clicking their name in the Leaderboard.
// function toggle_visibility(id) {
//    var e = document.getElementById(id);
//    if(e.style.display == 'block')
//       e.style.display = 'none';
//    else
//       e.style.display = 'block';
//     }
export default class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="list">
        <div class="row">
          <div class="col list-text">
            <img src={this.props.image} height="80px" class="rounded-circle" />
          </div>
          <div class="col list-text">
            {/* <center><h5>{this.props.position}. <a href="" onClick={() => toggle_visibility(this.props.position)}>{this.props.name}</a></h5></center> */}
            {/*I'm commenting the above line because I haven't created an element where the user information of people other than the top 3 will be shown on clicking their name. Its a feature that can be included "easily" when using PHP by using loops.*/}
            <center><h5>{this.props.position}. <a href="">{this.props.name}</a></h5></center>
          </div>
          <div class="col list-text">
            <center><h5>{this.props.points}</h5></center>
          </div>
        </div>
      </div>
    );
  }

}
