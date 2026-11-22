# boxlet.io

The website for Boxlet: WebAssembly containers that run beside your Linux containers.

| Path | What it is |
|---|---|
| `site/index.html` | The home page |
| `site/future-of-containers/index.html` | The whitepaper: "The future of containers isn't containers" |
| `site/style.css`, `site/site.js` | Shared by both pages |

Plain HTML, CSS and a little JavaScript. There is no build step.

## Preview

```sh
python3 -m http.server 4740 --directory site
```

Then open http://127.0.0.1:4740/.

## Where the numbers come from

- Boxlet and container sizes and memory: one small program built as a Python container, a Go container and Rust WebAssembly, measured on 20 November 2026.
- Container and VM start times: [Kiri's published benchmarks](https://docs.runkiri.com/benchmarks/).
- Dates and standards: linked next to each claim on the pages.

## Changes

`main` is protected. Changes go through a pull request, and every commit must be signed.
