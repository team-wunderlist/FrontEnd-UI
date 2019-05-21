import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from '../actions';


class Todos extends React.Component {

    componentDidMount(){
        this.props.getData();
    }

    render() {
        return (
            <div>
                <h1>Tasks Page</h1>

            </div>
        )
            

        
    }
}

const mapStateToProps = ({ todos, fetchingTodos }) => ({
    todos,
    fetchingTodos
})

export default withRouter( connect(mapStateToProps, { getData }) (Todos));