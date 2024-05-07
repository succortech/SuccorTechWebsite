<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Embedded RSS Feed</title>
</head>
<body>

<!-- Embedded RSS Feed Container -->
<div id="rss-feed-container"></div>

<!-- JavaScript to Fetch and Display the RSS Feed -->
<script>
  // Replace 'YOUR_RSS_FEED_URL' with the actual URL of your RSS feed
  const rssFeedUrl = 'YOUR_RSS_FEED_URL';

  // Function to fetch and display the RSS feed
  function fetchAndDisplayRSSFeed() {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}`)
      .then(response => response.json())
      .then(data => {
        const feedContainer = document.getElementById('rss-feed-container');

        // Check if the data has items
        if (data.items) {
          // Create an unordered list to display feed items
          const itemList = document.createElement('ul');

          // Loop through each item in the feed
          data.items.forEach(item => {
            // Create list item for each feed item
            const listItem = document.createElement('li');

            // Create a link for the feed item
            const itemLink = document.createElement('a');
            itemLink.href = item.link;
            itemLink.textContent = item.title;

            // Append the link to the list item
            listItem.appendChild(itemLink);

            // Append the list item to the list
            itemList.appendChild(listItem);
          });

          // Append the list to the feed container
          feedContainer.appendChild(itemList);
        }
      })
      .catch(error => console.error('Error fetching RSS feed:', error));
  }

  // Call the function to fetch and display the RSS feed
  fetchAndDisplayRSSFeed();
</script>

</body>
</html>
