import React from "react";
import ReactDataGrid from "react-data-grid";
import '../App.css';
const columns = [
  {key: "id", name: "DataBaseID", editable: false},
  {key: "title", name: "LQ ID", editable: false},
  {key: "vendor", name: "Vendor", editable: false},
  {key: "Base Rent", name: "Base Rent", editable: true},
  {key: "Additional Payments", name: "Additional Payments", editable: true},
  { key: "total", name: "Total", editable: false }
];

const EmptyRowsView = () => {
  const message = "No data to show";
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "#ddd", padding: "100px" }}
    >
      <img src="./logo.png" alt={message} />
      <h3>{message}</h3>
    </div>
  );
};

const rows = [
  {id: 0, title: "Task 1", total: 20},
  {id: 1, title: "Task 2", total: 40},
  {id: 2, title: "Task 3", total: 60},
  {id: 3, title: "Task 1", total: 20},
  {id: 4, title: "Task 2", total: 40},
  {id: 5, title: "Task 3", total: 60},
  {id: 6, title: "Task 1", total: 20},
  {id: 7, title: "Task 2", total: 40},
  {id: 8, title: "Task 3", total: 60},
  {id: 9, title: "Task 1", total: 20},
  {id: 10, title: "Task 2", total: 40},
  {id: 11, title: "Task 3", total: 60}
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
        minHeight={200}
        maxHeight={500}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
    );
  }
}

export default Table;