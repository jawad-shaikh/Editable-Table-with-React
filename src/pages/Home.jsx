import React, { useState } from 'react'
import Cards from '../components/Cards';
import Table from '../components/Table';
import RecordForm from '../components/RecordForm';

export default function Home() {

  const [records, setRecords] = useState([]);
  const [format, setFormat] = useState(false);

  const toggle = () => {
    setFormat(!format)
  }

  return (
    <>
      <button onClick={toggle}>toggle format</button>
      <div className='home'>
        {format === false ? (
          <Cards records={records} />
        ) : (
          <Table records={records} setRecords={setRecords} />
        )}
        <RecordForm records={records} setRecords={setRecords} />
      </div>
    </>
  )
}
