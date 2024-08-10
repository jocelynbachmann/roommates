import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Layout';
import { useDispatch } from 'react-redux';
import { getUsersAsync } from './redux/users/thunks';
import { getGroupsAsync } from './redux/groups/thunks';
import { PageLoader } from './components/Auth/PageLoader';

export default function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isTakingTooLong, setIsTakingTooLong] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await dispatch(getGroupsAsync()).unwrap();
        await dispatch(getUsersAsync()).unwrap();
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch initial data', error);
      }
    };

    fetchInitialData();

    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsTakingTooLong(true);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [dispatch, isLoading]);

  if (isLoading) {
    return <PageLoader isTakingTooLong={isTakingTooLong} />;
  }

  return <Layout />;
}

