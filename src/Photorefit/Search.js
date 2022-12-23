import { useState } from 'react'

function Search() {
const [data, setData] = useState('')

    const electronics = [
        ["tv", "available", "Rs1" ],
        ['fridge', 'available', 'Rs2'],
        ['ac', 'notavailable', 'Rs3'],
        ['football', 'available', 'Rs4'],
        ['baseball', 'notavailable', 'Rs1'],
        ['tennis', 'available', 'Rs1']
    ]



  return (
    <div>
        <form>
            <label htmlFor='search'> search </label>
            <input type='text' />
        </form>

    </div>
  )
}

export default Search