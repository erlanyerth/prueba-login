import React from 'react'
import './styles/table.css';

function list(props){
    
    return(
        <section className="container">
            <div className="row">
                <div className="panel panel-primary filterable">
                    <div className="panel-heading">
                        <h3 className="panel-title">Data List</h3>
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary">Filter</button>
                        </div>
                    </div>
                    <table className="table">
                        <thead className="table-light">
                            <tr className="filters">
                                <th><input type="text" className="form-control" placeholder="Booking Id" disabled/></th>
                                <th><input type="text" className="form-control" placeholder="Customer" disabled/></th>
                                <th><input type="text" className="form-control" placeholder="creation date" disabled/></th>
                                <th><input type="text" className="form-control" placeholder="Street Address" disabled/></th>
                                <th><input type="text" className="form-control" placeholder="Price" disabled/></th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                            { props.information.map((info,index) => {
                            return(
                                <tr key ={index}>
                                <td>{ info.bookingId }</td>
                                <td>{ info.tutenUserClient.firstName } {info.tutenUserClient.lastName}</td>
                                <td>{ info.bookingTime }</td>
                                <td>{ info.locationId.streetAddress }</td>
                                <td>{ info.bookingPrice }</td>
                                </tr>
                        )
                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
export default list