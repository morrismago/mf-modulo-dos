/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
    reactStrictMode:true,
    webpack(config, options) {
        const { isServer } = options;
        config.plugins.push(
          new NextFederationPlugin({
            name: 'mf-modulo-dos',
            remotes: {
            },
            filename: 'static/chunks/remoteEntry.js',
            exposes: {
              './titulo': './src/components/titulo/titulo.js',
            },
          }),
        );
        return config;
      },
};

export default nextConfig;
