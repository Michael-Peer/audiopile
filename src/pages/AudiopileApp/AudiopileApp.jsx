

import './AudiopileApp.scss'
import { CategoryList } from '../../cmps/CategoryList/CategoryList';
import { Hero } from '../../cmps/Hero/Hero';
import { SecondShowcase } from '../../cmps/SecondShowcase/SecondShowcase';
import { FourthShowcase } from '../../cmps/FourthShowcase/FourthShowcase';
import { ThirdShowcase } from '../../cmps/ThirdShowcase/ThirdShowcase';
import { FirstShowcase } from '../../cmps/FirstShowcase/FirstShowcase';

export const AudiopileApp = (props) => {

    return (
        <div>
            <Hero />
            <CategoryList />
            <FirstShowcase />
            <SecondShowcase />
            <ThirdShowcase />
            <FourthShowcase />
        </div>
    )
}

