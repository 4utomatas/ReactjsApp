import React from 'react';
import Product from './Product';
import {useParams, Link, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import ProductDetails from './Details/ProductDetails';
import History from './Details/History';
import { Tabs, Tab, Panel } from '@bumaga/tabs';

export default function Details() {
    return (
        <div className="container text-left">
            <Tabs>
                <div>
                    <Tab>
                        <button className="btn btn-info mr-1">
                            Product Details
                        </button>
                    </Tab>
                    <Tab>
                        <button className="btn btn-info mr-1">
                            Quantity history
                        </button>
                    </Tab>
                    <Tab>
                        <button className="btn btn-info mr-1">
                            Price history
                        </button>
                    </Tab>
                    <Link className="btn btn-success" to={`/`}> Go back </Link>
                </div>
                <div className="container m-2">
                    <Panel>
                        <ProductDetails />
                    </Panel>
                    <Panel>
                        <p>Quantity history</p>
                        <History type="q"/>
                    </Panel>
                    <Panel>
                        <p>Price history</p> 
                        <History type="p"/> 
                    </Panel>
                </div>
            </Tabs>    
        </div>
    );              
}

