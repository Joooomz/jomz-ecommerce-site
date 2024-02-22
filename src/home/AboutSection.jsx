import React from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const subTitle = "Why Choose Us";
const title = "Become a Merchant";
const desc = "Take courses on your any device with our app & learn all about e-commerce business. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
{
iconName: 'icofont-users-alt-4',
count: '12900',
text: 'Merchant Enrolled',
},
{
iconName: 'icofont-graduate-alt',
count: '35',
text: 'Certified Courses',
},
{
iconName: 'icofont-notification',
count: '100',
text: 'Rewards and GitCards',
},
]

const AboutSection = () => {
  return (
    <div className='instructor-section style-2 padding-tb section-bg-ash'>
        <div className='container'>
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center align-items-center row-cols-xl-3 row-cols-md-2 row-cols-1'>
                    <div className='col'>
                        {
                            countList.map((value, x) => (
                                <div key={x} className='count-item'>
                                    <div className='count-inner'>
                                        <div className='count-icon'>
                                            <i className={value.iconName}></i>
                                        </div>
                                        <div className='count-content'>
                                            <h2>
                                                <span><CountUp end={value.count} duration={3} /></span>
                                                <span>+</span>
                                                <p>{value.text}</p>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col'>
                        <div className='instructor-content'>
                            <span className='subtitle'>{subTitle}</span>
                            <h2 className='title'>{title}</h2>
                            <p>{desc}</p>
                            <Link to="/sign-up" className='lab-btn'>{btnText}</Link>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='instructor-thumb'>
                            <img src="/src/assets/images/instructor/01.png" alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection