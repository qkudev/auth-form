import { useState, useCallback } from 'react';

/**
 * Boolean state with state and predefined methods tuple: `state`, `toggle`, `setTrue` and `setFalse`
 * @param {boolean} initialState initial state
 * @default false
 */
export const useBooleanState = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const setTrue = useCallback(() => {
    setState(true);
  }, [setState]);
  const setFalse = useCallback(() => {
    setState(false);
  }, [setState]);
  const toggle = useCallback(() => {
    setState((curr) => !curr);
  }, [setState]);

  return [state, toggle, setTrue, setFalse] as const;
};
