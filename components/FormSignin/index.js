import React, { useState } from 'react';
import Button from '../Button';
import TextInput from '../TextInput';
import { useRouter } from 'next/router';
import { postData } from '../../utils/fetchData';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export default function FormSignin() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await postData('/api/v1/auth/signin', form);

    toast.success('berhasil signin', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    Cookies.set('token', res.data.token);
    router.push('/');
  };

  return (
    <form className='form-login d-flex flex-column mt-4 mt-md-0 p-30'>
      <TextInput
        label={'Email'}
        type={'email'}
        name='email'
        value={form.email}
        placeholder={'semina@bwa.com'}
        onChange={handleChange}
      />

      <TextInput
        label={'Password (6 characters)'}
        type={'password'}
        name='password'
        value={form.password}
        placeholder='Type your password'
        onChange={handleChange}
      />

      <div className='d-grid mt-2 gap-4'>
        <Button variant={'btn-green'} action={() => handleSubmit()}>
          Sign In
        </Button>

        <Button action={() => router.push('/signup')} variant='btn-navy'>
          Create New Account
        </Button>
      </div>
    </form>
  );
}
