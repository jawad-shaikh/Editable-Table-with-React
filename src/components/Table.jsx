import React from "react"
import TableRow from '../components/TableRow';

export default function Table({records, setRecords}) {
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Course</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {records && records.map((record, index) => (
            <TableRow
              key={index}
              record={record}
              records={records}
              setRecords={setRecords}
              recordIndex={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
