import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Delete_Lead } from '../store/actions/action'

class Delete_lead_form extends React.Component{
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) =>{
        debugger
        e.preventDefault()
        this.props.deletelead(this.props.id)
    }

    render(){

        if(this.props.delete && this.props.modal == true){
            this.props.toggle()
        }

        return(
        <MDBContainer>
            <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
                <div className="delete_lead_form">
                <MDBModalHeader toggle={this.props.toggle} style={{ backgroudColor: "black" }}>Do you wish to delete this lead?</MDBModalHeader>
                <MDBModalFooter>
                    <MDBBtn color="secondary" className="delete_lead_btn"  onClick={this.onSubmit}>Delete</MDBBtn>
                    <MDBBtn color="primary" onClick={this.props.toggle} >Cancel</MDBBtn>
                </MDBModalFooter>
                </div>
            </MDBModal>  
        </MDBContainer>
        )
    }
}

const mapStateToProps = state => {
    return{
        delete: state.user.delete
    }
}

const mapDispatchToProps = dispatch => {
    return{
        deletelead: (id) => dispatch(Delete_Lead(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Delete_lead_form);