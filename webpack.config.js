const path = require('path'); 

module.exports = { 
  entry: path.join(__dirname,  'client/src/index.jsx'), 
  output: { 
    filename: 'bundle.js', 
    path: path.join(__dirname, 'public'), 
  }, 
  module: { 
    rules: [ 
      { 
        test: /\.jsx$/, 
        exclude: /node_modules/, 
        use: { 
          loader: 'babel-loader', 
          options: { 
            presets: [ 
              '@babel/preset-env', 
              '@babel/preset-react', 
            ]
          }
        }
      }, 
      { 
        test: /\.css$/, 
        use: [{ 
          loader: 'style-loader'
        }, { 
          loader: 'css-loader', 
          options: { 
            modules: true, 
          }
        }]
      },
    ]
  }
}