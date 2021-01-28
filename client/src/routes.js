import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {ListsPage} from './pages/ListsPage'
import {AuthPage} from './pages/AuthPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from "./pages/DetailPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/lists" exact>
                    <ListsPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage/>
                </Route>
                <Route path="/detail" exact>
                    <DetailPage/>
                </Route>
                <Redirect to="/lists" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
        )

}