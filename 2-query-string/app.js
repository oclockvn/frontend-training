function handleSubmit() {
  const name = document.getElementById('name').value;
  const gender = document.getElementById('male').checked ? 'male' : 'female';

  console.log({ name, gender });

  // navigate to result page
  window.location.href = `result.html?name=${name}&gender=${gender}`;
}

document.getElementById('submit')?.addEventListener('click', handleSubmit);
