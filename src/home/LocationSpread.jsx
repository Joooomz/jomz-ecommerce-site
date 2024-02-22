import React from 'react'
import { Link } from 'react-router-dom';

const title = "More than 60,000 Customers around the world";

const desc = "Buy products on your any device with our app & enjoy your time checking our products. Download the app to start to shopping";

const clientsList = [
{
imgUrl: '/src/assets/images/clients/user.svg',
imgAlt: 'Client Thumbnail',
text: 'Be one of Us',
},
{
imgUrl: '/src/assets/images/clients/user.svg',
imgAlt: 'Client Thumbnail',
text: 'Be one of Us',
},
{
imgUrl: '/src/assets/images/clients/user.svg',
imgAlt: 'Client Thumbnail',
text: 'Be one of Us',
},
{
imgUrl: '/src/assets/images/clients/user.svg',
imgAlt: 'Client Thumbnail',
text: 'Be one of Us',
},
{
imgUrl: '/src/assets/images/clients/user.svg',
imgAlt: 'Client Thumbnail',
text: 'Be one of Us',
},
{
    imgUrl: '/src/assets/images/clients/user.svg',
imgAlt: 'Client Thumbnail',
text: 'Be one of Us',
},
{
imgUrl: '/src/assets/images/clients/user.svg',
imgAlt: 'Client Thumbnail',
text: 'Be one of Us',
},
]

const LocationSpread = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
            </div>
            {/* Main Content */}
            <div className='section-wrapper'>
                <div className='clients'>
                    {
                        clientsList.map((value, x) => (
                            <div key="x" className='client-list'>
                                <Link to="/sign-up" className='client-content'>
                                    <span>{value.text}</span>
                                </Link>
                                <div className='client-thumb'>
                                    <img src={value.imgUrl} alt={value.imgAlt} />
                                </div>
                            </div>) 
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocationSpread