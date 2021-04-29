import React from 'react'

class grid extends React.Component {
    render(){
        return(
<table className="table table-sm table-dark">
  <div className="table-responsive">
    <table className="table align-middle">
      <thead>
        <tr>
          ...
        </tr>
      </thead>
      <tbody>
        <tr>
          ...
        </tr>
        <tr className="align-bottom">
          ...
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td className="align-top">This cell is aligned to the top.</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
  </div>
</table>
        )
    }
}
export default grid