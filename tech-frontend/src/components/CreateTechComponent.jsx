import React, { Component } from 'react';
import TechService from '../services/TechService';

class CreateTechComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            techid: this.props.match.params.techid,
            techname: '',
            course: ''

        }
        this.changeTechNameHandler = this.changeTechNameHandler.bind(this);
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.saveorUpdateTech = this.saveorUpdateTech.bind(this);
    }

    componentDidMount(){
        if(this.state.techid === '_add'){
            return
        }else{
        TechService.getTechById(this.state.techid).then( (res) =>{
            let tech = res.data;
            this.setState({techname: tech.techname,
                course: tech.course
            });
        });
    } 
  }

    saveorUpdateTech = (e) => {
        e.preventDefault();
        let tech = {techname: this.state.techname, course: this.state.course};
        console.log('tech => ' + JSON.stringify(tech));

        if(this.state.techid === '_add'){
            TechService.createTech(tech).then(res =>{
                this.props.history.push('/tech');
            });
        }else{
            TechService.updateTech(tech, this.state.techid).then( res => {
                this.props.history.push('/tech');
            });
      }
    }

    changeTechNameHandler = (event) => {
        this.setState({ techname: event.target.value });
    }


    changeCourseNameHandler = (event) => {
        this.setState({ course: event.target.value });
    }

    cancel(){
        this.props.history.push('/tech');
    }
  getTitle(){
      if(this.state.techid === '_add'){
          return <h3 className="text-center">Add Tech</h3>
      }else{
       return  <h3 className="text-center">Update Tech</h3>
      }
  }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Tech Name:</label>
                                        <input placeholder="Tech Name" name="techname" className="form-control"
                                            value={this.state.techname} onChange={this.changeTechNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Course Name:</label>
                                        <input placeholder="Course Name" name="course" className="form-control"
                                            value={this.state.course} onChange={this.changeCourseNameHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveorUpdateTech} style={{marginTop: "10px"}}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px",marginTop: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTechComponent;