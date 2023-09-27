import React, { useState } from 'react';
import Input from './component/Inpnt';
import FileInput from './component/FileInput';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};

    if (!name.trim()) {
      formErrors.name = 'Name is required';
    } else if (name.includes(' ')) {
      formErrors.name = 'Name should not contain spaces';
    }

    if (!email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email should be in email format';
    }

    if (!password.trim()) {
      formErrors.password = 'Password is required';
    } else if (password.length < 8) {
      formErrors.password = 'Password should be at least 8 characters';
    } else if (password.length > 12) {
      formErrors.password = 'Password should not exceed 12 characters';
    }

    if (!confirmPassword.trim()) {
      formErrors.confirmPassword = 'Confirm password is required';
    } else if (confirmPassword !== password) {
      formErrors.confirmPassword = 'Confirm password should match the password';
    }

    if (!image) {
      formErrors.image = 'Upload image is required';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form data:', { name, email, password, confirmPassword, image });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />
      <Input
        label="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      <Input
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={errors.confirmPassword}
      />
      <FileInput label="Upload Image" onChange={(e) => setImage(e.target.files[0])} error={errors.image} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;