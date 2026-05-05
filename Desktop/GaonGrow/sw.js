const CACHE_NAME = 'gaongrow-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/screens/login.html',
  '/screens/dashboard.html',
  '/screens/center_creation.html',
  '/screens/village_list.html',
  '/screens/village_survey.html',
  '/screens/village_survey_form.html',
  '/screens/cgt_meeting.html',
  '/screens/kyc_manual.html',
  '/assets/gaongrow_tractor_logo.png'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Event (Network First, then Cache)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
