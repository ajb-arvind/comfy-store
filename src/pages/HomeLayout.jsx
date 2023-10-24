import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

const HomeLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <Navbar />

      <section className="align-element py-20">
        {isLoading ? <Loading /> : <Outlet />}
      </section>
    </>
  );
};
export default HomeLayout;
