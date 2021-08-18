const fetchWikiData = async (query) => {
  const response = await window.fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(query)}`)
  const data = await response.json();

  if (!response.ok) {
    return Promise.reject(data)
  }

  return data;
}
// const fetchWikiData = (query) => {
//   return window.fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(query)}`)
//   .then(async response => {
//     const data = await response.json()
//     if (response.ok) {
//       return data
//     } else {
//       return Promise.reject(data)
//     }
//   })
// }

export default fetchWikiData