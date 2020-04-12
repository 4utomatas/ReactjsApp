import React from 'react';
import {Link} from 'react-router-dom';
import ProductDetails from './Details/ProductDetails';
import History from './Details/History';
import { Tabs, Tab, Panel } from '@bumaga/tabs';

export default function Details() {
    return (
        <div className=" text-left">
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
                <div className="mt-2">
                    <Panel>
                        <ProductDetails />
                    </Panel>
                    <Panel>
                        <History type="q"/>
                    </Panel>
                    <Panel>
                        <History type="p"/> 
                    </Panel>
                </div>
            </Tabs>    
        </div>
    );              
}

