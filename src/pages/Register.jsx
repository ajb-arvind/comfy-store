import { Form, Link, redirect } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
 
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';

    toast.error(errorMessage);
    return null;
  }
};

// email: 'qwerty456@test.com';
// password: '123456';
// username: 'coder_js';

const Register = () => {
  return (
    <section className=" h-screen grid  place-items-center">
      <Form
        className=" card p-8 w-96 shadow-lg bg-base-100 flex flex-col gap-y-4"
        method="POST"
      >
        <h4 className=" text-center text-4xl font-bold tracking-wider mb-6">
          Register
        </h4>
        <FormInput label="Username" name="username" type="text" required />
        <FormInput label="Email" name="email" type="email" required />
        <FormInput label="Password" name="password" type="password" required />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>

        <p className=" text-center mt-2">
          Already a member?
          <Link
            to={'/login'}
            className=" ml-2 link link-hover link-secondary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
