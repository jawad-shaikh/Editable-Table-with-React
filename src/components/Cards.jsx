import React from 'react'
import RecordDetails from '../components/RecordDetails';

export default function Cards({records}) {
  return (
    <div>
        {records && records.map((record, index) => (
            <RecordDetails key={index} record={record} />
        ))}
    </div>
  )
}
