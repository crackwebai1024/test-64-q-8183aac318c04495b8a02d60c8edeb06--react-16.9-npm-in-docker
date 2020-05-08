import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn } from 'mdbreact';

class update_lead_modal_btn extends React.Component{
    render(){
        return(
                <MDBBtn color="elegant" style={{ float:"right" }} className="update_lead_modal_btn">
                    Mark Update
                </MDBBtn>            
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