// function a() {
// 	var a = 1
// 	return function() {
// 	 return	a + 1
// 	}
// }
// var b = a()
// b();
class ImportFile{
	//文件集合
	fileMap =  ['theme',{'simple':'https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css'}]
	/**
	 * 引入 js / css 文件
	 * @param {*} url js/css文件路径 
	 * @param {*} cls 指定一个class方便更改
	 * @example: aui.imp('js/aui.picker.js','myjs')
	 * @example: aui.imp(['js/aui.picker.js', 'css/aui.picker.css'],'my_file')
	 */
	imp(url,cls) {
		switch (url.constructor) {
			case Array:
				for (const [index, item] of url.entries()) {
					creat(item,cls);
				}
				break;
			case String:
				creat(url,cls);
				break;
			default:
				break;
		}

		function creat(file,cls) {
			if (/^.+?\.js$/.test(file)) { //JS文件引入 
				var script = document.createElement("script");
				script.setAttribute("type", "text/javascript");
				script.setAttribute("src", file);
				script.setAttribute("class", cls);
				document.querySelector('head').appendChild(script);
			}
			if (/^.+?\.css$/.test(file)) { //CSS文件引入 
				var css = document.createElement('link');
				css.rel = 'stylesheet';
				css.type = 'text/css';
				css.class = cls;
				css.href = file;
				document.querySelector('head').appendChild(css);
			}
		}
	}
}

var importFile = new ImportFile();

/**
 * 初始化，去本地session storage里面拿缓存配置
 */
 window.onload = function(){

}