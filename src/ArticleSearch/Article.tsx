import React from 'react';
import ArticleButtonLink from './ArticleButtonLink'
import { Card, CardContent, Grid } from '@material-ui/core';
import {ArticleType} from "./types/ArticleType";

export interface ArticlePropsType {
    article: ArticleType
}

const Article = (props: ArticlePropsType) => {
    const {title, snippet, pageid} = props.article
    const url = `https://en.wikipedia.org/?curid=${pageid}`
    
    return (
        <Grid container>
            <Grid item xs={12} md={6} style={{margin: '20px'}}>
                <Card variant="outlined">
                    <CardContent>
                        <h1>{title}</h1>
                        <Grid container alignItems="center">
                            <Grid item xs={12}  md={9}>
                                <div dangerouslySetInnerHTML={{__html: `${snippet}`}}></div>
                            </Grid>
                            <Grid item xs={12} md={3} style={{textAlign: "right"}}>
                                <ArticleButtonLink url={url} label="Open"/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Article;