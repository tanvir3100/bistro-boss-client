import Cover from '../../Components/Cover/Cover';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from "../../../src/Components/SectionTital/SectionTitle";
import MenuCategory from '../../Components/OurMenu/MenuCategory/MenuCategory';
import HelmetSection from '../../Hooks/Helmet/HelmetSection';

const Menu = () => {
    const [menus] = useMenu();
    const dessert = menus.filter(item => item.category === 'dessert')
    const soup = menus.filter(item => item.category === 'soup')
    const salad = menus.filter(item => item.category === 'salad')
    const pizza = menus.filter(item => item.category === 'pizza')
    const offered = menus.filter(item => item.category === 'offered')
    return (
        <div>
            <HelmetSection
            title={'Bistro | Our Menu'}
            />
            <Cover
                img={'https://i.ibb.co/wNVm8Tc/banner3.jpg'}
                headerText={'OUR MENU'}
                paragraph={'Would you like to try a dish?'} />
            <SectionTitle
                subHeading={`---Don't miss---`}
                heading={`TODAY'S OFFER`} />
            <MenuCategory
                items={offered} 
                />
            <Cover
                img={'https://i.ibb.co/8B0y75J/dessert-bg.jpg'}
                headerText={'DESSERTS'}
                paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuCategory
                items={dessert} 
                title={'dessert'}/>
            <Cover
                img={'https://i.ibb.co/8B0y75J/dessert-bg.jpg'}
                headerText={'DESSERTS'}
                paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuCategory
                items={pizza}
                title={'pizza'} />
            <Cover
                img={'https://i.ibb.co/KNLCFqW/pizza-bg.jpg'}
                headerText={'PIZZA'}
                paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuCategory
                items={salad} 
                title={'salad'}/>
            <Cover
                img={'https://i.ibb.co/6mshz9x/soup-bg.jpg'}
                headerText={'SALADS'}
                paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuCategory
                items={soup} 
                title={'soup'}/>
        </div>
    );
};

export default Menu;