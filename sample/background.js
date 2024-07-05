// background.js
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'downloadPDF') {
      try {
        const response = await fetch('https://example.com/api/generate-pdf', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(request.data)
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
  
        chrome.downloads.download({
          url: url,
          filename: 'downloaded.pdf'
        }, () => {
          URL.revokeObjectURL(url); // Clean up the URL object
        });
  
        sendResponse({ success: true });
      } catch (error) {
        console.error('Failed to download PDF:', error);
        sendResponse({ success: false, error: error.message });
      }
      return true; // Keeps the message channel open for sendResponse
    }
  });