import Cover from '../../Components/Cover/Cover'
import { useState } from "react";
import { useParams } from "react-router-dom"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from '../../Components/Order/OrderTab';
import { Helmet } from 'react-helmet-async';

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menus] = useMenu();
    const dessert = menus.filter(item => item.category === 'dessert')
    const soup = menus.filter(item => item.category === 'soup')
    const salad = menus.filter(item => item.category === 'salad')
    const pizza = menus.filter(item => item.category === 'pizza')
    const offered = menus.filter(item => item.category === 'offered')
    return (
        <div>
            <div>
            <Helmet>
                <title>Bistro | Our Shop</title>
            </Helmet>
                <Cover
                    img={'https://i.ibb.co/xq2GcQt/banner2.jpg'}
                    headerText={'OUR SHOP'}
                    paragraph={'Would you like to try a dish?'} />
                <div className='w-full px-16 mx-auto text-center my-10'>
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>SALAD</Tab>
                            <Tab>PIZZA</Tab>
                            <Tab>SOUPS</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>DRINKS</Tab>
                        </TabList>
                        <TabPanel>
                            <OrderTab
                                items={dessert}
                            />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab
                                items={soup}
                            />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab
                                items={salad}
                            />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab
                                items={pizza}
                            />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab
                                items={offered}
                            />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default OurShop;