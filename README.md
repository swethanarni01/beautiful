# Demo3

This is a minimal static website that renders the text files in `components/` in order (`one.txt` → `ten.txt`).

## Run locally

From the project root:

```bash
python3 -m http.server 8000
```

Then open:

- http://localhost:8000

> Note: Opening `index.html` directly as a `file://` URL may block `fetch()` in some browsers. Serving via a local web server avoids that.
