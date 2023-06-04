/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	transpilePackages: ["@uiw/react-codemirror"],
	webpack(config, { isServer }) {
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}
		config.experiments = { ...config.experiments, topLevelAwait: true };
		return config;
	},
};
module.exports = nextConfig;
