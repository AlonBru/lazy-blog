import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasError:false
    }
  }
  static getDerivedStateFromError(err) {
    return {
      hasError: true
    }
  }
  componentDidCatch(err,info){
    console.error(err,info)
  }
  render() {
    if(this.state.hasError){
    return <div>
        an Error!<br/>
      try to refresh the page 
      </div>

    }else{
      return this.props.children
    }
  }
}
export default  ErrorBoundary