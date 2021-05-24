import React, { Component } from 'react'

class OctoCat extends Component {
  render() {
    return (
      <article>
        <a href={this.props.artLink}>
          <img
            src={this.props.img}
            width="300"
            height="300"
            alt={this.props.name}
          />
        </a>
        <ul>
          <li>
            {this.props.number}:
            <a href={this.props.artLink}>
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.artistLink}>
              <img
                src={this.props.artistImg}
                width="24px"
                height="24px"
                alt={this.props.artistNam}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}

export default OctoCat
