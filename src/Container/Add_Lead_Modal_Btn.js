import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn } from 'mdbreact';
import Add_Lead_Form from './Add_Lead_Form';

class add_lead_modal_btn extends React.Component{

    state = {
        modal: false
    }

    renderleadtables = () =>{
        let leadtable = []
        this.props.gettable()
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        })
    }

    render(){
        return(
            <div className="col-md-2">    
                <MDBBtn color="elegant" onClick={this.toggle}>
                    Add Lead
                </MDBBtn>
                <Add_Lead_Form modal={this.state.modal} toggle={this.toggle}/>
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