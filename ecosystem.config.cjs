module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "npm",
      args: "run preview",
      env: {
        NODE_ENV: "production",
        PORT: 4999,
        HOST: '0.0.0.0'
      }
    }
  ]
};
