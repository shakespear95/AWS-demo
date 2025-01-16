const apiUrl = "https://your-api-gateway-url/analytics"; // Replace with your API Gateway URL

// Function to send analytics data
const sendAnalytics = async (eventData) => {
    try {
        await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(eventData),
        });
        console.log("Event logged:", eventData);
    } catch (error) {
        console.error("Error logging event:", error);
    }
};

// Track Page Load
window.addEventListener("load", () => {
    sendAnalytics({
        event: "page_view",
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
    });
});

// Track Button Click
document.querySelector(".track-click").addEventListener("click", () => {
    sendAnalytics({
        event: "button_click",
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        buttonId: "track-click",
    });
});
