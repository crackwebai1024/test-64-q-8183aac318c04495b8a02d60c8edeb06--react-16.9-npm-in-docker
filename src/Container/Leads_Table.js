import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBBtn } from 'mdbreact';
import { GetTable } from '../store/actions/action'
import Delete_Lead_Modal_Btn from './Delete_Lead_Modal_Btn';
import Update_Lead_Modal_Btn from './Update_Lead_Modal_Btn';
class Leads_Table extends React.Component{

    renderleadtables = () =>{
        debugger
        let leadtable = []
        let data = this.props.data
        let up = this.props.update
        if(up){
            for(let x in data){
                debugger
                leadtable.push(
                    <tr>
                        <td>{data[x].first_name+data[x].last_name}</td>
                        <td>{data[x].email}</td>
                        <td>{data[x].mobile}</td>
                        <td>{data[x].location_type}</td>
                        <td>{data[x].location_string}</td>
                        <td>{data[x].communication}</td>
                        <td className="row">
                            <Update_Lead_Modal_Btn id={data[x].id}/>
                            <Delete_Lead_Modal_Btn id={data[x].id}/>                        
                        </td>
                    </tr>
                )
            }
        }
        else{
            for(let x in data){
                debugger
                leadtable.push(
                    <tr>
                        <td>{data[x].first_name+data[x].last_name}</td>
                        <td>{data[x].email}</td>
                        <td>{data[x].mobile}</td>
                        <td>{data[x].location_type}</td>
                        <td>{data[x].location_string}</td>
                        <td className="row">
                            <Update_Lead_Modal_Btn id={data[x].id}/>
                            <Delete_Lead_Modal_Btn id={data[x].id}/>                        
                        </td>
                    </tr>
                )
            }
        }
        return leadtable;
    }

    componentDidMount(){
        this.props.gettable()
    }

    render(){
        return(
            <div>    
                <table className="table table-striped table-responsive-md btn-table leads_table">
                    <thead style={{ backgroundColor: "black" }}>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Num</th>
                        <th>Location Type</th>
                        <th>Location String</th>
                        {this.props.update? <th>Communication</th>:""}
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {this.renderleadtables()}
                    </tbody>
                </table>
            </div>              
        )
    }
}


const mapStateToProps = state => {
    debugger
    return {
        data: state.user.data,
        update:state.user.update
    };
}

const mapDispatchToProps = dispatch => {
    return{
        gettable: () => dispatch(GetTable())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Leads_Table);