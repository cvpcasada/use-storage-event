import { useEffect, useState } from 'react';

function attemptParseJson(value: string) {
  try {
    return JSON.parse(value);
  } catch (e) {
    // return as-is
    return value;
  }
}

export function useStorageEvent<T>(key: string): T {
  const [value, setValue] = useState(() => {
    const storageItem = window.localStorage.getItem(key);

    return storageItem ? attemptParseJson(storageItem) : storageItem;
  });

  useEffect(() => {
    const handleOnStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setValue(
          event.newValue ? attemptParseJson(event.newValue) : event.newValue
        );
      }
    };

    window.addEventListener('storage', handleOnStorageChange);

    return () => {
      window.removeEventListener('storage', handleOnStorageChange);
    };
  }, [key]);

  return value;
}

export default useStorageEvent;
