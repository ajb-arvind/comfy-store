import { Form, Link, useNavigate } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { loginUser } from '../features/user/userSlice';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post('/auth/local', data);
      store.dispatch(loginUser(response.data));
      toast.success('logged in successfully');
      return redirect('/');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';

      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      toast.error('guest user login error.please try later.');
    }
  };

  return (
    <section className=" h-screen grid  place-items-center">
      <Form
        className=" card p-8 w-96 shadow-lg bg-base-100 flex flex-col gap-y-4"
        method="POST"
      >
        <h4 className=" text-center text-4xl font-bold tracking-wider mb-6">
          Login
        </h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          // defaultValue="qwerty456@test.com"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          // defaultValue="123456"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          Guest User
        </button>
        <p className=" text-center mt-2">
          Not a member yet?
          <Link
            to={'/register'}
            className=" ml-2 link link-hover link-secondary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
