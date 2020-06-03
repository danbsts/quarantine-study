import React, { Component } from 'react';
// import axios from 'axios';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
import './Blog.css';

class Blog extends Component {
    state = {
        auth: true
    }

    componentDidMount() {
        // if(!this.state.auth) this.props.history.replace('/posts');
    }

    render () {
        return (
            <div className="Blog ">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                activeClassName="my-active" // default name is "active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink
                                to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}
                                exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/*order here matter!!*/}
                    {this.state.auth? <Route path="/new-post" component={NewPost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    <Route render={() => <h1>Not found!</h1>}/>
                    {/*<Redirect from="/" to="/posts" />*/}
                    {/*<Route path="/" component={Posts}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;