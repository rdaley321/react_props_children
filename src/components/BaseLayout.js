import React, { Component } from 'react';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        This should house Header and Footer components and be able to house any children components.
        {this.props.children}
      </div>
    );
  }
}
