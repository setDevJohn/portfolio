module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "npm",
      args: "run preview",
      env: {
        NODE_ENV: "production",
        PORT: 4000,
        HOST: '0.0.0.0'
      }
    }
  ]
};
