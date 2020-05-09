import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Update_Lead } from '../store/actions/action'

class Update_lead_form extends React.Component{
    
    state = {
        communication: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) =>{
        debugger
        e.preventDefault()
        this.props.updatelead(this.props.id, this.state.communication)
    }

    render(){

        if(this.props.update && this.props.modal == true){
            this.props.toggle()
        }

        return(
        <MDBContainer>
            <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
                <form className="update_lead_form">
                <MDBModalHeader toggle={this.props.toggle} style={{ backgroudColor: "black" }}>Mark communication</MDBModalHeader>
                <h1 className="communication">Communication</h1>
                <textarea name="communication" className="form-control communication" onChange={this.handleChange} value={this.state.communication}></textarea>
                <MDBModalFooter>
                    
                    <MDBBtn color="primary" onClick={this.props.toggle} >Close</MDBBtn>
                    <MDBBtn color="secondary" className="update_lead_btn"  onClick={this.onSubmit}>Save</MDBBtn>
                </MDBModalFooter>
                </form>
            </MDBModal>  
        </MDBContainer>
        )
    }
}

const mapStateToProps = state => {
    return{
        update: state.user.update
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updatelead: (id, communication) => dispatch(Update_Lead(id, communication))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Update_lead_form);