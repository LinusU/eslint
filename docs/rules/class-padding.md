# Enforce padding between class methods (class-padding)

Some style guides require class methods to have a blank line between them. The
goal is to improve readability by visually separating the methods from each
other.

```js
class T {
  a () {
    // ...
  }

  b () {
    // ...
  }
}
```

Since it's good to have a consistent code style, you should either always write
padding between methods or never do it.

## Rule Details

This rule enforces consistent padding between class methods.

## Options

This rule has a string option:

* `"always"` (default) requires padding between class methods
* `"never"` disallows padding between class methods

### always

Examples of **incorrect** code for this rule with the default `"always"` option:

```js
/*eslint class-padding: ["error", "always"]*/

class T {
  a () {
    // ...
  }
  b () {
    // ...
  }
}

class T {
  a () {
    // ...
  }

  b () {
    // ...
  }
  c () {
    // ...
  }
}

class T {
  a () {
    // ...
  }


  b () {
    // ...
  }
}

class T {
  a () {
    // ...
  }
  // comment
  b () {
    // ...
  }
}
```

Examples of **correct** code for this rule with the default `"always"` option:

```js
/*eslint class-padding: ["error", "always"]*/

class T {
  a () {
    // ...
  }

  b () {
    // ...
  }
}

class T {
  a () {
    // ...
  }

  b () {
    // ...
  }

  c () {
    // ...
  }
}

class T {
  a () {
    // ...
  }

  // comment
  b () {
    // ...
  }
}
```

### never

Examples of **incorrect** code for this rule with the `"never"` option:

```js
/*eslint class-padding: ["error", "never"]*/

class T {
  a () {
    // ...
  }

  b () {
    // ...
  }
}

class T {
  a () {
    // ...
  }
  b () {
    // ...
  }

  c () {
    // ...
  }
}

class T {
  a () {
    // ...
  }


  b () {
    // ...
  }
}
```

Examples of **correct** code for this rule with the `"never"` option:

```js
/*eslint class-padding: ["error", "never"]*/

class T {
  a () {
    // ...
  }
  b () {
    // ...
  }
}

class T {
  a () {
    // ...
  }
  b () {
    // ...
  }
  c () {
    // ...
  }
}

class T {
  a () {
    // ...
  }
  // comment
  b () {
    // ...
  }
}
```

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of padding between class methods.
