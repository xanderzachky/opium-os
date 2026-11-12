const { SystemManager } = require('./core/system');
const { ModuleLoader } = require('./core/modules');

class OpiumOS {
  constructor() {
    this.system = new SystemManager();
    this.loader = new ModuleLoader();
  }

  async init() {
    console.log('Initializing Opium OS Engine...');
    await this.system.verifyRoot();
    await this.loader.loadEnabledModules();
    console.log('Opium OS is ready for battle.');
  }
}

const os = new OpiumOS();
os.init();