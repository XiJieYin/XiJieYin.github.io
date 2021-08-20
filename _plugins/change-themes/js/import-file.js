// function a() {
// 	var a = 1
// 	return function() {
// 	 return	a + 1
// 	}
// }
// var b = a()
// b();
class ImportFile {
  //文件集合
  fileMap = {
    themes: {
      simple:
        "https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css",
      "simple-dark":
        "https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css",
    },
  };
  /**
   * 引入 js / css 文件
   * @param {*} url js/css文件路径
   * @param {*} id 指定一个 id 方便更改
   * @example: aui.imp('js/aui.picker.js','myjs')
   * @example: aui.imp(['js/aui.picker.js', 'css/aui.picker.css'],'my_file')
   */
  imp(url, id) {
    switch (url.constructor) {
      case Array:
        for (const [index, item] of url.entries()) {
          this.creat(item, id + "-" + index);
        }
        break;
      case String:
        this.creat(url, id);
        break;
      default:
        break;
    }
  }

  /**
   * 创建文件
   * @param {*} file 文件路径
   * @param {*} id id名
   */
  creat(file, id) {
    this.clear(id);

    if (/^.+?\.js$/.test(file)) {
      //JS文件引入
      var script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", file);
      script.setAttribute("class", id);
      document.querySelector("head").appendChild(script);
    }
    if (/^.+?\.css$/.test(file)) {
      //CSS文件引入
      var css = document.createElement("link");
      css.rel = "stylesheet";
      css.type = "text/css";
      css.id = id;
      css.href = file;
      document.querySelector("head").appendChild(css);
    }
  }
  /**
   * 消除之前的
   * @param {*} id 类名
   */
  clear(id) {
    // var exists = document.getElementsByClassName(id);
    // if (exists.length > 0) {
    //   for (var item in exists) {
    //     document.querySelector("head").removeChild(item);
    //   }
    // }
    let exist = document.getElementById(id);
    if(exist){
      exist.remove();
    }
  }

  /**
   * 切换主题
   * @param {*} name 主题名
   */
  changeTheme(name) {
    var url = this.fileMap.themes[name];
    if(url){
      // this.clear("cover");
      // this.iniCover();
      // this.coverShow();

      this.imp(url, "themes");
      //存本地，下次再打开直接加载本地的主题
      localStorage.setItem("themes",name);

      // this.coverHide();
    }
  }

  /**
   * 初始化
   */
  ini() {
    this.iniThemes();
  }

  /**
   * 加个遮盖层
   */
  iniCover(){
    let $root = document.getElementsByTagName('html')[0];
    let $cover = document.createElement('div');
    $cover.style['height'] = '100vh';
    $cover.style['width'] = '100vw';
    $cover.style['position'] = 'fixed';
    $cover.style['z-index'] = '99999999';
    $cover.style['background-color'] = 'rgb(255,255,255,1)';
    $cover.id = "cover";
    $root.prepend($cover);
  }

  coverShow(){
    document.getElementById('cover').style['background-color'] = 'rgb(255,255,255,1)';
    document.getElementById('cover').style['display'] = '';
  }

  coverHide(){
    let rate = 1;
    let speed=200;
    
    setInterval(() => {
      rate -= 0.1;
      document.getElementById('cover').style['background-color'] = 'rgb(255,255,255,'+rate+')';
    }, speed);

    setTimeout(() => {
      document.getElementById('cover').style['display'] = 'none';
    }, (speed*10));
  }

  /**
   * 初始化主题
   * @param {*} themes 主题合集
   * @example {simple:"https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css","simple-dark":"https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css",}
   */
  iniThemes(themes) {
    if (themes) {
      this.fileMap.themes = themes;
    }
    themes = this.fileMap.themes;
    let $changeThemes = document.createElement("li");
    $changeThemes.id = "change-themes";
    $changeThemes.innerHTML = "<a>切换主题</a>";
    let $ul = document.createElement("ul");
    let $lis = "";
    for (let key in themes) {
      $lis +=
        "<li><a onclick=\"importFile.changeTheme('" +
        key +
        "')\">" +
        key +
        "</a></li>";
    }
    $ul.innerHTML = $lis;
    $changeThemes.appendChild($ul);
    let $appNav = document.getElementsByClassName("app-nav");
    if ($appNav.length > 0) {
      if ($appNav[0].hasChildNodes()) {
        this.clear("change-themes");
        $appNav[0].childNodes[0].appendChild($changeThemes);
      }
    }

    let name = localStorage.getItem("themes");
    if(name){
      importFile.changeTheme(name);
    }
  }
}
      
var importFile = new ImportFile();
/**
 * 初始化，去本地session storage里面拿缓存配置
 */
window.onload = function () {           
  importFile.ini(); 
};
/**
 * 当url发生改变时，说明切换了页，这里需要重新加载菜单，所以，需要重新往里面 append 切换主题的菜单
 */
window.onhashchange = function () {
  setTimeout(() => {            
    importFile.iniThemes();
  }, 200);
};