import React from 'react';
import { connect } from 'react-redux';
import Add_Lead_Modal_Btn from './Add_Lead_Modal_Btn';
import Leads_Table from './Leads_Table';


class Container extends React.Component{
    render(){
        return(
            <div>
                <Add_Lead_Modal_Btn />
                <Leads_Table />
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
    };
}

const mapDispatchToProps = dispatch => {
    return{
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Container)