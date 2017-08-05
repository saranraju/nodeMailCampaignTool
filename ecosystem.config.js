module.exports = {
  apps: [{
    name: 'nodeMailCampaignTool',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-89-49-145.compute-1.amazonaws.com',
      key: 'saran.pem',
      ref: 'origin/master',
      repo: 'https://github.com/saranraju/nodeMailCampaignTool.git',
      path: '/home/ubuntu/nodeMailCampaignTool',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}