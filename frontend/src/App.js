import React,{ Suspense , lazy } from 'react';
import DeshAppBar from './component/DeshAppBar.js';
import Header from './component/Header.js';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import * as history from 'history';
import { AuthRoutes } from './config/routerConfig'
import ProtectedRout from './config/ProtectedRout.config'
import MainScreenLoader from './component/MainScreenLoader'
import {useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar,
  })
)

function App() {
  const classes = useStyles();
  return (
          <React.Fragment>
            <div className={classes.root}>
                <DeshAppBar />
                <main className={classes.content}>
                  <div className={classes.toolbar} />
                  <Router history={history}>
                    <Suspense fallback={<MainScreenLoader />}>
                      <Switch>
                        {AuthRoutes.map((RouteObj,index)=>(
                            <ProtectedRout
                                key={index}
                                path={RouteObj.path}
                                exact
                                // exact={(exact !== undefined && exact === true)? true : false}
                                // component={lazy(()=> import(RouteObj.component))}
                                component={RouteObj.component}
                            />
                        ))}
                      </Switch>
                    </Suspense>
                  </Router>
                </main>
            </div>
          </React.Fragment>
  );
}
export default App;
