const dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}
export const toRna = (dna) => {
  return dna.split('').map(char => dnaToRna[char]).join('');
};
