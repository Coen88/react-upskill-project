import React from 'react';
import ArticleButtonLink from './ArticleButtonLink'
import { Card, CardContent, Grid } from '@material-ui/core';

const Article = ({title, snippet, url}) => {
    return (
        <Grid container item xs={12} md={12}>
            <Grid item>
                <Card variant="outlined">
                    <CardContent>
                        <h1>{title}</h1>
                        <Grid container alignItems="center">
                            <Grid item xs={12}  md={9}>
                                <div>{snippet}</div>
                            </Grid>
                            <Grid item xs={12} md="3" style={{textAlign: "right"}}>
                                <ArticleButtonLink url={url} label="Open"/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

Article.propTypes = {};

export default Article;
