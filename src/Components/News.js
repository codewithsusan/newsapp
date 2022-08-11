import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types';

function News(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalize = (text) => {
        return (text.charAt(0).toUpperCase() + text.slice(1));
    }

    const fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        document.title = capitalize(props.category) + " - NewsMonkey";
        setPage(page + 1);
    }

    useEffect(() => {
        const fetchData = async () => {
            props.progress(0);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true);
            props.progress(10);
            const data = await fetch(url);
            const parsedData = await data.json();
            props.progress(40);
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
            setLoading(false);
            props.progress(100);
            setPage(page + 1);

            document.title = capitalize(props.category) + " - NewsMonkey";
        }
        fetchData();

    }, []);

    return (
        <div className="my-5">
            <h1 className=" text-center" style={{ marginTop: "90px", marginBottom: "45px" }}>NewsMonkey - {capitalize(props.category)} Headlines</h1>
            {(loading && <Spinner />)}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults ? true : false}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row justify-content-start">
                        {!loading && articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={element.title}
                                        description={element.description}
                                        imageUrl={element.urlToImage ? element.urlToImage : "https://media.cnn.com/api/v1/images/stellar/prod/220802164100-01-credit-card-score-stock.jpg?c=16x9&q=w_800,c_fill"}
                                        newsurl={element.url}
                                        author={element.author}
                                        time={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div >
    );

}

News.defaultProps = {
    country: "in",
    pageSize: 18
}

News.propTypes = {
    country: PropTypes.string
}


export default News