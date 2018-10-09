import React, { Component } from 'react'
//The toggle_visibility function is used for displaying user information in on clicking their name in the Leaderboard.
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
export default class Card extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div class="toppers card">
          <div class="text-center"><img src={this.props.image} height = "250px" class="toppers-img img-fluid rounded-circle"/></div>
          <div class="card-body">
            <div class="text-center"><h4 class="card-title"><a href="#" onClick = {() => {toggle_visibility(this.props.position)}}> {this.props.name}</a></h4></div>
            <div class="text-center card-title"><img src={this.props.medal} width="40px"/></div>
            <div class="text-center"><h5>{this.props.points}</h5></div>
          </div>
      </div>
    );
  }

}
