import React from 'react';
import {Link} from 'react-router-dom';
import ProductDetails from './Details/ProductDetails';
import History from './Details/History';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Details() {
    return (
        <div className=" text-left">
            <Tabs>
                <TabList className="row list-inline"> 
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
                    <Link className="btn btn-success" to={`/products/`}> Go back </Link>
                </TabList>
                <div className="mt-2">
                    <TabPanel>
                        <ProductDetails />
                    </TabPanel>
                    <TabPanel>
                        <History type="q"/>
                    </TabPanel>
                    <TabPanel>
                        <History type="p"/> 
                    </TabPanel>
                </div>
            </Tabs>    
        </div>
    );              
}

