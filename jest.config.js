export default {
  testEnvironment: "node",
  transform: {}, // no transpilation needed
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
};
