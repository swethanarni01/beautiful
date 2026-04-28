const SECTION_ORDER = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

function createSectionShell({ index, name }) {
  const section = document.createElement("section");
  section.className = "section";

  const header = document.createElement("div");
  header.className = "section-header";

  const title = document.createElement("h2");
  title.className = "section-title";
  title.textContent = `${index + 1}. ${name}.txt`;

  const meta = document.createElement("p");
  meta.className = "section-meta";
  meta.textContent = `components/${name}.txt`;

  header.appendChild(title);
  header.appendChild(meta);

  const content = document.createElement("pre");
  content.className = "section-content loading";
  content.textContent = "Loading…";

  section.appendChild(header);
  section.appendChild(content);

  return { section, content };
}

async function loadSectionText(name) {
  const res = await fetch(`./components/${name}.txt`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to load ${name}.txt (HTTP ${res.status})`);
  }
  return await res.text();
}

async function render() {
  const app = document.getElementById("app");
  if (!app) return;

  for (let index = 0; index < SECTION_ORDER.length; index += 1) {
    const name = SECTION_ORDER[index];
    const { section, content } = createSectionShell({ index, name });
    app.appendChild(section);

    try {
      const text = await loadSectionText(name);
      content.classList.remove("loading");
      content.textContent = text.length ? text : "(empty)";
    } catch (err) {
      content.classList.remove("loading");
      content.classList.add("error");
      content.textContent = String(err);
    }
  }
}

render();
