import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ArticleSearchContainer from './ArticleSearch/ArticleSearchContainer';
import LocationSearch from './Pages/LocationSearch/LocationSearch';
import Home from './Pages/Home/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
      color: '#fff',
      textDecoration: 'none',
  },
}));

const AppNavigation = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Mentoring project
            </Typography>
            <nav>
              <Button color="inherit">
                <NavLink className={classes.link} activeClassName="selected" to="/">
                  Home
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink className={classes.link} activeClassName="selected" to="/wiki-search">
                  Wiki Search
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink className={classes.link} activeClassName="selected" to="/location-search">
                  Location Search
                </NavLink>
              </Button>
            </nav>
          </Toolbar>
        </AppBar>
      </div>

      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/wiki-search">
            <ArticleSearchContainer />
          </Route>
          <Route path="/location-search">
            <LocationSearch />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppNavigation;
