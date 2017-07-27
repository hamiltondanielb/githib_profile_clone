import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as githubActions from '../../modules/github/actions'

class Home extends React.Component {

  componentDidMount () {
    this.props.getMyRepos()
  }

  render () {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        {this.props.repos.map((repo)=>{
          return <div key={repo.id}>{repo.name}</div>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  repos: state.github.repos
})

const mapDispatchToActions = {
  ...githubActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(Home)
