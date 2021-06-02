import React from 'react'
import CardCompanyTop from '../../components/CardCompanyTop/CardCompanyTop';
import CardCompanyBottom from '../../components/CardCompanyBottom/CardCompanyBottom';
import HeroImageCompany from '../../components/HeroImageCompany/HeroImageCompany';

export default function CompanyContainer() {
    return (
        <>
             <div>
                <h3 className="text-center item-detail-container__title2">Pasado y presente</h3>
                <h1 className="text-center item-detail-container__title1">Empresa</h1>
           </div>

            <div>
                <div><CardCompanyTop /></div> 
                <div><HeroImageCompany /></div> 
                <div><CardCompanyBottom /></div>
            </div>
        </>
    )
}
