module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: "airbnb",
  plugins: [
    "react"
  ],
  globals: {
    document: true,
  },
  // add your custom rules here
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'global-require': 0,
  }
};
