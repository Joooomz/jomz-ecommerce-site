import React from 'react'

const subtitle = "Save the Day";
const title = (
    <h2 className='title'>Join on Day Long Free Workshop for <b><span>Advanced Mastering</span></b> on Sales</h2>
)
const description = "Limited Time Offering Only!"


const Register = () => {
  return (
    <section className='register-section padding-tb pb-0'>
        <div className='container'>
            <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                <div className='col'>
                    <div className='section-header'>
                        <span className='subtitle'>{subtitle}</span>
                        {title}
                        <p>{description}</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='section-wrapper'>
                        <h4>Register Now!</h4>
                        <form className='register-form'>
                            <input type='text' name='name' placeholder='Username' className='reg-input'/>
                            <input type='email' name='email' placeholder='Email Address' className='reg-input'/>
                            <input type='number' name='number' placeholder='Phone Number' className='reg-input'/>
                            <button type='submit' className='lab-btn'>Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register