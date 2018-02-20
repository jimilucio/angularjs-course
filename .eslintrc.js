module.exports = {
    "env": {
        "browser": true
    },
    "globals": {
        "angular": true,
        "$": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]

    }
};