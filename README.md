# glslify-detective

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Find all require calls within a [glslify](http://github.com/stackgl/glslify)
file – much like [detective](http://github.com/substack/detective) does for
[browserify](http://github.com/substack/node-browserify).

## Usage

[![NPM](https://nodei.co/npm/glslify-detective.png)](https://nodei.co/npm/glslify-detective/)

### `detective(source)`

Given a GLSL string `source`, return an array of the dependencies required
within the file. For example, the following source:

``` glsl
#pragma glslify: fog = require(glsl-fog/exp2)
#pragma glslify: smin = require(glsl-smooth-min)
```

Would yield the following array:

``` javascript
['glsl-fog/exp2', 'glsl-smooth-min']
```

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing) for details.

## License

MIT. See [LICENSE.md](http://github.com/stackgl/glslify-detective/blob/master/LICENSE.md) for details.
