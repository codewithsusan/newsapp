import React from 'react'

function NewsItem(props) {

    let { title, description, imageUrl, newsurl, author, time, source } = props;

    return (
        <div className="card my-3">
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                {source}
                <span className="visually-hidden">unread messages</span>
            </span>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> {(title) == null ? description.slice(0, 50) + "..." : title.slice(0, 60) + "..."}</h5>
                <p className="card-text">{(description) ? description.slice(0, 60) + "..." : title.slice(0, 50) + "..."}</p>
                <p className="card-text"><small className="text-muted">By {author ? author : "Unknown Author"} on {new Date(time).getDate()}-{new Date(time).getMonth()}-{new Date(time).getFullYear()}</small></p>
                <a href={newsurl} target="_blank" rel='noopener noreferrer' className="btn btn-md btn-dark" >Read More</a>
            </div>
        </div>
    )
}

export default NewsItem;


