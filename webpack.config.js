module.exports = {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        },
        {
          test:/\.png?$/,//(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options:
          {
            name:'src/images/html5.png'  
          },
        }
      ]
    }
  };