const webpack           = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const path              = require('path');
const fs                = require('fs');
const pug_files         = path.resolve(`${__dirname}/src/page`);        //pug 页面模板目录

//捡出css插件
const extractSass       = new ExtractTextPlugin('css/[name].css');
//vue-loader使用的子插件
const vuepostcssPlugin  = new webpack.LoaderOptionsPlugin({ vue: {
        postcss: [ require('postcss-import')(), require('autoprefixer')() ]
    }
});


//配置上下文
let config      = {
    context : path.resolve(__dirname)
};


//配置入口文件
config.entry   = {
    app : "./src/app.js",
};


//配置输出，及路径
config.output = {
    path        : path.resolve(__dirname,'./dist'),
    publicPath  : '/',
    filename    : "js/[name].js"
};


//配置模块,loader
config.module = {
    loaders : [
        {
            test: /\.vue/,
            loader: "vue-loader",
            options: {
                loaders: {
                    // 这里把vue里面的scss代码捡到一个文件下面
                    scss: extractSass.extract({ use: ['css-loader' , 'sass-loader'] })
                }
            }
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
            test: /\.scss$/,
            loader: extractSass.extract({
                use: [
                    'css-loader' ,
                    {
                        loader : 'postcss-loader',
                        options : {
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('autoprefixer')(),
                            ]
                        }
                    },
                    'sass-loader'
                ],
                // use style-loader in development
                // fallback: "style-loader"
            })
        },
    ],
};


//配置webpack-dev-server 热加载
config.devServer = {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true
};


//配置插件列表
config.plugins = [
    new webpack.HotModuleReplacementPlugin(),    // 启用 HMR,也可以cli里面直接加上--hot参数
    extractSass,
    //针对vue的单页文件组件配置单独的postcss loader,而且他妈的必须得写在这个地方。写到loader里面会报错
    vuepostcssPlugin
];


//配置需要输出的html页面
let htmlpage= [
    {filename: 'index.html', template : './src/pug/index.pug', chunks : 'app' },
];


//判断htmlpage是否为真,否则遍历 src/pug下所有pug文件，生成新的htmlpage数组
if(!htmlpage.length){
    const addtopage = (item)=> {
        let new_str = item.split('.');
        htmlpage.push({
            filename: `${new_str[0]}.html`,
            template : `./src/pug/${item}`,
            chunks : null
        })
    };
    let pug_files_array = fs.readdirSync(pug_files);
    pug_files_array.forEach((item)=> {
        /\.pug$/.test(item) && addtopage(item)
    })
}


//遍历添加html输出插件
htmlpage.forEach((item)=>{
    config.plugins.push(
        new htmlWebpackPlugin({
            filename : item.filename,
            template : item.template,
            chunks : item.chunks,
        })
    )
});



module.exports = config;
