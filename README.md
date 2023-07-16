# Difference-calculator

[![linter-status](https://github.com/anastaska12/Difference-calculator/actions/workflows/linter-check.yml/badge.svg)](https://github.com/anastaska12/Difference-calculator/actions/workflows/linter-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/ad293a7c785e07833100/maintainability)](https://codeclimate.com/github/anastaska12/Difference-calculator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ad293a7c785e07833100/test_coverage)](https://codeclimate.com/github/anastaska12/Difference-calculator/test_coverage)

<h2>Install</h2>
1. Clone repository:

```
https://github.com/anastaska12/Difference-calculator.git
```

2. Install dependencies:
```
make install
```

<h2>Usage example:</h2>

- Help

```
node gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Arguments:
  filepath1            path to file1
  filepath2            path to file2

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           display help for command
  ```

  - Plain format
 
  ```
node gendiff --format plain ../__fixtures__/filepath1.yml ../__fixtures__/filepath2.yaml
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
```

- Stylish format

```
node gendiff ../__fixtures__/filepath1.json ../__fixtures__/filepath2.json
common: {
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: null
  + setting4: blah blah
  + setting5: {
      key5: value5
    }
  }

```

<h2>Demonstration</h2>

<h3>Stylish</h3>
<a href="https://asciinema.org/a/cB9PvY6MBm504DC5zydP0VUcR" target="_blank"><img src="https://asciinema.org/a/cB9PvY6MBm504DC5zydP0VUcR.svg" /></a>

<h3>Plain</h3>
<a href="https://asciinema.org/a/speJsqCDmlGHcwkXvpElRGWrv" target="_blank"><img src="https://asciinema.org/a/speJsqCDmlGHcwkXvpElRGWrv.svg" /></a>

<h3>JSON</h3>
<a href="https://asciinema.org/a/iVYV2cZ0DMGSqIZGogVLqzJxf" target="_blank"><img src="https://asciinema.org/a/iVYV2cZ0DMGSqIZGogVLqzJxf.svg" /></a>