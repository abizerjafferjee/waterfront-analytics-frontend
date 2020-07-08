import React, {useState, useEffect} from 'react';

import Input from "./Input";
import GridGenerator from "./GridGenerator";

function Collections() {

    const [search, setSearch] = useState('')
    const [collections, setCollections] = useState([])
    const [searchError, setSearchError] = useState(false)
    const postPerRow = window.innerWidth < 500 ? 1 : 3

    function getCollections(url) {
        fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                setCollections(data)
                setSearchError(false)
            })
            .catch(function(response) {
                setSearchError(true)
            })
    }

    useEffect(() => {
        const url = `https://api.waterfrontanalytics.com/api/posts/`
        getCollections(url)
    }, [])

    function handleChange(event) {
        const {id, value} = event.target
        if (id === 'search-collections') {
            setSearch(value)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        const url = `https://api.waterfrontanalytics.com/api/posts?search=${search}&search_fields=title&search_fields=description`
        getCollections(url)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="section-container collection-container">
                    <div className="section-content">
                        <p className="collection-header">Search our collections.</p>
                        <form onSubmit={handleSubmit} className="collection-form">
                            <Input
                                id="search-collections"
                                type="text"
                                placeholder="Search a topic"
                                value={search}
                                onChange={handleChange}>
                                <button className="input-button btn-primary" type="submit">Search</button>
                            </Input>
                        </form>
                        <p className="collection-text">
                            Articles, actionable tips and tutorials on becoming a data-driven business.
                        </p>
                        { searchError && <small className="text-danger">Something went wrong.</small> }
                    </div>
                </div>
            </div>
            <div className="container-fluid section-container">
                <GridGenerator cols={postPerRow}>
                {
                    collections.map((value, index) => {
                        return (
                            <div key={index} className="card m-1">
                                <div className="card-body">
                                    <a href={value.url} className="card-title text-primary">
                                        {value.title}
                                    </a>
                                    <div className="card-text">
                                        {value.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </GridGenerator>
            </div>
        </>
    )
}

export default Collections