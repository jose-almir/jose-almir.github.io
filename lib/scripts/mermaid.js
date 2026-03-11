const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const CONTENT_DIR = path.join(process.cwd(), "posts");
const OUTPUT_DIR = path.join(process.cwd(), "public/diagrams")

function processFile(filePath) {
  let md = fs.readFileSync(filePath, "utf8")

  const blocks = [...md.matchAll(/```mermaid([\s\S]*?)```/g)]

  blocks.forEach((block, i) => {
    const code = block[1]
    const id = `${path.basename(filePath)}-${i}`

    const mmdFile = `${OUTPUT_DIR}/${id}.mmd`
    const svgFile = `${OUTPUT_DIR}/${id}.svg`

    fs.writeFileSync(mmdFile, code)

    execSync(`npx mmdc -i ${mmdFile} -o ${svgFile} -b transparent -c ${path.join(process.cwd(), "/lib/mermaid-config.json")}`)

    md = md.replace(block[0], `<img src="/diagrams/${id}.svg" />`)

    fs.rmSync(mmdFile, { force: true });
  })

  fs.writeFileSync(filePath, md)
}

fs.readdirSync(CONTENT_DIR).forEach(file => {
  if (file.endsWith(".md")) {
    processFile(path.join(CONTENT_DIR, file))
  }
})