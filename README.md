# Humanize React

> Comma delimit an array of React components for human readability with an Oxford comma, because we are not barbarians.

## Usage

```bash
npm install humanize-react
```

```js
import humanize from "humanize-list";

humanize([<>Homer <strong>Simpson</strong></>, <><strong>Marge</strong> Simpson</>]) // => Homer Simpson and Marge Simpson (with formatting)
humanize(["apples", "tomatoes", "unicorns"]) // => "apples, tomatoes, and unicorns"
humanize(["apples", "tomatoes", "unicorns"], { conjunction: "or" }) // => "apples, tomatoes or unicorns"
humanize(["apples", "tomatoes", "unicorns"], { oxfordComma: false }) // => "apples, tomatoes and unicorns"
```

### Options

- `oxfordComma` Boolean - Specify whether the Oxford comma should be included. Default: `true`
- `conjunction` String - Specify a conjunction. Default: `and`

## Running Locally

```
npm install
npm run lint
npm run compile
```
