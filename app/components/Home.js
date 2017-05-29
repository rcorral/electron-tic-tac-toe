// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Krissy Krossy</h2>
          <ul>
            <li><Link to="/vs-human">Human</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
