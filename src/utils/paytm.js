export const post = (information) => {
  const form = document.createElement('form');
  form.method = 'post';
  form.action = information.action;

  for (const key in information.params) {
    if (information.params.hasOwnProperty(key)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = information.params[key];
      form.appendChild(input);
    }
  }

  document.body.appendChild(form);
  form.submit();
  form.remove();
};
