import React from 'react'

const SearchLocation = ({ setIdSearch }) => {

  const searchId = (e) => {
    e.preventDefault();
    setIdSearch(e.target.firstChild.value);
  }

  return (
    <div className="row justify-content-center align-items-end">
      <div className="col-8">
        <div className='card text-center bg-dark text-white'>
          <div className="card-body">
            <form onSubmit={searchId} className="d-flex justify-content-center align-items-center">
              <div className="">
                <input type="text" className='form-control d-block' id="inputSearch" placeholder='type a location id' />
              </div>
              <div className="">
                <button className='h-100 btn-lg d-block'>Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SearchLocation