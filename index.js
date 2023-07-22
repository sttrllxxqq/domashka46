const axios = require('axios');

async function fetchJsonFile(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${url}: ${error.message}`);
    return null;
  }
}

async function mergeAndPrintChildren() {
  const urls = ['data.json', 'data2.json'];
  let combinedChildren = [];

  for (const url of urls) {
    const data = await fetchJsonFile(url);
    if (data && data.children && Array.isArray(data.children)) {
      combinedChildren = combinedChildren.concat(data.children);
    }
  }

  console.log(combinedChildren);
}

mergeAndPrintChildren();
