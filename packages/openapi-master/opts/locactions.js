
const path = require('path');

const OUTDIR = ['..', '.oas']

module.exports = {
  get OAS_DIR() {
    return path.resolve(__dirname, ...OUTDIR);
  },
  get OAS_FILE_JSON() {
    return path.resolve(__dirname, ...OUTDIR, 'spec.json')
  },
};
