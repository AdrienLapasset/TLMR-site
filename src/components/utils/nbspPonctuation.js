export default function nbspPonctuation(inputText) {
  const regex = /\s+([.,;:!?])/g;
  return inputText.replace(regex, "&nbsp;$1");
}
