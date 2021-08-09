import React, {useState, useEffect} from 'react';
import ArticleSearchBar from './ArticleSearchBar';
import Article from './Article';
// import { articles } from './resources/Articles';
import { Grid, CircularProgress } from '@material-ui/core';
import fetchWikiData from './wikipediaAPI'
import {useDebounce} from 'react-use'



const ArticleSearchContainer = () => {
    const [searchValue, setSearchValue] = useState('')
    const [status, setStatus] = useState('idle')
    const isLoading = status === 'loading'
    const isSuccess = status === 'success'
    const isError = status === 'error'
    const [articlesData, setArticlesData] = useState(null)
    const [queried, setQueried] = useState(false)
    const [error, setError] = useState(false)
    const [typing, setTyping] = useState(0)
    
    const handleChange = (e) => {
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
        // 1st method
        // window.fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(searchValue)}`)
        //     .then(async response => {
        //         const data = await response.json()
        //         if (response.ok) {
        //             return data
        //         } else {
        //             return Promise.reject(data)
        //         }
        //     })
        //     .then(
        //         responseData => {
        //             setArticlesData(responseData)
        //             setStatus('success')
        //         },
        //         errorData => {
        //             setError(errorData)
        //             setStatus('error')
        //         }
        //     )
                
        // 2nd method
        // const fetchData = async () => {
        //     await window.fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(searchValue)}`)
        //     .then(response => {
        //         const data = response.json()
        //         if (response.ok) {
        //             return data
        //         } else {
        //             return Promise.reject(data)
        //         }
        //     })
        //     .then(
        //         responseData => {
        //             setArticlesData(responseData)
        //             setStatus('success')
        //         },
        //         errorData => {
        //             setError(errorData)
        //             setStatus('error')
        //         }
        //     )
        // }
        // fetchData()

        // 3rd method
        
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
                    articlesData.query.search.map((article) => (
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
