import React from 'react'
import Cell from '../components/Cell';

export default function TableRow({record, records, setRecords, recordIndex}) {
  return (
    <tr id={record.id}>
        {Object.keys(record).map(key => (
            <Cell
              recordIndex={recordIndex}
              recordKey={key}
              recordValue={record[key]}
              recordId={record.id}
              records={records}
              setRecords={setRecords}
            />
        ))}
    </tr>
  )
}
