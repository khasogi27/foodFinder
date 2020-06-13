! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 7)
}([function (e, t, n) {
    var r = n(1),
        o = n(2);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [
        [e.i, o, ""]
    ]);
    var a = {
        insert: "head",
        singleton: !1
    };
    r(o, a);
    e.exports = o.locals || {}
}, function (e, t, n) {
    "use strict";
    var r, o = function () {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
        },
        a = function () {
            var e = {};
            return function (t) {
                if (void 0 === e[t]) {
                    var n = document.querySelector(t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                    e[t] = n
                }
                return e[t]
            }
        }(),
        i = [];

    function c(e) {
        for (var t = -1, n = 0; n < i.length; n++)
            if (i[n].identifier === e) {
                t = n;
                break
            } return t
    }

    function u(e, t) {
        for (var n = {}, r = [], o = 0; o < e.length; o++) {
            var a = e[o],
                u = t.base ? a[0] + t.base : a[0],
                s = n[u] || 0,
                l = "".concat(u, " ").concat(s);
            n[u] = s + 1;
            var f = c(l),
                d = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                }; - 1 !== f ? (i[f].references++, i[f].updater(d)) : i.push({
                identifier: l,
                updater: b(d, t),
                references: 1
            }), r.push(l)
        }
        return r
    }

    function s(e) {
        var t = document.createElement("style"),
            r = e.attributes || {};
        if (void 0 === r.nonce) {
            var o = n.nc;
            o && (r.nonce = o)
        }
        if (Object.keys(r).forEach((function (e) {
                t.setAttribute(e, r[e])
            })), "function" == typeof e.insert) e.insert(t);
        else {
            var i = a(e.insert || "head");
            if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            i.appendChild(t)
        }
        return t
    }
    var l, f = (l = [], function (e, t) {
        return l[e] = t, l.filter(Boolean).join("\n")
    });

    function d(e, t, n, r) {
        var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        if (e.styleSheet) e.styleSheet.cssText = f(t, o);
        else {
            var a = document.createTextNode(o),
                i = e.childNodes;
            i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a)
        }
    }

    function p(e, t, n) {
        var r = n.css,
            o = n.media,
            a = n.sourceMap;
        if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r))
        }
    }
    var h = null,
        y = 0;

    function b(e, t) {
        var n, r, o;
        if (t.singleton) {
            var a = y++;
            n = h || (h = s(t)), r = d.bind(null, n, a, !1), o = d.bind(null, n, a, !0)
        } else n = s(t), r = p.bind(null, n, t), o = function () {
            ! function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
            }(n)
        };
        return r(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else o()
            }
    }
    e.exports = function (e, t) {
        (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
        var n = u(e = e || [], t);
        return function (e) {
            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                for (var r = 0; r < n.length; r++) {
                    var o = c(n[r]);
                    i[o].references--
                }
                for (var a = u(e, t), s = 0; s < n.length; s++) {
                    var l = c(n[s]);
                    0 === i[l].references && (i[l].updater(), i.splice(l, 1))
                }
                n = a
            }
        }
    }
}, function (e, t, n) {
    (t = n(3)(!1)).push([e.i, "* {\n    padding: 5px;\n    margin: 0;\n    box-sizing: border-box;\n    border-radius: 50px;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\nmain {\n    width: 90%;\n    max-width: 800px;\n    margin: 32px auto;\n}\n\nfood-list {\n    display: block;\n    margin-top: 32px;\n    width: 100%;\n    padding: 16px;\n}", ""]), e.exports = t
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map((function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var o = (i = r, c = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), "/*# ".concat(u, " */")),
                            a = r.sources.map((function (e) {
                                return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                            }));
                        return [n].concat(a).concat([o]).join("\n")
                    }
                    var i, c, u;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
            })).join("")
        }, t.i = function (e, n, r) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            var o = {};
            if (r)
                for (var a = 0; a < this.length; a++) {
                    var i = this[a][0];
                    null != i && (o[i] = !0)
                }
            for (var c = 0; c < e.length; c++) {
                var u = [].concat(e[c]);
                r && o[u[0]] || (n && (u[2] ? u[2] = "".concat(n, " and ").concat(u[2]) : u[2] = n), t.push(u))
            }
        }, t
    }
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t) {
        return !t || "object" !== n(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function a(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (a = function (e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return i(e, arguments, s(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), u(r, e)
        })(e)
    }

    function i(e, t, n) {
        return (i = c() ? Reflect.construct : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new(Function.bind.apply(e, r));
            return n && u(o, n.prototype), o
        }).apply(null, arguments)
    }

    function c() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
        } catch (e) {
            return !1
        }
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var l = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && u(e, t)
        }(d, e);
        var t, n, a, i, l, f = (t = d, n = c(), function () {
            var e, r = s(t);
            if (n) {
                var a = s(this).constructor;
                e = Reflect.construct(r, arguments, a)
            } else e = r.apply(this, arguments);
            return o(this, e)
        });

        function d() {
            var e;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, d), (e = f.call(this)).shadowDOM = e.attachShadow({
                mode: "open"
            }), e
        }
        return a = d, (i = [{
            key: "connectedCallback",
            value: function () {
                this.render()
            }
        }, {
            key: "render",
            value: function () {
                this.shadowDOM.innerHTML = "\n        <style>\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            :host {\n                display: block;\n                width: 100%;\n                background-color: orange;\n                color: white;\n                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            }\n            h2 {\n                padding: 20px;\n                text-align: center;\n            }\n        </style>\n        <h2>Food Finder</h2>"
            }
        }]) && r(a.prototype, i), l && r(a, l), d
    }(a(HTMLElement));
    customElements.define("app-bar", l)
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t) {
        return !t || "object" !== n(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function a(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (a = function (e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return i(e, arguments, s(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), u(r, e)
        })(e)
    }

    function i(e, t, n) {
        return (i = c() ? Reflect.construct : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new(Function.bind.apply(e, r));
            return n && u(o, n.prototype), o
        }).apply(null, arguments)
    }

    function c() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
        } catch (e) {
            return !1
        }
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var l = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && u(e, t)
        }(d, e);
        var t, n, a, i, l, f = (t = d, n = c(), function () {
            var e, r = s(t);
            if (n) {
                var a = s(this).constructor;
                e = Reflect.construct(r, arguments, a)
            } else e = r.apply(this, arguments);
            return o(this, e)
        });

        function d() {
            var e;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, d), (e = f.call(this)).shadowDOM = e.attachShadow({
                mode: "open"
            }), e
        }
        return a = d, (i = [{
            key: "render",
            value: function () {
                this.shadowDOM.innerHTML = '\n            <style>\n              * {\n                    margin: 0;\n                    padding: 0;\n                    box-sizing: border-box;\n                }\n                :host {\n                    display: block;\n                    margin-bottom: 20px;\n                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                    border-radius: 50px;\n                    overflow: hidden;\n                }\n                \n                .fan-art-food {\n                    width: 100%;\n                    max-height: 300px;\n                    object-fit: cover;\n                    object-position: center;\n                }\n                \n                .food-info {\n                    padding: 35px;\n                }\n                \n                .food-info > h2 {\n                    font-weight: lighter;\n                    text-align: center;\n                }\n                \n                .food-info > p {\n                    margin-top: 10px;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                    display: -webkit-box;\n                    -webkit-box-orient: vertical;\n                    -webkit-line-clamp: 10; /* number of lines to show */\n                }\n            </style>\n            <img class="fan-art-food" src="'.concat(this._food.strMealThumb, '" alt="Fan Art">\n            <div class="food-info">\n                <h2>').concat(this._food.strMeal, "</h2>\n                <p>").concat(this._food.strInstructions, "</p>\n            </div>")
            }
        }, {
            key: "food",
            set: function (e) {
                this._food = e, this.render()
            }
        }]) && r(a.prototype, i), l && r(a, l), d
    }(a(HTMLElement));
    customElements.define("food-item", l)
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t) {
        return !t || "object" !== n(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function a(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (a = function (e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return i(e, arguments, s(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), u(r, e)
        })(e)
    }

    function i(e, t, n) {
        return (i = c() ? Reflect.construct : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new(Function.bind.apply(e, r));
            return n && u(o, n.prototype), o
        }).apply(null, arguments)
    }

    function c() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
        } catch (e) {
            return !1
        }
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var l = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && u(e, t)
        }(d, e);
        var t, n, a, i, l, f = (t = d, n = c(), function () {
            var e, r = s(t);
            if (n) {
                var a = s(this).constructor;
                e = Reflect.construct(r, arguments, a)
            } else e = r.apply(this, arguments);
            return o(this, e)
        });

        function d() {
            var e;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, d), (e = f.call(this)).shadowDOM = e.attachShadow({
                mode: "open"
            }), e
        }
        return a = d, (i = [{
            key: "connectedCallback",
            value: function () {
                this.render()
            }
        }, {
            key: "render",
            value: function () {
                this.shadowDOM.innerHTML = '\n        <style>\n        .search-container {\n            max-width: 800px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            padding: 16px;\n            border-radius: 50px;\n            display: flex;\n            position: sticky;\n            top: 10px;\n            background-color: white;\n        }\n        \n        .search-container > input {\n            width: 75%;\n            padding: 16px;\n            border: 0;\n            border-radius: 50px\n            border-bottom: 1px solid orange;\n            font-weight: bold;\n        }\n        \n        .search-container > input:focus {\n            outline: 0;\n            border-bottom: 2px solid orange;\n            border-radius: 50px;\n        }\n        \n        .search-container > input:focus::placeholder {\n            font-weight: bold;\n            border-radius: 50px;\n        }\n        \n        .search-container >  input::placeholder {\n            color: orange;\n            font-weight: normal;\n            border-radius: 50px;\n        }\n        \n        .search-container > button {\n            width: 23%;\n            cursor: pointer;\n            margin-left: auto;\n            padding: 16px;\n            background-color: orange;\n            color: white;\n            border: 0;\n            border-radius: 50px;\n            text-transform: uppercase;\n        }\n        \n        @media screen and (max-width: 550px){\n            .search-container {\n                flex-direction: column;\n                position: static;\n            }\n        \n            .search-container > input {\n                width: 100%;\n                margin-bottom: 12px;\n            }\n        \n            .search-container > button {\n                width: 100%;\n            }\n        }\n        </style>\n        <div id="search-container" class="search-container">\n            <input placeholder="Search Food" id="searchElement" type="search">\n            <button id="searchButtonElement" type="submit">Search</button>\n        </div>\n        ', this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent)
            }
        }, {
            key: "clickEvent",
            set: function (e) {
                this._clickEvent = e, this.render()
            }
        }, {
            key: "value",
            get: function () {
                return this.shadowDOM.querySelector("#searchElement").value
            }
        }]) && r(a.prototype, i), l && r(a, l), d
    }(a(HTMLElement));
    customElements.define("search-bar", l)
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0), n(4), n(5);

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function i(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (i = function (e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return c(e, arguments, l(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), s(r, e)
        })(e)
    }

    function c(e, t, n) {
        return (c = u() ? Reflect.construct : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new(Function.bind.apply(e, r));
            return n && s(o, n.prototype), o
        }).apply(null, arguments)
    }

    function u() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
        } catch (e) {
            return !1
        }
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    var f = function (e) {
        ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(d, e);
        var t, n, r, i, c, f = (t = d, n = u(), function () {
            var e, r = l(t);
            if (n) {
                var o = l(this).constructor;
                e = Reflect.construct(r, arguments, o)
            } else e = r.apply(this, arguments);
            return a(this, e)
        });

        function d() {
            var e;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, d), (e = f.call(this)).shadowDOM = e.attachShadow({
                mode: "open"
            }), e
        }
        return r = d, (i = [{
            key: "render",
            value: function () {
                var e = this;
                this.shadowDOM.innerHTML = "", this._foods.forEach((function (t) {
                    var n = document.createElement("food-item");
                    n.food = t, e.shadowDOM.appendChild(n)
                }))
            }
        }, {
            key: "renderError",
            value: function (e) {
                this.shadowDOM.innerHTML = "\n        <style>\n                .placeholder {\n                    font-weight: lighter;\n                    color: rgba(0,0,0,0.5);\n                    -webkit-user-select: none;\n                    -moz-user-select: none;\n                    -ms-user-select: none;\n                    user-select: none;\n                }\n            </style>", this.shadowDOM.innerHTML += '<h2 class="placeholder">'.concat(e, "</h2>")
            }
        }, {
            key: "foods",
            set: function (e) {
                this._foods = e, this.render()
            }
        }]) && o(r.prototype, i), c && o(r, c), d
    }(i(HTMLElement));
    customElements.define("food-list", f);
    n(6);
    var d = [{
        strMeal: "Corba",
        strArea: "Turkish",
        strMealThumb: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
        strInstructions: "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week."
    }, {
        strMeal: "Corba",
        strArea: "Turkish",
        strMealThumb: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
        strInstructions: "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week."
    }, {
        strMeal: "Corba",
        strArea: "Turkish",
        strMealThumb: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
        strInstructions: "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week."
    }, {
        strMeal: "Corba",
        strArea: "Turkish",
        strMealThumb: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
        strInstructions: "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week."
    }];

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var h = function () {
        function e() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, n, r;
        return t = e, r = [{
            key: "searchFood",
            value: function (e) {
                return new Promise((function (t, n) {
                    var r = d.filter((function (t) {
                        return t.strMeal.toUpperCase().includes(e.toUpperCase())
                    }));
                    r.length ? t(r) : n("".concat(e, " is not found"))
                }))
            }
        }], (n = null) && p(t.prototype, n), r && p(t, r), e
    }();

    function y(e, t, n, r, o, a, i) {
        try {
            var c = e[a](i),
                u = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    var b = function () {
        var e = document.querySelector("search-bar"),
            t = document.querySelector("food-list"),
            n = function () {
                var t, n = (t = regeneratorRuntime.mark((function t() {
                    var n;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, h.searchFood(e.value);
                            case 3:
                                n = t.sent, r(n), t.next = 10;
                                break;
                            case 7:
                                t.prev = 7, t.t0 = t.catch(0), o(t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 7]
                    ])
                })), function () {
                    var e = this,
                        n = arguments;
                    return new Promise((function (r, o) {
                        var a = t.apply(e, n);

                        function i(e) {
                            y(a, r, o, i, c, "next", e)
                        }

                        function c(e) {
                            y(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                });
                return function () {
                    return n.apply(this, arguments)
                }
            }(),
            r = function (e) {
                t.foods = e
            },
            o = function (e) {
                t.renderError(e)
            };
        e.clickEvent = n
    };
    document.addEventListener("DOMContentLoaded", b)
}]);