

import './AudiopileApp.scss'
import { CategoryList } from '../../cmps/CategoryList/CategoryList';
import { Hero } from '../../cmps/Hero/Hero';
import { SecondShowcase } from '../../cmps/SecondShowcase/SecondShowcase';
import { FourthShowcase } from '../../cmps/FourthShowcase/FourthShowcase';
import { ThirdShowcase } from '../../cmps/ThirdShowcase/ThirdShowcase';
import { FirstShowcase } from '../../cmps/FirstShowcase/FirstShowcase';
import { productService } from '../../services/productService';

export const AudiopileApp = () => {

    const products = productService.getByCategory()

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

