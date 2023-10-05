const apiKey = process.env.TOGGL_API_KEY;
const baseUrl = "https://api.track.toggl.com/api/v9";


const description = "Research Work"

const getLoggedHours = async () => {
  try {
    const response = await fetch(`${baseUrl}/me/time_entries`, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${btoa(`${apiKey}:api_token`)}`,
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
        const responseBody = await response.text(); // Read response body as text
        throw new Error(`Unable to fetch data from Toggl: Status ${response.status}, Body: ${responseBody}`);
    }

    console.log("Response OK!")

    const data = await response.json();

    // Filter data to find hours for a specific activity ("doing work")
    const doingWorkEntries = data.filter(
      (entry) => entry.description === description
    );

    // Calculate total logged hours
    const totalHours = doingWorkEntries.reduce(
      (total, entry) => total + entry.duration / 3600, // Convert seconds to hours
      0
    );

    console.log(`Total Hours: ${totalHours}`)
    return totalHours;
  } catch (error) {
    throw error;
  }
};

getLoggedHours()
  .then((totalHours) => {
    console.log('Total logged hours:', totalHours);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
