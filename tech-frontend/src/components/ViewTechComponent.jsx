import React, { Component } from 'react';
import TechService from '../services/TechService';

class ViewTechComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            techid: this.props.match.params.techid,
            tech: {} 
        }
      
    }
    componentDidMount(){
        TechService.getTechById(this.state.techid).then( res => {
            this.setState({tech: res.data});
        })
    }

    back(){
        this.props.history.push('/tech');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Tech Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Tech Name:  { this.state.tech.techname }</label>
                            
                        </div>
                        <div className = "row">
                            <label> Course Name: { this.state.tech.course }</label>
                            
                        </div>
                        <button className="btn btn-danger" onClick={this.back.bind(this)} style={{ marginTop: "10px" }}>Back</button>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTechComponent;