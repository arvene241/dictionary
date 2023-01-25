import React from 'react'

const Synonyms = ({ data }) => {
  return (
    <div className="mt-9 flex items-center gap-5">
      <h2 className="text-[#757575] text-xl">Synoyms</h2>
      <p className="text-[#A445ED] text-xl font-bold">{data.join(' - ')}</p>
    </div>
  )
}

export default Synonyms