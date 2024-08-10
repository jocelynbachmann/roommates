import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAsync } from './redux/users/thunks';
import { getGroupsAsync } from './redux/groups/thunks';
import { REQUEST_STATE } from './redux/utils';
import { PageLoader } from './components/Auth/PageLoader';

export default function App() {
  const dispatch = useDispatch();
  const groupsStatus = useSelector(state => state.groups.getGroups);
  const [isTakingTooLong, setIsTakingTooLong] = useState(false);

  useEffect(() => {
    dispatch(getGroupsAsync());
    dispatch(getUsersAsync());

    const timeout = setTimeout(() => {
      setIsTakingTooLong(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  if (groupsStatus === REQUEST_STATE.IDLE || groupsStatus === REQUEST_STATE.PENDING) {
    return <PageLoader isTakingTooLong={isTakingTooLong} />;
  } 

  return (
    <Layout />
  );
}
