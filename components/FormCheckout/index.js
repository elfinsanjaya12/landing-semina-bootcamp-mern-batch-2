/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { useRouter } from 'next/router';
import { getData, postData } from '../../utils/fetchData';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export default function FormCheckout({ tickets }) {
  const router = useRouter();
  const { ticketId, organizer } = router.query;

  const [form, setForm] = useState({
    email: '',
    lastName: '',
    firstName: '',
    role: '',
    payment: '',
    event: router.query.id,
  });

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetctData = async () => {
      try {
        const res = await getData(
          `api/v1/payments/${organizer}`,
          {},
          Cookies.get('token')
        );
        res.data.forEach((res) => {
          res.isChecked = false;
        });
        setPayments(res.data);
      } catch (err) {}
    };

    fetctData();
  }, []);

  useEffect(() => {
    let paymentId = '';
    payments.filter((payment) => {
      if (payment.isChecked) {
        paymentId = payment._id;
      }
    });
    setForm({
      ...form,
      payment: paymentId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payments]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const _temp = [];
      tickets.forEach((t) => {
        if (t._id === ticketId) {
          _temp.push({
            ticketCategories: {
              type: t.type,
              price: t.price,
            },
            sumTicket: 1,
          });
        }
      });
      let payload = {
        event: form.event,
        tickets: _temp,
        payment: form.payment,
        personalDetail: {
          lastName: form.lastName,
          firstName: form.firstName,
          email: form.email,
          role: form.role,
        },
      };
      const res = await postData(
        'api/v1/checkout',
        payload,
        Cookies.get('token')
      );

      if (res.data) {
        toast.success('berhasil checkout', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push('/dashboard');
      }
    } catch (err) {}
  };

  const handleChangePayment = (e, i) => {
    const _temp = [...payments];

    _temp[i].isChecked = e.target.checked;

    _temp.forEach((t) => {
      if (t._id !== e.target.value) {
        t.isChecked = false;
      }
    });

    setPayments(_temp);
  };

  return (
    <form action='' className='container form-semina'>
      <div className='personal-details'>
        <div className='row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-lg-center'>
          <div className='form-title col-lg-8'>
            <span>01</span>
            <div>Personal Details</div>
          </div>
        </div>
        <div className='row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center'>
          <div className='mb-4 col-lg-4'>
            <label htmlFor='first_name' className='form-label'>
              First Name
            </label>
            <input
              type='text'
              placeholder='First name here'
              className='form-control'
              id='first_name'
              name='firstName'
              value={form.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='mb-4 col-lg-4'>
            <label htmlFor='last_name' className='form-label'>
              Last Name
            </label>
            <input
              type='text'
              placeholder='Last name here'
              className='form-control'
              name='lastName'
              id='last_name'
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='row row-cols-lg-8 row-cols-md-2 row-cols-12 justify-content-center'>
          <div className='mb-4 col-lg-4'>
            <label htmlFor='email_address' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='email_address'
              placeholder='semina@bwa.com'
              name='email'
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className='mb-4 col-lg-4'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Role
            </label>
            <input
              type='text'
              className='form-control'
              id='role'
              placeholder='Product Designer'
              name='role'
              value={form.role}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className='payment-method mt-4'>
        <div className='row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-lg-center'>
          <div className='form-title col-lg-8'>
            <span>02</span>
            <div>Payment Method</div>
          </div>
        </div>
        <div className='row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center gy-4 gy-md-0'>
          {payments.map((payment, i) => (
            <div className='col-lg-4' key={payment._id}>
              <label className='payment-radio h-100 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-4'>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${payment.imageUrl}`}
                    alt=''
                  />
                  <div>{payment.type}</div>
                </div>
                <input
                  type='radio'
                  checked={payment.isChecked}
                  name='isChecked'
                  value={payment._id}
                  onChange={(e) => handleChangePayment(e, i)}
                />
                <span className='checkmark'></span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className='d-flex flex-column align-items-center footer-payment gap-4'>
        <Button variant='btn-green' action={() => handleSubmit()}>
          Pay Now
        </Button>
        <div>
          <img src='/icons/ic-secure.svg' alt='' />
          <span>Your payment is secure and encrypted</span>
        </div>
      </div>
    </form>
  );
}
