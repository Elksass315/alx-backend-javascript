export default function guardrail(mathFunction) {
  const arr = [];

  try {
    arr.push(mathFunction());
    arr.push('Guardrail was processed');
  } catch (ex) {
    arr.push(`Error: ${ex.message}`);
    arr.push('Guardrail was processed');
  }
  return arr;
}
