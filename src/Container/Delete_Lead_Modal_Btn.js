import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn } from 'mdbreact';
import Delete_Lead_Form from './Delete_Lead_Form'; 

class delete_lead_modal_btn extends React.Component{

    state = {
        modal: false
    }

    toggle = () => {
        debugger
        this.setState({
            modal: !this.state.modal,
        })
    }

    render(){
        return(
            <div  style={{ float: "right" }}>    
                <MDBBtn color="elegant" className="delete_lead_modal_btn" onClick={this.toggle}>
                    Delete
                </MDBBtn>
                <Delete_Lead_Form modal={this.state.modal} toggle={this.toggle} id={this.props.id}/>
            </div>              
        )
    }
}

const mapStateToProps = state => {
    return{
        
    }
}

const mapDispatchToProps = dispatch => {
    return{
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(delete_lead_modal_btn);