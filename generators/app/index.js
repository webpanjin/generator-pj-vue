const Generator = require('yeoman-generator')
module.exports = class extends Generator{
	prompting(){
  	return this.prompt([
    	{
    		type:'input',
    		name:'name',
    		message:'Your project name',
    		default:this.appname
  		}
  	]).then(answers=>{
         this.answers = answers
     	})
  }
  writing(){//在此之前将项目结构拷贝到templates目录作为模板
  	//把每一个文件都通过模板转换到目标路径
    const templates = [
    	'yarn.lock',
        'README.md',
        'package.json',
        'index.html',
        '.postcssrc.js',
        '.gitignore',
        '.editorconfig',
        '.babelrc',
        'static/.gitkeep',
        'config/dev.env.js',
        'config/index.js',
        'config/prod.env.js',
        'config/test.env.js',
        'build/build.js',
        'build/check-versions.js',
        'build/logo.png',
        'build/utils.js',
        'build/vue-loader.conf.js',
        'build/webpack.base.conf.js',
        'build/webpack.dev.conf.js',
        'build/webpack.prod.conf.js',
        'src/assets/logo.png',
        'src/components/HelloWorld.vue',
        'src/router/index.js',
        'src/App.vue',
        'src/main.js',
    ]
    templates.forEach(item=>{
      this.fs.copyTpl(
      	this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}