function parseQueryString(s) {
  // s = ?name=abc&gender=male
  // return { name: "abc", gender: "male" }
  if (!s) {
    return {};
  }

  if (s[0] === '?') {
    s = s.substring(1);
  }

  const pairs = s.split('&'); // ['my name=abc', 'gender=male']
  const result = {};

  for (let pair of pairs) {
    // const arr = pair.split('=')
    // const name = arr[0]
    // const value = arr[1]
    const [name, value] = pair.split('=');
    result[name] = decodeURIComponent(value);
  }

  return result;
}

function onLoad() {
  const qs = window.location.search;
  const obj = parseQueryString(qs);

  document.getElementById('name').innerText = obj.name;
  document.getElementById('gender').innerText = obj.gender;
}

onLoad();
