export const useLocalStorage = () => {
  const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getLocalStorage = (key, defaultValue = null) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };

  return { setLocalStorage, getLocalStorage };
};
