import React, { Component } from 'react';
import TechService from '../services/TechService';

class ListTechComponent extends Component {
        
    constructor(props) {
        super(props)

        this.state = {
                techs: []
        }
        this.addTech = this.addTech.bind(this);
        this.editTech = this.editTech.bind(this);
        this.deleteTech = this.deleteTech.bind(this);
    }
    deleteTech(techid){
        TechService.deleteTech(techid).then( res => {
            this.setState({techs: this.state.techs.filter(tech => tech.techid !== techid)});
        });
    }
    viewTech(techid){
        this.props.history.push(`/view-tech/${techid}`);
    }
    

    editTech(techid){
        this.props.history.push(`/add-tech/${techid}`);
    }

componentDidMount(){
    TechService.getTechs().then((res)=>{
        this.setState({techs: res.data});
    })
}

addTech(){
    this.props.history.push('/add-tech/_add');
}


    render() {
        return (
            <div>
                 <h2 className="text-center">Tech List</h2>
                 <div className = "d-grid gap-2 d-md-block">
                    <button type="button" className="btn btn-primary" onClick={this.addTech}> Add Tech</button>
                 </div>
                 
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Tech Name</th>
                                    <th> Course Name</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.techs.map(
                                        tech => 
                                        <tr key = {tech.techid}>
                                             <td> { tech.techname} </td>   
                                             <td> { tech.course}</td>
                                             <td>
                                             <button onClick={ () => this.editTech(tech.techid)} className="btn btn-info">Update </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTech(tech.techid)} className="btn btn-danger">Delete </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewTech(tech.techid)} className="btn btn-info">View </button>
                                             </td>
                                            
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTechComponent;