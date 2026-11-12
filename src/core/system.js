const { execSync } = require('child_process');

class SystemManager {
  async verifyRoot() {
    try {
      const status = execSync('su -c id').toString();
      if (status.includes('uid=0')) {
        console.log('Root access verified.');
        return true;
      }
    } catch (e) {
      throw new Error('Root access required for Opium OS.');
    }
  }

  applyPerformanceTweaks() {
    const tweaks = ['setprop ro.config.hw_perf_mode true', 'setprop debug.egl.hw false'];
    tweaks.forEach(cmd => execSync(cmd));
  }
}

module.exports = { SystemManager };