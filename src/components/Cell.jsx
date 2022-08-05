import React, { useState } from 'react'

export default function Cell({recordKey, recordValue, recordId, records, setRecords, recordIndex}) {
  
  const [canEditable, setCanEditable] = useState(false);
  const [cellValue, setCellValue] = useState(recordValue);

  const updateStateValue = (e) => {
    setCellValue(e.target.value)

    // reminder: following function should be called when done with changes e.g. hitting enter 
    records.forEach(record => {
      if (recordId === record.id) {
        let recordsAboutToBeUpdated = [...records]
        recordsAboutToBeUpdated[recordIndex][recordKey] = e.target.value
        
        setRecords(recordsAboutToBeUpdated)
      }
    });
  }

  return (
    <td onDoubleClick={() => setCanEditable(!canEditable)}>
      {canEditable ? <input className='cellInput' type="text" value={cellValue} onChange={updateStateValue} /> : cellValue}
    </td>
  )
}
