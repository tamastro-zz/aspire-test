const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'SGD',
  minimumFractionDigits: 2
})

export default formatter;
