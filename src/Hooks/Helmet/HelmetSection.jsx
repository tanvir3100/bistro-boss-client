import { Helmet } from 'react-helmet-async';

const HelmetSection = ({ title }) => {
    return (
        <Helmet>
            <title>Bistro |  {title}</title>
        </Helmet>
    );
};

export default HelmetSection;