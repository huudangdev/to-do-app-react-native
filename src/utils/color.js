module.exports = {
  color: (length) => {
    const letters = '0123456789abcdef'
    let color = '#'
    for (let i = 0; i < length; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
}
