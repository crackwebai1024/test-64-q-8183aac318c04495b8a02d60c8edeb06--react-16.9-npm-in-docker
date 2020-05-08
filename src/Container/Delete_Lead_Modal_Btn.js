import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn } from 'mdbreact';

class add_lead_modal_btn extends React.Component{

    renderleadtables = () =>{
        let leadtable = []
        this.props.gettable()
    }

    render(){
        return(
            <div  style={{ float: "right" }}>    
                <MDBBtn color="elegant">
                    Delete
                </MDBBtn>
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
)(add_lead_modal_btn);