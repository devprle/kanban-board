module.exports = {
    // Other configurations...
    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest",
        "^.+\\.js$": "babel-jest",
    },
    // If you're using jest.config.js, you might also need to set up moduleFileExtensions
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};