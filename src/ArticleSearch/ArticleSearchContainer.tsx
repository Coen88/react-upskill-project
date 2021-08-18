import React, {useState, useEffect, ChangeEvent} from 'react';
import ArticleSearchBar from './ArticleSearchBar';

// import { articles } from './resources/Articles';
import { Grid, CircularProgress } from '@material-ui/core';
import fetchWikiData from './wikipediaAPI'
import {useDebounce} from 'react-use'
import Article from "./Article";
import {ArticleType} from "./types/ArticleType";



const ArticleSearchContainer = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [status, setStatus] = useState<string>('idle')
    const isLoading = status === 'loading'
    const isSuccess = status === 'success'
    const isError = status === 'error'
    const [articlesData, setArticlesData] = useState<any>()
    const [queried, setQueried] = useState<boolean>(false)
    const [error, setError] = useState<Error>(new Error())
    const [typing, setTyping] = useState<number>(0)
    
    const handleChange = (e: ChangeEvent<{ value: string }>) => {
        const {value} = e.target
        setSearchValue(value.toLowerCase())
        setQueried(true)
        // setTyping(true)
    }
    
    useDebounce(
        () => {
            setTyping(typing + 1);
        },
        2000,
        [searchValue]
    );

    useEffect(() => {
        if (!queried) {
            return
        }

        console.log('serach value ', searchValue)
        setStatus('loading')
        
        fetchWikiData(searchValue)
        .then(
          responseData => {
            setArticlesData(responseData)
            setStatus('success')
          },
          errorData => {
            setError(errorData)
            setStatus('error')
          }
        )
    },[typing, queried])
    // },[searchValue, queried])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <h1>Wiki search</h1>
            </Grid>
            <ArticleSearchBar searchValue={searchValue} handleChange={handleChange} />
            {isError ? error.message : null}
            {isLoading ? <CircularProgress /> : null}
            {isSuccess ? (
                articlesData?.query?.search?.length ? (
                    articlesData.query.search.map((article: ArticleType) => (
                        <Article key={article.pageid} article={article} />
                    )) 
                ) : (
                    <p>No records found</p>
                )
            ) : null}
        </Grid>
    )
};

ArticleSearchContainer.propTypes = {};

export default ArticleSearchContainer;
