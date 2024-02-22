import React from 'react'
import { Link } from 'react-router-dom';

const title = "About ShopCart";
const desc = "One of the leading online shopping center in the world. We deliver products from anywhere in the world. ";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'New York, USA.',
    },
    {
        iconName: 'icofont-phone',
        text: '+880 123 456 789',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@shopcart.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>Allgoodinthehood <a href="#">@ShopCart Greetings!  #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>ShopCartFanatic <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'Faculty',
        link: '#',
    },
    {
        text: 'Staff',
        link: '#',
    },
    {
        text: 'Students',
        link: '#',
    },
    {
        text: 'Alumni',
        link: '#',
    },
]

const Footer = () => {
  return (
    <footer className='style-2'>
        <div className='footer-top dark-view padding-tb'>
        <div className='container'>
            <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center'>
                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='footer-content'>
                                <div className='title'>
                                    <h4>{title}</h4>
                                    <div className='content'>
                                        <div>
                                            <p>{desc}</p>
                                            <ul className='lab-ul office-address'>
                                                {
                                                    addressList.map((value, x) => (
                                                        <li key={x}>
                                                            <i className={value.iconName}>{value.text}</i>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <ul className='lab-ul social-icons'>
                                                {
                                                    socialList.map((value, x) => (
                                                        <li key={x}>
                                                            <a href='#' className={value.className}><i className={value.iconName}>{value.text}</i></a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='footer-content'>
                                <div className='title'>
                                    <h4>{quickTitle}</h4>
                                    <div className='content'>
                                        <div>
                                            <ul className='lab-ul quick-links'>
                                                {
                                                    quickList.map((value, x) => (
                                                        <li key={x}>
                                                            <a href='#'>{value.text}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='footer-content'>
                                <div className='title'>
                                    <h4>{ItemTitle}</h4>
                                    <div className='content'>
                                        <div>
                                            <ul className='lab-ul quick-links'>
                                                {
                                                    ItemList.map((value, x) => (
                                                        <li key={x}>
                                                            <a href='#'>{value.text}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='footer-content'>
                                <div className='title'>
                                    <h4>{tweetTitle}</h4>
                                    <div className='content'>
                                        <div>
                                            <ul className='lab-ul quick-links'>
                                                {
                                                    tweetList.map((value, x) => (
                                                        <li key={x}>
                                                            <i className={value.iconName}></i>
                                                            {value.desc}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='footer-bottom'>
            <div className='container'>
                <div className='section-wrapper'>
                    <p><Link to="/">ShopCart Inc.</Link> &copy; 2024 | All rights reserved.</p>
                    <div className='footer-bottom-list'>
                            {
                                footerbottomList.map((value,x) => (
                                    <a href='/' key={x}>{value.text}</a>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer