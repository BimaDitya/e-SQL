/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	transpilePackages: ["@uiw/react-codemirror"],
	webpack(config) {
		config.experiments = { ...config.experiments, topLevelAwait: true };
		module = {
			rules: [
				{
					test: /\.wasm$/,
					type: "asset/inline",
				},
			],
		};
		return config;
	},
};
module.exports = nextConfig;
