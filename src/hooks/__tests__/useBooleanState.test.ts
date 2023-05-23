import { renderHook, act } from '@testing-library/react-hooks';

import { useBooleanState } from '../useBooleanState';

describe('useBooleanState', () => {
  it('returns tuple with state and handlers', async () => {
    const { result } = renderHook(() => useBooleanState());

    const [state, toggle, setTrue, setFalse] = result.current;
    expect(state).toBe(false);
    expect(toggle).toBeInstanceOf(Function);
    expect(setTrue).toBeInstanceOf(Function);
    expect(setFalse).toBeInstanceOf(Function);
  });

  it('toggles value', async () => {
    const { result } = renderHook(() => useBooleanState());

    const [, toggle] = result.current;
    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(true);
  });

  it('sets true', async () => {
    const { result } = renderHook(() => useBooleanState());

    const [, , setTrue] = result.current;
    act(() => {
      setTrue();
    });

    expect(result.current[0]).toBe(true);
  });

  it('initializes with given value and sets false', async () => {
    const { result } = renderHook(() => useBooleanState(true));

    expect(result.current[0]).toBe(true);

    const [, , , setFalse] = result.current;
    act(() => {
      setFalse();
    });

    expect(result.current[0]).toBe(false);
  });
});
