export function saveData(key: string, data: string | Record<string, unknown>) {
  const dataToSave = typeof data === 'string' ? data : JSON.stringify(data);
  window.localStorage.setItem(key, dataToSave);
}

export function loadData(key: string) {
  return window ? window?.localStorage?.getItem(key) ?? '' : '';
}

export function clearData(key: string) {
  window.localStorage.removeItem(key);
}
