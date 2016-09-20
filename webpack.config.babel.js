export default {
     entry : [
          'react-hot-loader/patch',
          './src/index.js',
     ],
     output : {
          filename : 'index.js',
     },
     devtool : 'source-map',
     resolve: {
          extensions: ['', '.js', '.jsx']
     },
     module : {
          loaders : [
               {
                    test : /\.jsx?$/,
                    exclude : /node_modules/,
                    loader : 'babel?presets[]=es2015&presets[]=stage-0&presets[]=react&plugins[]=react-hot-loader/babel'
               }
          ]
     }

}
