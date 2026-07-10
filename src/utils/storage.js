// src/utils/storage.js
// Async IndexedDB storage layer using idb-keyval.
// Automatically migrates existing localStorage data on first use.

import { get, set } from "idb-keyval";

const KEYS = {
  progress: "modernDsaProgress",
  notes: "modernDsaNotes",
  dates: "modernDsaDates",
};

/**
 * Load a value from IndexedDB. On first run, migrates any existing
 * localStorage data into IndexedDB and removes the localStorage copy.
 */
async function load(key) {
  // Try IndexedDB first
  let value = await get(key);
  if (value !== undefined) return value;

  // Fall back to localStorage (one-time migration)
  const raw = localStorage.getItem(key);
  if (raw) {
    try {
      value = JSON.parse(raw);
      await set(key, value); // persist into IndexedDB
      localStorage.removeItem(key); // clean up old copy
      return value;
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Save a value to IndexedDB.
 */
async function save(key, value) {
  await set(key, value);
}

export { KEYS, load, save };
