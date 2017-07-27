import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as githubActions from '../../modules/github/actions'
import styles from './_home.css'

class Home extends React.Component {

  componentDidMount () {
    this.props.getMyRepos()
  }

  render () {
    return (
      <div className="Grid Grid--guttersLg">
          {this.props.repos.map((repo)=>{
            return (
              <div className='Grid-cell u-full u-med-1of2 u-large-1of3' key={repo.id}>
                <div className="thumbnail">
                  <div className="caption">
                    <h3>{repo.name}</h3>
                    <p className="ellipsis">{repo.description ? repo.description : ""}</p>
                    <div><span className="label label-primary">{repo.language}</span></div>
                    <div>Watchers <span className="badge">{repo.watchers}</span> Forks <span className="badge">{repo.forks}</span></div>
                  </div>
                </div>
              </div>
            )
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
