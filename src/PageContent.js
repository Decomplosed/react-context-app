import React, { Component } from 'react'
import {ThemeContext} from './contexts/ThemeContext'

class PageContent extends Component {
  render() {
    const styles = {
      backgroundColor: '#fafafa',
      height: '100vh',
      width: '100vw'
    }

    return <div style={styles}>{this.props.children}</div>
  }
}

export default PageContent
