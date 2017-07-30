const webpack           = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path              = require('path');
const fs                = require('fs');
const pug_files         = path.resolve(`${__dirname}/src/page`);        //pug 页面模板目录

let config      = {
    context : path.resolve(__dirname)
};

config.entry   = {
    app : "./src/module/feed/app.js",
}
config.output = {
    path        : path.resolve(__dirname,'./dist'),
    publicPath  : './',
    filename    : "js/[name].js"
}

config.module = {
    loaders : [
        {
            test: /\.vue/,
            loader: "vue-loader",
        },
        {
            test: /\.pug$/,
            loader: "pug-loader",
            options: { pretty : true }
        },
        {
            test: /\.jsx?$/,
            loader: "babel-loader" ,
            //exclude: /node-modules/,
            //include: /src/,             //只编译src目录下 提高编译速度，使用正则
            exclude : path.resolve(__dirname,'node_modules'),       //使用一个绝对路径，需要借助  node的path api.生成绝对路径
            include : path.resolve(__dirname,'src'),
            query: {
                presets : ["es2015"]
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        mode: 'global'
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins : (loader) => [
                            require('autoprefixer')(),
                        ]
                    }
                },
            ]
        }
    ],

}

config.plugins = []

//html页面,如果注释htmpage数组项，则自动编译page下所有pug页面(不包含子目录文件)
let htmlpage= [
    {filename: 'index.html', template : './src/page/index.pug', chunks : 'app' },
    {filename: 'about.html', template : './src/page/about.pug', chunks : null }
]

if(!htmlpage.length){
    const addtopage = (item)=> {
        let new_str = item.split('.');
        htmlpage.push({
            filename: `${new_str[0]}.html`,
            template : `./src/page/${item}`,
            chunks : null
        })
    }
    let pug_files_array = fs.readdirSync(pug_files);
    pug_files_array.forEach((item)=> {
        /\.pug$/.test(item) && addtopage(item)
    })
}
htmlpage.forEach((item)=>{
    config.plugins.push(
        new htmlWebpackPlugin({
            filename : item.filename,
            template : item.template,
            chunks : item.chunks,
        })
    );
})



module.exports = config;
