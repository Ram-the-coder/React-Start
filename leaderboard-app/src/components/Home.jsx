import React, { Component } from 'react'
import '../App.css'
import Card from './Card.jsx'
import List from './List.jsx'
import gold from '../assets/gold.svg'
import silver from '../assets/silver.svg'
import bronze from '../assets/bronze.svg'
//The toggle_visibility function is used for displaying user information in on clicking their name in the Leaderboard and also to close the information when clicked on "Close" in the view
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
export default class Home extends Component {
  render() {
    return (
      <div class="container">
        <br />
        <h1 class="white-text"><b><center>Leaderboard</center></b></h1>
        <br />
        <div class="container">
          <div class="card-deck"> {/* The top 3 */}
                <Card image="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" medal ={gold} name="Grover" points="15" position="1" />
                <Card image="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" medal ={silver} name="Percy Jackson" points="14" position="2" />
                <Card image="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" medal ={bronze} name="Annabeth Chase" points="13" position="3" />
          </div>
        </div>
        <br />
        <div class="listing"> {/* The rest of the people */}
          <List image="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" name="Sheldon Cooper" points="12" position="3" />
          <List image="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" name="Leonard Hofstader" points="9" position="4" />
          <List image="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" name="Howard Wolowitz" points="7" position="5" />
          <List image="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" name="Rajesh Koothrapalli" points="6" position="6" />
          <List image="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" name="Mark Manson" points="5" position="7" />
        </div>
        <div> {/*Profile view in leaderboard*/}
          <div id="1" class='jumbotron gold'> {/* Since I'm just doing front-end I'm enabling this onclick name - view description only for the first record - Grover, because otherwise I have to create a div for eevry recrod . So if you click on a name other than Grover, you'll get an error*/}
          <div class="row">
              <div class="col-3">
                <img src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" class="rounded-circle img-fluid" />
              </div>
              <div class="col-9">
                <p><b><h1>Grover</h1></b></p><p><h4>A Satyr</h4></p>
                  <p><b>Phone Number:</b>9876543210</p><p><b>Online Profile Link:</b><i><a href='#' class='white_font'>https://camp-half-blood.com/grover</a></i></p>
                  <p><b>Email ID: </b><i><a href='#' class='white_font'>grover@camphalfblood.com</a></i></p>
                  <p><a href = "" onClick={() => toggle_visibility("1")} class='white_font'>Close</a></p>
              </div>
              </div>
            </div>";
            <div id="2" class='jumbotron silver'> {/* Since I'm just doing front-end I'm enabling this onclick name - view description only for the first record - Grover, because otherwise I have to create a div for eevry recrod . So if you click on a name other than Grover, you'll get an error*/}
            <div class="row">
                <div class="col-3">
                  <img src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" class="rounded-circle img-fluid" />
                </div>
                <div class="col-9">
                  <p><b><h1>Percy Jackson</h1></b></p><p><h4>Son of Poseidon</h4></p>
                    <p><b>Phone Number:</b>9876543210</p><p><b>Online Profile Link:</b><i><a href='#' class='white_font'>https://camp-half-blood.com/grover</a></i></p>
                    <p><b>Email ID: </b><i><a href='#' class='white_font'>perceus@camphalfblood.com</a></i></p>
                    <p><a href = "" onClick={() => toggle_visibility("2")} class='white_font'>Close</a></p>
                </div>
                </div>
              </div>";
              <div id="3" class='jumbotron bronze'> {/* Since I'm just doing front-end I'm enabling this onclick name - view description only for the toppers, because otherwise I have to create a div for every recrod. If I'm using PHP I would have put it in a loop*/}
              <div class="row">
                  <div class="col-3">
                    <img src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" class="rounded-circle img-fluid" />
                  </div>
                  <div class="col-9">
                    <p><b><h1>Annabeth</h1></b></p><p><h4>The daughter of the godess of wisdom</h4></p>
                      <p><b>Phone Number:</b>9876543210</p><p><b>Online Profile Link:</b><i><a href='#' class='white_font'>https://camp-half-blood.com/grover</a></i></p>
                      <p><b>Email ID: </b><i><a href='#' class='white_font'>annabeth@camphalfblood.com</a></i></p>
                      <p><a href = "" onClick={() => toggle_visibility("3")} class='white_font'>Close</a></p>
                  </div>
                  </div>
                </div>";
        </div>
      </div>
    )
  }
}
