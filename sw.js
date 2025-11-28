const CACHE_NAME = 'student-answer-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => { /* offline fallback หรือ cache เพิ่มเองได้ */ });
