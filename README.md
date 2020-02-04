# use-storage-event

Listens to dom 'storage' event, see [MDN storage event docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)

API (usage)

```js
import useStorageEvent from 'use-storage-event';

const App = () => {
  const storageValue = useStorageEvent('storage-key');

  return <p>{storageValue}</p>;
};
```
