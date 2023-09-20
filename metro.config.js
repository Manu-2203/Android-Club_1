const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * @type {import('metro-config').MetroConfig} //MetroConfiguration
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
