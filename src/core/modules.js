const fs = require('fs');
const path = require('path');

class ModuleLoader {
  constructor() {
    this.modulePath = path.join(__dirname, '../../modules');
  }

  async loadEnabledModules() {
    if (!fs.existsSync(this.modulePath)) return;
    const files = fs.readdirSync(this.modulePath);
    files.forEach(file => {
      console.log(`Loading module: ${file}`);
      require(path.join(this.modulePath, file));
    });
  }
}

module.exports = { ModuleLoader };