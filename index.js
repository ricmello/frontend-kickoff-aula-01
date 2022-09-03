const header = document.querySelector('h1');
header.innerHTML = 'Hello World';
header.dataset.width = 30;
console.log(header);

const div = document.querySelector('div.row');
myScreen().forEach((el) => div.append(el));

function myScreen() {
  const label = myLabel();

  const button = myButton({
    onclick: () => {
      console.log('hello click!');
    },
  });

  return [label, button];
}

function myLabel() {
  return myText({ label: 'Button Label' });
}

function myButton(props) {
  const button = document.createElement('button');
  button.append(myText({ label: 'My Button' }));
  button.onclick = props.onclick;
  return button;
}

function myText({ label }) {
  const labelTag = document.createElement('span');
  labelTag.textContent = label;
  return labelTag;
}
