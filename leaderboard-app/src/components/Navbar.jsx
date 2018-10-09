import React, { Component } from 'react';
export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-light">
                <span class="navbar-brand" href="#">WEBSTACKS</span>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a href="/" class="nav-link">Leaderboard</a></li>
                <li class="nav-item"><a href="/login" class="nav-link">Login</a></li>
                <li class="nav-item"><a href="/signup" class="nav-link">Register</a></li>
            </ul>
   		 </nav>
    );
  }
}
