import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Map from './Map';

const Contact = ()=>{
    return (
        <div>
            <div className='flex flex-col sm:flex-row md:flex-row sm:w-full md:w-full w-10/12 sm:m-20 md:m-20 m-auto text-slate-400'>
            <div className='sm:w-7/12 md:w-7/12 w-full shadow-2xl sm:p-20 md:p-20 p-8 sm:rounded-[100px] md:rounded-[100px] rounded-lg'>
                <div className='mb-6'>
                    <h2 className='text-2xl font-bold'>GET IN TOUCH</h2>
                    <h4 className='text-xl font-bold'>Write Us a Message</h4>
                </div>
                <div className='flex flex-col sm:flex-row md:flex-row w-full flex-wrap'>
                    <div className='sm:w-5/12 md:w-5/12 w-10/12 flex flex-col  mt-5 '>
                    <label htmlFor="name" className='mb-2'>Your Name</label>
                    <input type="text" id="name" className='border border-slate-400 p-2' />
                    </div>
                    <div className='sm:w-5/12 md:w-5/12 w-10/12 flex flex-col sm:ml-5 md:ml-5 ml-0  mt-5 '>
                        <label htmlFor="subject" className='mb-2'>Your Subject</label>
                        <input type="text" id="subject" className='border border-slate-400 p-2'/>
                    </div>
                    <div className='sm:w-5/12 md:w-5/12 w-10/12 flex flex-col  mt-5'>
                        <label htmlFor="email" className='mb-2'>Email</label>
                        <input type="email" id="email" className='border border-slate-400 p-2' />
                    </div>
                    <div className='sm:w-5/12 md:w-5/12 w-10/12 flex flex-col sm:ml-5 md:ml-5 ml-0  mt-5'>
                        <label htmlFor="phone" className='mb-2'>Your Phone</label>
                        <input type="text" id="phone" className='border border-slate-400 p-2' />
                    </div>
                    <div className='w-full flex flex-col mt-6'>
                        <label htmlFor="desc" className='mb-2'>Your Message</label>
                        <textarea name="desc" id="desc" cols="30" rows="10" className='border border-slate-400 w-5/6'></textarea>
                    </div>
                </div>
                <Button variant="primary" className='p-2 mt-4 bg-slate-400 text-white'>Send Message</Button>{' '}
            </div>
            <div className='sm:w-3/12 md:w-3/12 w-full shadow-2xl sm:p-10 md:p-10 p-8 sm:rounded-[100px] md:rounded-[100px] rounded-lg sm:ml-6 md:ml-6 ml-0 mt-6'>
                <div className='mt-36 mb-10'>
                 <p className='font-bold text-xl'><FontAwesomeIcon icon={faPhoneVolume} className = 'text-xl' /> Call Us Now:</p>
                <a href="tel:9982823786" className='m-4'>+91 9982823786</a><br />
                </div>

                <div className='mt-10 mb-10'>
                    <p className='font-bold text-xl'><FontAwesomeIcon icon={faEnvelope} className = 'text-xl' /> Email:</p>
                    <a href="mailto:test@example.com"> test@example.com</a>
                </div>

                <div className="mt-10 mb-10">
                    <p className='font-bold text-xl'>
                    <FontAwesomeIcon icon={faLocationDot} /> Our Address:
                    </p>
                    <a href="https://maps.app.goo.gl/UMDxnJEJt621Lm2T6" target={'_blank'}><p> 30/05/04 Madhyam Marg, Swarn Path, Mansarovar, Jaipur</p></a>
                </div>

            </div>
        </div>
        <Map />

        </div>
        
        
    )
}

export default Contact;