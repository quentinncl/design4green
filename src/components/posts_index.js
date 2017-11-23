import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchDentists} from "../actions/index";

class PostIndex extends Component {


    componentDidMount(){
        this.props.fetchDentists();
    }

   /*
    renderPosts(){
      return  _.map(this.props.posts, post => {
          return(
              <li className="list-group-item" key={post.id}>
                  {post.title}
              </li>
          )
      });
   }
   */

   render(){
       return(
           <div>
               <div className="text-xs-right">
                   <Link className="btn btn-primary" to="/">
                       Come back
                   </Link>
               </div>
               <h3>Dentist</h3>
               <p>
               </p>
           </div>
       );
   }
}

function mapStateToProps(state){
    return {dentists: state.dentists};
}

export default connect(mapStateToProps, { fetchDentists })(PostIndex);
/*
   <=>
   function mapDispathToProps(){
       return {fetchPosts: fetchPosts}
   }
   export default connect(mapStateToProps,mapDispathToProps)(PostsIndex);
*/
