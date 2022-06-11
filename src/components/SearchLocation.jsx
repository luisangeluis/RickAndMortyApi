import React from 'react'

const SearchLocation = ({ setIdSearch }) => {

    const searchId = (e) => {
        e.preventDefault();
        console.log();
        setIdSearch(e.target.firstChild.value);
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className='card text-center bg-dark text-white'>
                    <div className="card-body">
                        <form onSubmit={searchId} className='d-flex justify-content-center'>
                            <input type="text" className='flex-grow-1 text-center' id="inputSearch" placeholder='type a location id' />
                            <button className=''>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchLocation