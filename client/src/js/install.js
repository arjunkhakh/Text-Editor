const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the triggered events
  window.deferredPrompt = event;
  // Remove the hidden class from the button.
  butInstall.classList.toggle('hidden', false);
});

// Installation Button on the app for the user to install onto their software
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }
  
  // Show prompt
  promptEvent.prompt();
    
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
    
  butInstall.classList.toggle('hidden', true);
});

// When the App is installed, it will pop into another window
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
