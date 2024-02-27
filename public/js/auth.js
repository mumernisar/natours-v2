import axios from 'axios';
import { showAlert } from './alerts';
import emailjs from '@emailjs/browser'

export const login = async (email, password) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (response.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (response.data.status === 'success') {
      showAlert('success', 'Account created successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
      console.log(data)
      emailjs.send("service_mt41ue5","template_537ngt9",{
        first_name: name,
        reply_to: "umernisar3854@gmail.com",
        to_mail: email,
        }, 'kPtOLxwW6GAwy5lJ-').then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);

          }
        );
  
  
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};

export const logout = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    // if (response.data.status === 'success') location.reload(true);
    if (response.data.status === 'success') location.assign('/login');
  } catch (error) {
    showAlert('error', 'Error logging out! Try again.');
  }
};
