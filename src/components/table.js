import React from "react";
import ReactDataGrid from "react-data-grid";

const columns = [
  {key: "id", name: "DataBaseID", editable: false},
  {key: "title", name: "LQ ID", editable: false},
  {key: "Base Rent", name: "Base Rent", editable: true},
  {key: "Additional Payments", name: "Additional Payments", editable: true},
  // { key: "complete", name: "Total", editable: false }
];

const rows = [
  {id: 0, title: "Task 1", complete: 20},
  {id: 1, title: "Task 2", complete: 40},
  {id: 2, title: "Task 3", complete: 60}
];

class Table extends React.Component {
  state = {rows};

  onGridRowsUpdated = ({fromRow, toRow, updated}) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = {...rows[i], ...updated};
      }
      return {rows};
    });
  };

  render() {
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={rows.length}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
    );
  }
}

export default Table;