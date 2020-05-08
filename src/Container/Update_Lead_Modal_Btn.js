import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn } from 'mdbreact';
import Update_Lead_Form from './Update_Lead_Form';

class update_lead_modal_btn extends React.Component{
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
            <div>
                <MDBBtn color="elegant" style={{ float:"right" }} className="update_lead_modal_btn" onClick={this.toggle}>
                    Mark Update
                </MDBBtn>   
                <Update_Lead_Form modal={this.state.modal} toggle={this.toggle} id={this.props.id}/>      
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
)(update_lead_modal_btn);