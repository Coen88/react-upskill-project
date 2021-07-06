import React from 'react';
import { Grid, InputAdornment, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';

function ArticleSearchBar({searchValue, handleChange}) {
    return (
        <Grid item xs={12} md={12}>
            <TextField
                label="Search Article"
                size={"medium"}
                value={searchValue}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    )
                }}
            />
        </Grid>
    );
}

ArticleSearchBar.propTypes = {};

export default ArticleSearchBar;
