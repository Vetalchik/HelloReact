module.exports = {
    entry: './public/app.jsx', // input
    output: {
        path: __dirname, // current directory
        filename: './public/bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader', // потрібен для обробки jsx, так як webpack не вміє
                query: {
                    presets: ['react', 'es2015'], // пропустити файли почергово через react, es2015
                },
                test: /\.jsx?$/, // опрацьовувати тільки ці файли
                exclue: /(node_modules|bower_components)/, // папки, які не потрібно опрацьовувати
            }
        ]
    }
};