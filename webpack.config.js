module.exports = {
  entry: './client/index.jsx',
  output: {
    path: '/Users/fabianyee/Desktop/Sorting Visualizer/public',
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
