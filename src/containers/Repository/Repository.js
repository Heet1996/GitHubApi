import React, {Component} from 'react';
import {connect} from 'react-redux';

import RepoInfo from '../../components/UI/Card/Card';
import './Repository.css';
import axios from 'axios'

import {STAR_TOGGLER, WATCH_TOGGLER} from '../../query';

class Repository extends Component {
    state = {
        viewerHasStarred: this.props.viewerHasStarred,
        viewerSubscription: this.props.viewerSubscription,
        starCount: this.props.repository.stargazers.totalCount,
        watchCount: this.props.repository.watchers.totalCount
    }

    starToogler = () => {
        let starState = this.state.viewerHasStarred;
        let repositoryId = this.props.repository.id;
        let mutuateStar = STAR_TOGGLER();
        if (starState)
            mutuateStar = mutuateStar.replace('addStar', 'removeStar');
        axios.post(`https://api.github.com/graphql`, {
            query: mutuateStar,
            variables: {repositoryId}
        }, {
            headers: {
                'Authorization': `bearer ${this.props.token}`
            }
        })
            .then(() => {
                let count = this.state.starCount;
                if (starState)
                    count -= 1;
                else count += 1
                this.setState({viewerHasStarred: !starState, starCount: count});

            })
            .catch((err) => {
                console.log(err);
            })

    };


    watchToggler = () => {
        let subscribeState = this.state.viewerSubscription;
        subscribeState = subscribeState === 'SUBSCRIBED' ? 'UNSUBSCRIBED' : 'SUBSCRIBED';
        let repositoryId = this.props.repository.id;
        let mutuateWatch = WATCH_TOGGLER;
        axios.post(`https://api.github.com/graphql`, {
            query: mutuateWatch,
            variables: {repositoryId, subscribeState}
        }, {
            headers: {
                'Authorization': `bearer ${this.props.token}`
            }
        })
            .then(() => {
                let count = this.state.watchCount;
                count = subscribeState === 'SUBSCRIBED' ? count + 1 : count - 1;
                this.setState({viewerSubscription: subscribeState, watchCount: count});

            })
            .catch((err) => {
                console.log(err);
            })


    }

    render() {

        return (<div className="RepoCard">
            <RepoInfo
                repository={this.props.repository}
                viewerHasStarred={this.state.viewerHasStarred}
                viewerSubscription={this.state.viewerSubscription}
                starToogler={this.starToogler}
                watchToggler={this.watchToggler}
                starCount={this.state.starCount}
                watchCount={this.state.watchCount}
            />
        </div>);

    }
}

const mapStateToProps = (state) => {
    return {
        token: state.tokenValidator.token
    }
}
export default connect(mapStateToProps)(Repository);