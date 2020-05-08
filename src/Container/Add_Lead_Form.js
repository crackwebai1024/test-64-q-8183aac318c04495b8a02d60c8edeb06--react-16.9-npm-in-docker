import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Add_Lead } from '../store/actions/action'

class add_lead_form extends React.Component{
    state = {
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        location_string: "",
        location_type: "Country",
        detoggle: "add_lead_btn disabled"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) =>{
        debugger
        e.preventDefault()
        let body = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            mobile: this.state.mobile,
            email: this.state.email,
            location_type: this.state.location_type,
            location_string: this.state.location_string,
        }
        debugger
        this.props.addlead(body)
    }
    render(){
        let body = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            mobile: this.state.mobile,
            email: this.state.email,
            location_type: this.state.location_type,
            location_string: this.state.location_string,
        }
        debugger
        let detoggle = "add_lead_btn"
        for(let x in body){
            if(body[x].length == 0){
                    detoggle = "add_lead_btn disabled"
                break;
            }
        }
        if(this.props.add && this.props.modal == true){
            this.props.toggle()
        }
        return(
        <MDBContainer>
            <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
                <MDBModalHeader toggle={this.toggle} style={{ backgroudColor: "black" }}>Add Lead</MDBModalHeader>
                <MDBModalBody>
                    <div className="row">
                        <div className="col-md-6">    
                            <label className="grey-text right">
                            First Name
                            </label>
                            <input type="text" name="first_name" className="form-control" onChange = { this.handleChange } value={this.state.first_name}/>
                        </div>
                        <div className="col-md-6">    
                            <label className="grey-text right">
                            Last Name
                            </label>
                            <input type="text" name="last_name" className="form-control" onChange = { this.handleChange } value={this.state.last_name}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">    
                            <label className="grey-text right">
                            Email Address
                            </label>
                            <input type="email" name="email" className="form-control" onChange = { this.handleChange } value={this.state.email}/>
                        </div>
                        <div className="col-md-6">    
                            <label className="grey-text right">
                            Mobile
                            </label>
                            <input type="text" name="mobile" className="form-control" onChange = { this.handleChange } value={this.state.mobile}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">    
                            <label className="grey-text right">
                            Location Type
                            </label>
                            <select name = "location_type" className = "countryselect custom-select" onChange = { this.handleChange } value={this.state.location_type}>
                                <option>Country</option>
                                <option>City</option>
                            </select>
                            
                        </div>
                        <div className="col-md-6">    
                            <label className="grey-text right">
                            Location String
                            </label>
                            <input type="text" name="location_string" className="form-control" onChange = { this.handleChange } value={this.state.location_string}/>
                        </div>
                    </div>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.props.toggle}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={this.onSubmit} className={detoggle}>Save</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
        )
    }
}

const mapStateToProps = state => {
    return{
        add: state.user.add
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addlead: (body) => dispatch(Add_Lead(body))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(add_lead_form);
