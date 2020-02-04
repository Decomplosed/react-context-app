import React, { Component } from 'react'

class PageContent extends Component {
  render() {
    const styles = {
      backgroundColor: 'red',
      height: '100vh',
      width: '100vh'
    }

    return <div style={styles}>{this.props.children}</div>
  }
}

export default PageContent
