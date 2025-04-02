const fs = require("fs")
const path = require("path")

// Path to node_modules
const nodeModulesPath = path.join(__dirname, "node_modules")

// Path to date-fns package.json
const dateFnsPath = path.join(nodeModulesPath, "date-fns", "package.json")

// Check if date-fns exists
if (fs.existsSync(dateFnsPath)) {
  // Read the package.json
  const packageJson = JSON.parse(fs.readFileSync(dateFnsPath, "utf8"))

  // Force version to be 3.x
  packageJson.version = "3.3.1"

  // Write back the modified package.json
  fs.writeFileSync(dateFnsPath, JSON.stringify(packageJson, null, 2))

  console.log("Successfully patched date-fns version to 3.3.1")
}

