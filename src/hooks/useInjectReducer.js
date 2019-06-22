import { useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

export default function useStore({ key, reducer }) {
  const context = useContext(ReactReduxContext);

  useEffect(() => {
    context.store.injectReducer(key, reducer);
  }, []);
}
