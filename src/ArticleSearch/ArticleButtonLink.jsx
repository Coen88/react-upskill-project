import React from 'react';
import {Button} from '@material-ui/core'

const ArticleButtonLink = ({url, label}) => {
    return (
        <Button href={url} variant="contained" color="primary" target="_blank">{label}</Button>
    )
};

ArticleButtonLink.propTypes = {};

export default ArticleButtonLink;
