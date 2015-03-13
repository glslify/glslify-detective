var tokenize = require('glsl-tokenizer/string')
var uniq     = require('uniq')

module.exports = detective

function detective(tokens) {
  if (typeof tokens === 'string') tokens = tokenize(tokens)

  var imports = []

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]
    if (token.type !== 'preprocessor') continue
    var imported = glslifyImport(token.data)
    if (!imported) continue
    if (!imported[2]) continue

    var path = imported[2]
      .split(',')
      .shift()
      .trim()

    if (path) imports.push(path)
  }

  return uniq(imports)
}

function glslifyImport(data) {
  return /#pragma glslify:\s*([^=\s]+)\s*=\s*require\(([^\)]+)\)/.exec(data)
}
