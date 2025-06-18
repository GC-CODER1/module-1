const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure proper module resolution
config.resolver.sourceExts.push('cjs');

// Handle mixed module types
config.transformer.babelTransformerPath = require.resolve('metro-react-native-babel-transformer');

// Ensure proper asset resolution
config.resolver.assetExts.push('bin');

module.exports = config;