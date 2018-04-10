'use strict'

const os = require('os')
const IPFSRepo = require('ipfs-repo')
const path = require('path')

module.exports = (dir, options) => {
  const repoPath = dir || path.join(os.homedir(), '.jsipfs')

  return new IPFSRepo(repoPath, options)
}
