export const saveItem = (key: string, item: Object) => {
  const itemString = JSON.stringify(item);
  localStorage.setItem(key, itemString);
};

export const getItem = (key: string) => {
  // get item from local storage
  const item: string | null = localStorage.getItem(key);

  let itemObject;
  if (item) {
    // if there is an item let's parse it so we can have it ready ;)
    itemObject = JSON.parse(item);
  }

  return itemObject;
};
