module.exports = {
  verbose: true,
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["js", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
};
