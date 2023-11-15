import { Helmet } from 'react-helmet-async';
import Cover from '../../Components/Cover/Cover';
import OurMenu from '../../Components/OurMenu/OurMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Our Menu</title>
            </Helmet>
            <Cover
                img={'https://i.ibb.co/wNVm8Tc/banner3.jpg'}
                headerText={'OUR MENU'}
                paragraph={'Would you like to try a dish?'} />
            <OurMenu/>
            <Cover
                img={'https://i.ibb.co/8B0y75J/dessert-bg.jpg'}
                headerText={'DESSERTS'}
                paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <OurMenu/>
            <Cover
                img={'https://i.ibb.co/KNLCFqW/pizza-bg.jpg'}
                headerText={'PIZZA'}
                paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <OurMenu/>
            <Cover
                img={'https://i.ibb.co/6mshz9x/soup-bg.jpg'}
                headerText={'SALADS'}
                paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <OurMenu/>
        </div>
    );
};

export default Menu;