import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchDentists} from "../actions/index";

class PostIndex extends Component {

    componentDidMount(){
        this.props.fetchDentists();
    }

    renderPosts(){
       return  _.map(this.props.posts, post => {
           return(
               <li className="list-group-item" key={post.id}>
                   {post.title}
               </li>
           )
       });
    }

    render(){
        return(
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        New Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {posts: state.posts};
}

export default connect(mapStateToProps, { fetchDentists })(PostIndex);
/*
    <=>
    function mapDispathToProps(){
        return {fetchPosts: fetchPosts}
    }
    export default connect(mapStateToProps,mapDispathToProps)(PostsIndex);
 */