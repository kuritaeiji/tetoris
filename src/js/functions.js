let functions = {
  rand: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default functions;