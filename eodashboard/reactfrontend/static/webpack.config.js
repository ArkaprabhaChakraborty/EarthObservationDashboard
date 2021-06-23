const path = require("path");
            var webpack = require('webpack');
            var BundleTracker = require('webpack-bundle-tracker');
            const ArcGISPlugin = require("@arcgis/webpack-plugin");
            module.exports = {
                entry:{ app:'./src/index.js'},
                devtool:'source-map',
                output: {
                path: path.resolve(__dirname,'dist'),
                filename: "[name].bundle.js",
                
            },
            plugins: [
                new BundleTracker({filename: './webpack-stats.json'}),
                new ArcGISPlugin({useDefaultAssetLoaders: false}),],
            module: {
            rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use: ['babel-loader'], 
            },
            {
                test: /\.svg$/,
                use: ['react-svg-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            /*{ test: /\.json$/, loader: 'json-loader' },*/
            {
                test: /\.(otf|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader'
                }]
            }
            ]
            },
            resolve: {
                extensions: ['*', '.js', '.jsx','.scss']
            }
            };