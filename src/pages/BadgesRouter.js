import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import BadgePage from './BadgePage';
import BadgesCopia from './BadgesCopia';
import BadgesHome from './BadgesHome';
import BadgesRickMorty from './BadgesRickMorty';
import BadgesApi from './BadgesApi'
import BadgeEdit from './BadgeEdit'
import BadgeDetails from './BadgeDetails'
import BadgeDetailsContainer from './BadgeDetailsContainer';


function BadgesRouter() {
    return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/badge-page" component={ BadgePage }/>
                <Route exact path="/badges-api" component={ BadgesApi }/>
                <Route exact path="/badge/:badgeId/edit" component={ BadgeEdit }/>
                <Route exact path="/badge/:badgeId" component={ BadgeDetailsContainer }/>
                {/* <Route exact path="/badges-rick-morty" component={ BadgesRickMorty } /> */}
                <Route exact path="/" component={ BadgesHome } />
            </Switch>       
        </Layout>
    </BrowserRouter> 
    )
}

export default BadgesRouter;