import React, {useState, useEffect, useCallback} from 'react';
import ArticleSearchBar from './ArticleSearchBar';
import Article from './Article';
import { articles } from './resources/Articles';
import { Grid } from '@material-ui/core';


const ArticleSearchContainer = () => {
    const [searchValue, setSearchValue] = useState('')

    const [filteredArticles, setFilteredArticles] = useState([])
    
    const handleChange = (e) => {
        const {value} = e.target
        debugger
        setSearchValue(value.toLowerCase())
    }

    const handleSearch = useCallback(() => {
        const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchValue))
        setFilteredArticles(filteredArticles)
    },[searchValue])

    useEffect(() => {
        handleSearch()
    }, [searchValue, handleSearch])

    return (
        <Grid container spacing={2} item xs={6} md={6}>
            <ArticleSearchBar searchValue={searchValue} handleChange={handleChange} />
            {filteredArticles.map((article) => (
                <Article key={article.pageid} title={article.title} snippet={article.snippet} url={article.url} />
            ))}
        </Grid>
    )
};

ArticleSearchContainer.propTypes = {};

export default ArticleSearchContainer;
