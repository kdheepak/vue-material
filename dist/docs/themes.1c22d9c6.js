webpackJsonp([2],{834:function(t,e,a){function n(t){a(902)}var i=a(1)(null,a(938),n,"data-v-3885c6b0",null);t.exports=i.exports},835:function(t,e,a){function n(t){a(890)}var i=a(1)(null,a(923),n,"data-v-06009b1b",null);t.exports=i.exports},857:function(t,e,a){e=t.exports=a(795)(),e.push([t.i,"section[data-v-06009b1b]{max-width:960px}section+section[data-v-06009b1b]{margin-top:56px}.app-example .page-layout[data-v-06009b1b]{display:-ms-flexbox;display:flex}.app-example .column[data-v-06009b1b]{-ms-flex:1;flex:1;background-color:rgba(0,0,0,.06)}.app-example .column+.column[data-v-06009b1b]{margin-left:16px}.app-example .md-list[data-v-06009b1b]{background:none}.app-example .md-subheading[data-v-06009b1b]{padding:16px;display:block}.app-example .item-text[data-v-06009b1b]{-ms-flex:1;flex:1}.app-example .md-checkbox[data-v-06009b1b]{margin-right:16px}.app-example .md-button[data-v-06009b1b]{margin-left:16px}.card-layout[data-v-06009b1b]{margin:16px 15%;display:-ms-flexbox;display:flex}.card-layout .column[data-v-06009b1b]{-ms-flex:1;flex:1}.card-layout .column+.column[data-v-06009b1b]{margin-left:8px}.card-layout .md-card+.md-card[data-v-06009b1b]{margin-top:8px}",""])},869:function(t,e,a){e=t.exports=a(795)(),e.push([t.i,"section[data-v-3885c6b0]{max-width:960px}section+section[data-v-3885c6b0]{margin-top:56px}iframe[data-v-3885c6b0]{height:550px}",""])},890:function(t,e,a){var n=a(857);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(796)("73ba7982",n,!0)},902:function(t,e,a){var n=a(869);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(796)("8bc096d6",n,!0)},923:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{"page-title":"Themes - Dynamic Themes"}},[a("docs-component",[a("div",{slot:"description"},[a("p",[t._v("Vue Material have a complete theme suite. You can create several themes and apply them on-demand. Like on this documentation website you can set a different theme per-page using the API. But you can have an advanced way to change themes using dynamic themes.")]),t._v(" "),a("p",[t._v("You can apply a theme only in a single area of your application using the "),a("code",[t._v("<md-theme>")]),t._v(". If the theme component has only one child element then the theme definition will be attached to this particular element. In other cases the component will wrap all of its children in a "),a("code",[t._v("<div>")]),t._v(" tag (or you can customize the output tag).")]),t._v(" "),a("p",[t._v("Also every single component in Vue Material suite has a "),a("code",[t._v("md-theme")]),t._v(" attribute to set its theme.")]),t._v(" "),a("p",[t._v("All the components will inherit all theme properties from its parents. If the direct parent doesn't have a theme definition the theme will be resolved by its closest parent or the current theme of the entire application.")])]),t._v(" "),a("div",{slot:"api"},[a("api-table",{attrs:{name:"md-theme"}},[a("md-table",{slot:"properties"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[t._v("Name")]),t._v(" "),a("md-table-head",[t._v("Type")]),t._v(" "),a("md-table-head",[t._v("Description")])],1)],1),t._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[t._v("md-name")]),t._v(" "),a("md-table-cell",[a("code",[t._v("String")])]),t._v(" "),a("md-table-cell",[t._v("The name of the theme to be applied.")])],1),t._v(" "),a("md-table-row",[a("md-table-cell",[t._v("md-tag")]),t._v(" "),a("md-table-cell",[a("code",[t._v("String")])]),t._v(" "),a("md-table-cell",[t._v("The tag to be applied to wrap all it's children elements.")])],1)],1)],1)],1)],1),t._v(" "),a("div",{slot:"example"},[a("example-box",{attrs:{"card-title":"Component"}},[a("div",{slot:"demo"},[a("div",{staticClass:"app-example"},[a("md-whiteframe",{attrs:{"md-tag":"md-toolbar","md-elevation":"1"}},[a("span",{staticClass:"md-title"},[t._v("Life Organizer 2.0")])]),t._v(" "),a("div",{staticClass:"page-layout"},[a("md-theme",{attrs:{"md-name":"indigo"}},[a("div",{staticClass:"column"},[a("strong",{staticClass:"md-subheading"},[t._v("Shopping list")]),t._v(" "),a("md-list",[a("md-list-item",[a("md-checkbox",{staticClass:"md-primary md-list-action"}),t._v(" "),a("span",{staticClass:"item-text"},[t._v("French bread")])],1),t._v(" "),a("md-list-item",[a("md-checkbox",{staticClass:"md-primary md-list-action",attrs:{value:!0}}),t._v(" "),a("span",{staticClass:"item-text"},[t._v("Brazilian Cheese Bread")])],1),t._v(" "),a("md-list-item",[a("md-checkbox",{staticClass:"md-primary md-list-action"}),t._v(" "),a("span",{staticClass:"item-text"},[t._v("Italian Bread")])],1)],1)],1)]),t._v(" "),a("md-theme",{attrs:{"md-name":"green"}},[a("div",{staticClass:"column"},[a("strong",{staticClass:"md-subheading"},[t._v("Todo List")]),t._v(" "),a("md-list",[a("md-list-item",[a("md-checkbox",{staticClass:"md-primary md-list-action"}),t._v(" "),a("span",{staticClass:"item-text"},[t._v("Create new components")])],1),t._v(" "),a("md-list-item",[a("md-checkbox",{staticClass:"md-primary md-list-action",attrs:{value:!0}}),t._v(" "),a("span",{staticClass:"item-text"},[t._v("Answer Github issues")])],1)],1)],1)]),t._v(" "),a("md-theme",{attrs:{"md-name":"orange"}},[a("div",{staticClass:"column"},[a("strong",{staticClass:"md-subheading"},[t._v("Notes")]),t._v(" "),a("md-list",[a("md-list-item",[a("span",{staticClass:"item-text"},[t._v("Wake up early")]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",[t._v("star")])],1)],1),t._v(" "),a("md-list-item",[a("span",{staticClass:"item-text"},[t._v("Have breakfast everyday")]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",{staticClass:"md-primary"},[t._v("star")])],1)],1),t._v(" "),a("md-list-item",[a("span",{staticClass:"item-text"},[t._v("Contribution")]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",{staticClass:"md-primary"},[t._v("star")])],1)],1),t._v(" "),a("md-list-item",[a("span",{staticClass:"item-text"},[t._v("Travels")]),t._v(" "),a("md-button",{staticClass:"md-icon-button md-list-action"},[a("md-icon",{staticClass:"md-primary"},[t._v("star")])],1)],1)],1)],1)])],1)],1)]),t._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[t._v('\n            <div class="app-example">\n              <md-theme md-name="blue">\n                <md-whiteframe md-tag="md-toolbar" md-elevation="1">\n                  <span class="md-title">Life Organizer 2.0</span>\n                </md-whiteframe>\n              </md-theme>\n\n              <div class="page-layout">\n                <md-theme md-name="indigo">\n                  <div class="column">\n                    <strong class="md-subheading">Shopping list</strong>\n                    <md-list>\n                      <md-list-item>\n                        <md-checkbox class="md-primary md-list-action"></md-checkbox>\n                        <span class="item-text">French bread</span>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <md-checkbox :value="true" class="md-primary md-list-action"></md-checkbox>\n                        <span class="item-text">Brazilian Cheese Bread</span>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <md-checkbox class="md-primary md-list-action"></md-checkbox>\n                        <span class="item-text">Italian Bread</span>\n                      </md-list-item>\n                    </md-list>\n                  </div>\n                </md-theme>\n\n                <md-theme md-name="green">\n                  <div class="column">\n                    <strong class="md-subheading">Todo List</strong>\n                    <md-list>\n                      <md-list-item>\n                        <md-checkbox class="md-primary md-list-action"></md-checkbox>\n                        <span class="item-text">Create new components</span>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <md-checkbox :value="true" class="md-primary md-list-action"></md-checkbox>\n                        <span class="item-text">Answer Github issues</span>\n                      </md-list-item>\n                    </md-list>\n                  </div>\n                </md-theme>\n\n                <md-theme md-name="orange">\n                  <div class="column">\n                    <strong class="md-subheading">Notes</strong>\n                    <md-list>\n                      <md-list-item>\n                        <span class="item-text">Wake up early</span>\n                        <md-button class="md-icon-button md-list-action">\n                          <md-icon>star</md-icon>\n                        </md-button>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <span class="item-text">Have breakfast everyday</span>\n                        <md-button class="md-icon-button md-list-action">\n                          <md-icon class="md-primary">star</md-icon>\n                        </md-button>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <span class="item-text">Contribution</span>\n                        <md-button class="md-icon-button md-list-action">\n                          <md-icon class="md-primary">star</md-icon>\n                        </md-button>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <span class="item-text">Travels</span>\n                        <md-button class="md-icon-button md-list-action">\n                          <md-icon class="md-primary">star</md-icon>\n                        </md-button>\n                      </md-list-item>\n                    </md-list>\n                  </div>\n                </md-theme>\n              </div>\n            </div>\n          ')]),t._v(" "),a("code-block",{attrs:{lang:"sass"}},[t._v("\n            .app-example {\n              .page-layout {\n                display: flex;\n              }\n\n              .column {\n                flex: 1;\n                background-color: rgba(#000, .06);\n\n                + .column {\n                  margin-left: 16px;\n                }\n              }\n\n              .md-list {\n                background: none;\n              }\n\n              .md-subheading {\n                padding: 16px;\n                display: block;\n              }\n\n              .item-text {\n                flex: 1;\n              }\n\n              .md-checkbox {\n                margin-right: 16px;\n              }\n\n              .md-button {\n                margin-left: 16px;\n              }\n            }\n          ")])],1)]),t._v(" "),a("example-box",{attrs:{"card-title":"Attribute"}},[a("div",{slot:"demo"},[a("md-whiteframe",[a("md-toolbar",{attrs:{"md-theme":"blue"}},[a("span",{staticClass:"md-title"},[t._v("My app dashboard")])])],1),t._v(" "),a("div",{staticClass:"card-layout"},[a("div",{staticClass:"column"},[a("md-card",{staticClass:"md-primary",attrs:{"md-theme":"blue","md-with-hover":""}},[a("md-card-media",[a("img",{attrs:{src:"assets/card-image-1.jpg",alt:"People"}})]),t._v(" "),a("md-ink-ripple"),t._v(" "),a("md-card-actions",[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("favorite")])],1),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("bookmark")])],1),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("share")])],1)],1)],1),t._v(" "),a("md-card",{staticClass:"md-primary",attrs:{"md-theme":"green","md-with-hover":""}},[a("md-card-header",[a("div",{staticClass:"md-title"},[t._v("Title goes here")]),t._v(" "),a("div",{staticClass:"md-subhead"},[t._v("Subtitle here")])]),t._v(" "),a("md-card-content",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),t._v(" "),a("md-ink-ripple"),t._v(" "),a("md-card-actions",[a("md-button",[t._v("Action")]),t._v(" "),a("md-button",[t._v("Action")])],1)],1)],1),t._v(" "),a("div",{staticClass:"column"},[a("md-card",{staticClass:"md-primary",attrs:{"md-theme":"orange","md-with-hover":""}},[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[t._v("Title here")]),t._v(" "),a("div",{staticClass:"md-subhead"},[t._v("Subtitle here")])]),t._v(" "),a("md-card-media",[a("img",{attrs:{src:"assets/avatar-2.jpg",alt:"People"}})])],1),t._v(" "),a("md-card-actions",[a("md-button",[t._v("Action")]),t._v(" "),a("md-button",[t._v("Action")])],1)],1),t._v(" "),a("md-card",{staticClass:"md-primary",attrs:{"md-theme":"blue","md-with-hover":""}},[a("md-card-media",{attrs:{"md-ratio":"16:9"}},[a("img",{attrs:{src:"assets/card-sky.jpg",alt:"People"}})]),t._v(" "),a("md-ink-ripple"),t._v(" "),a("md-card-actions",[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("favorite")])],1),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("bookmark")])],1),t._v(" "),a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("share")])],1)],1)],1)],1)])],1),t._v(" "),a("div",{slot:"code"},[a("code-block",{attrs:{lang:"xml"}},[t._v('\n            <md-whiteframe>\n              <md-toolbar md-theme="blue">\n                <span class="md-title">My app dashboard</span>\n              </md-toolbar>\n            </md-whiteframe>\n\n            <div class="card-layout">\n              <div class="column">\n                <md-card class="md-primary" md-theme="blue" md-with-hover>\n                  <md-card-media>\n                    <img src="assets/card-image-1.jpg" alt="People">\n                  </md-card-media>\n\n                  <md-ink-ripple></md-ink-ripple>\n\n                  <md-card-actions>\n                    <md-button class="md-icon-button">\n                      <md-icon>favorite</md-icon>\n                    </md-button>\n\n                    <md-button class="md-icon-button">\n                      <md-icon>bookmark</md-icon>\n                    </md-button>\n\n                    <md-button class="md-icon-button">\n                      <md-icon>share</md-icon>\n                    </md-button>\n                  </md-card-actions>\n                </md-card>\n\n                <md-card class="md-primary" md-theme="green" md-with-hover>\n                  <md-card-header>\n                    <div class="md-title">Title goes here</div>\n                    <div class="md-subhead">Subtitle here</div>\n                  </md-card-header>\n\n                  <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</md-card-content>\n\n                  <md-ink-ripple></md-ink-ripple>\n\n                  <md-card-actions>\n                    <md-button>Action</md-button>\n                    <md-button>Action</md-button>\n                  </md-card-actions>\n                </md-card>\n              </div>\n\n              <div class="column">\n                <md-card class="md-primary" md-theme="orange" md-with-hover>\n                  <md-card-header>\n                    <md-card-header-text>\n                      <div class="md-title">Title here</div>\n                      <div class="md-subhead">Subtitle here</div>\n                    </md-card-header-text>\n\n                    <md-card-media>\n                      <img src="assets/avatar-2.jpg" alt="People">\n                    </md-card-media>\n                  </md-card-header>\n\n                  <md-card-actions>\n                    <md-button>Action</md-button>\n                    <md-button>Action</md-button>\n                  </md-card-actions>\n                </md-card>\n\n                <md-card class="md-primary" md-theme="blue" md-with-hover>\n                  <md-card-media md-ratio="16:9">\n                    <img src="assets/card-sky.jpg" alt="People">\n                  </md-card-media>\n\n                  <md-ink-ripple></md-ink-ripple>\n\n                  <md-card-actions>\n                    <md-button class="md-icon-button">\n                      <md-icon>favorite</md-icon>\n                    </md-button>\n\n                    <md-button class="md-icon-button">\n                      <md-icon>bookmark</md-icon>\n                    </md-button>\n\n                    <md-button class="md-icon-button">\n                      <md-icon>share</md-icon>\n                    </md-button>\n                  </md-card-actions>\n                </md-card>\n              </div>\n            </div>\n          ')]),t._v(" "),a("code-block",{attrs:{lang:"sass"}},[t._v("\n            .card-layout {\n              margin: 16px 15%;\n              display: flex;\n\n              .column {\n                flex: 1;\n\n                + .column {\n                  margin-left: 8px;\n                }\n              }\n\n              .md-card + .md-card {\n                margin-top: 8px;\n              }\n            }\n          ")])],1)])],1)])],1)},staticRenderFns:[]}},938:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{"page-title":"Themes - Configuration"}},[a("article",{staticClass:"main-content"},[a("section",[a("h2",{staticClass:"md-headline"},[t._v("Theme Engine")]),t._v(" "),a("p",[t._v("When you create a theme the Vue Material will generate all of the styles ondemand so you don't need to create any css file to create them. Everything is generated when the API is called and this is great because you can create a theme anytime you want. After that you can use the declarative directive to apply the theme inside an element.")]),t._v(" "),a("p",[t._v("Most of the components of Vue Material can change it's colors. Every theme has Primary, Accent, Warn and Background colors. Some components also have a Transparent variation to make your layouts cleaner and easy to place on top of another element. E.g. Tabs inside toolbars.")]),t._v(" "),a("p",[t._v("Vue Material use classes to apply those color intentions: "),a("code",[t._v("md-primary")]),t._v(", "),a("code",[t._v("md-accent")]),t._v(", "),a("code",[t._v("md-warn")]),t._v(" and "),a("code",[t._v("md-transparent")]),t._v(". The background color is applied automaticaly.")])]),t._v(" "),a("section",[a("h2",{staticClass:"md-headline"},[t._v("Color Intentions")]),t._v(" "),a("p",[t._v("Color in material design is inspired by bold hues juxtaposed with muted environments, deep shadows, and bright highlights.")]),t._v(" "),a("p",[t._v("Theming allows changing the color of your application. The "),a("a",{attrs:{href:"https://material.google.com/style/color.html#color-color-palette",target:"_blank",rel:"noopener"}},[t._v("Material Design palette")]),t._v(" can be fully applied using Vue Material. You can pass all intentions or just change the intention that you want. The default colors are:")]),t._v(" "),a("ul",[a("li",[t._v("primary - indigo")]),t._v(" "),a("li",[t._v("accent - pink")]),t._v(" "),a("li",[t._v("warn - deep-orange")]),t._v(" "),a("li",[t._v("background - grey")])]),t._v(" "),a("p",[t._v("All of those colors can be applied to create a theme.")]),t._v(" "),a("ul",[a("li",[t._v("red")]),t._v(" "),a("li",[t._v("pink")]),t._v(" "),a("li",[t._v("purple")]),t._v(" "),a("li",[t._v("deep-purple")]),t._v(" "),a("li",[t._v("indigo")]),t._v(" "),a("li",[t._v("blue")]),t._v(" "),a("li",[t._v("light-blue")]),t._v(" "),a("li",[t._v("cyan")]),t._v(" "),a("li",[t._v("teal")]),t._v(" "),a("li",[t._v("green")]),t._v(" "),a("li",[t._v("light-green")]),t._v(" "),a("li",[t._v("lime")]),t._v(" "),a("li",[t._v("yellow")]),t._v(" "),a("li",[t._v("amber")]),t._v(" "),a("li",[t._v("orange")]),t._v(" "),a("li",[t._v("deep-orange")]),t._v(" "),a("li",[t._v("brown")]),t._v(" "),a("li",[t._v("grey")]),t._v(" "),a("li",[t._v("blue-grey")]),t._v(" "),a("li",[t._v("white")]),t._v(" "),a("li",[t._v("black")])])]),t._v(" "),a("section",[a("h3",{staticClass:"md-headline"},[t._v("Registering themes")]),t._v(" "),a("p",[t._v("The default colors will be applied without any change in your code base. But you can change the colors of the "),a("code",[t._v("default")]),t._v(" theme calling the Vue Material API.")]),t._v(" "),a("code-block",{attrs:{lang:"javascript"}},[t._v("\n        Vue.material.registerTheme('default', {\n          primary: 'blue',\n          accent: 'red',\n          warn: 'red',\n          background: 'grey'\n        })\n      ")])],1),t._v(" "),a("section",[a("h3",{staticClass:"md-headline"},[t._v("Multiple themes")]),t._v(" "),a("p",[t._v("\n        You can call the "),a("code",[t._v("registerTheme")]),t._v(" function how many times you want. However you can pass an object containing all the themes that you need to create:\n      ")]),t._v(" "),a("code-block",{attrs:{lang:"javascript"}},[t._v("\n        Vue.material.registerTheme({\n          app: {\n            primary: 'cyan'\n          },\n          about: {\n            primary: 'indigo'\n          },\n          contact: {\n            primary: 'teal'\n          }\n        })\n      ")]),t._v(" "),a("small",[t._v("Note: If you do not pass all the colors the theme will inherit the "),a("strong",[t._v("default colors")]),t._v(".")])],1),t._v(" "),a("section",[a("h3",{staticClass:"md-headline"},[t._v("Custom Shades")]),t._v(" "),a("p",[t._v("To have a full use of the Material Design palette you can specify different shades for each color:")]),t._v(" "),a("code-block",{attrs:{lang:"javascript"}},[t._v("\n        Vue.material.registerTheme('about', {\n          primary: {\n            color: 'indigo',\n            hue: 'A200'\n          },\n          accent: {\n            color: 'grey',\n            hue: 300\n          }\n        })\n      ")])],1),t._v(" "),a("section",[a("h3",{staticClass:"md-headline"},[t._v("Force set text color")]),t._v(" "),a("p",[t._v("You can pass property "),a("code",[t._v("textColor")]),t._v(" to force set text color for the theme. The value of the property can be "),a("code",[t._v("white")]),t._v(" or "),a("code",[t._v("black")]),t._v(". All other values are ignored, and the behavior will be "),a("code",[t._v("default")])]),t._v(" "),a("code-block",{attrs:{lang:"javascript"}},[t._v("\n        Vue.material.registerTheme('about', {\n          primary: {\n            color: 'indigo',\n            hue: 900,\n            textColor: 'black' // text will be black\n          },\n          accent: {\n            color: 'grey',\n            hue: 900,\n            textColor: 'blue' // text will be white\n          }\n        })\n      ")])],1),t._v(" "),a("section",[a("h3",{staticClass:"md-headline"},[t._v("Applying a theme")]),t._v(" "),a("p",[t._v("To change the current theme in your application just call the "),a("code",[t._v("setCurrentTheme")]),t._v(" method from anywhere in your application:")]),t._v(" "),a("code-block",{attrs:{lang:"javascript"}},[t._v("\n        Vue.material.setCurrentTheme('about')\n      ")]),t._v(" "),a("p",[t._v("Or inside a Vue instance:")]),t._v(" "),a("code-block",{attrs:{lang:"javascript"}},[t._v("\n        this.$material.setCurrentTheme('about')\n      ")])],1),t._v(" "),a("section",[a("h3",{staticClass:"md-headline"},[t._v("Codepen example")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"550",scrolling:"no",title:"Theme Example",src:"//codepen.io/vue-material/embed/WGavBE/?height=550&theme-id=dark&default-tab=html,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"http://codepen.io/vue-material/pen/WGavBE/"}},[t._v("Theme Example")]),t._v(" by Vue Material ("),a("a",{attrs:{href:"http://codepen.io/vue-material"}},[t._v("@vue-material")]),t._v(") on "),a("a",{attrs:{href:"http://codepen.io"}},[t._v("CodePen")]),t._v(".")])],1)])])},staticRenderFns:[]}}});