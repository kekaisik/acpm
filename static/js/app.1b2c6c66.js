(function (e) {
    function t(t) {
        for (var n, i, o = t[0], c = t[1], l = t[2], m = 0, d = []; m < o.length; m++) i = o[m], Object.prototype.hasOwnProperty.call(s, i) && s[i] && d.push(s[i][0]), s[i] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        u && u(t);
        while (d.length) d.shift()();
        return r.push.apply(r, l || []), a()
    }

    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], n = !0, o = 1; o < a.length; o++) {
                var c = a[o];
                0 !== s[c] && (n = !1)
            }
            n && (r.splice(t--, 1), e = i(i.s = a[0]))
        }
        return e
    }

    var n = {}, s = {app: 0}, r = [];

    function i(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {i: t, l: !1, exports: {}};
        return e[t].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }

    i.m = e, i.c = n, i.d = function (e, t, a) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) i.d(a, n, function (t) {
            return e[t]
        }.bind(null, n));
        return a
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [], c = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var l = 0; l < o.length; l++) t(o[l]);
    var u = c;
    r.push([0, "chunk-vendors"]), a()
})({
    0: function (e, t, a) {
        e.exports = a("56d7")
    }, "0079": function (e, t, a) {
        e.exports = a.p + "static/dist/img/search.5ac955e6.svg"
    }, "023e": function (e, t, a) {
        "use strict";
        a("3a74")
    }, "034f": function (e, t, a) {
        "use strict";
        a("85ec")
    }, "06cd": function (e, t, a) {
    }, "083a": function (e, t, a) {
    }, "0847": function (e, t, a) {
    }, "093e": function (e, t, a) {
        var n = {
            "./account.svg": "20fe",
            "./account_icon.svg": "c9f5",
            "./contacts.svg": "22a7",
            "./contacts_icon.svg": "aea2",
            "./en.svg": "5976",
            "./expand-more_icon.svg": "18ea",
            "./kz.svg": "9250",
            "./news.svg": "ecc4",
            "./news_icon.svg": "9328",
            "./ru.svg": "69fb",
            "./search.svg": "0079",
            "./search_icon.svg": "f530"
        };

        function s(e) {
            var t = r(e);
            return a(t)
        }

        function r(e) {
            if (!a.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }

        s.keys = function () {
            return Object.keys(n)
        }, s.resolve = r, e.exports = s, s.id = "093e"
    }, "0c41": function (e, t, a) {
        "use strict";
        a("54c2")
    }, "0cc0": function (e, t, a) {
        "use strict";
        a("9108")
    }, 1588: function (e, t, a) {
    }, "182f": function (e, t, a) {
    }, "18ea": function (e, t, a) {
        e.exports = a.p + "static/dist/img/expand-more_icon.cee5462a.svg"
    }, "1cdb": function (e, t, a) {
    }, "1eea": function (e, t, a) {
    }, "20fe": function (e, t, a) {
        e.exports = a.p + "static/dist/img/account.974c3631.svg"
    }, 2126: function (e, t, a) {
    }, "22a7": function (e, t, a) {
        e.exports = a.p + "static/dist/img/contacts.82773a2f.svg"
    }, "240c": function (e, t, a) {
        "use strict";
        a("ccc3")
    }, "340e": function (e, t, a) {
    }, "374e": function (e, t, a) {
        "use strict";
        a("9151")
    }, "3a74": function (e, t, a) {
    }, "3b2c": function (e, t, a) {
        "use strict";
        a("af0b")
    }, "3c02": function (e, t, a) {
    }, "4a98": function (e, t, a) {
        "use strict";
        a("6567")
    }, 5393: function (e, t, a) {
        "use strict";
        a("bea6")
    }, "54c2": function (e, t, a) {
    }, "56d7": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("2b0e"), s = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("section", [a("BaseHeader"), a("router-view"), a("BaseFooter")], 1)
            }, r = [], i = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("header", {
                    staticClass: "header",
                    class: {squeeze: e.scrolledDown}
                }, [a("div", {staticClass: "header-content"}, [a("HeaderTop"), e.scrolledDown ? e._e() : a("HeaderMiddle", {
                    on: {
                        openMenu: function (t) {
                            return e.toggleMenu(t)
                        }
                    }
                }), a("HeaderBottom", {attrs: {scrolledDown: e.scrolledDown}}), a("MobileDropdown", {attrs: {isActive: e.isActive}})], 1)])
            }, o = [], c = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("nav", [a("ul", [e._l(e.$t("header.navTop"), (function (t, n) {
                    return a("NavItem", {
                        key: n,
                        attrs: {
                            styling: "top",
                            active: e.pageActive[n],
                            title: t,
                            imgPath: e.headerTopLinks[n].path,
                            pagePath: e.headerTopLinks[n].path,
                            routerName: e.headerTopLinks[n].routerName
                        }
                    })
                })), a("LangsDropDown")], 2)])
            }, l = [], u = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("li", {
                    class: this.addClass + " " + this.styling,
                    on: {click: e.changePage}
                }, ["top" == e.styling ? a("img", {attrs: {src: this.path}}) : e._e(), a("p", [e._v(e._s(this.title))])])
            }, m = [], d = {
                name: "NavItem",
                props: {
                    active: {type: Boolean},
                    styling: {type: String},
                    title: {type: String},
                    imgPath: {type: String},
                    pagePath: {type: String},
                    routerName: {type: String}
                },
                data() {
                    return {
                        addClass: 1 == this.active ? "active" : "",
                        path: "top" == this.styling && a("e9c4")("./" + this.imgPath + "_icon.svg")
                    }
                },
                methods: {
                    changePage() {
                        1 == this.active && "Login" != this.$router.currentRoute.params.name ? (this.$router.push({name: "Login"}), this.$router.go()) : this.$router.currentRoute.path !== "/" + this.pagePath && this.$router.push({
                            name: this.routerName,
                            params: {name: this.pagePath}
                        })
                    }
                }
            }, p = d, g = (a("240c"), a("2877")), h = Object(g["a"])(p, u, m, !1, null, "f519c42e", null), f = h.exports,
            v = a("a925");
        n["a"].use(v["a"]);
        const _ = {
            ru: {
                header: {
                    navTop: ["Новости", "Контакты", "Личный Кабинет"],
                    navBottom: ["Общество", "Конгрессы", "Образование", "Клинические протоколы", "Новости в медицине"],
                    menu: {
                        society: "Общество",
                        events: "Конгрессы",
                        education: "Образование",
                        protocols: "Клинические протоколы",
                        news: "Новости в медицине"
                    }
                },
                aboutUs: {title: "О нас", joinBtn: "Вступить", readMoreBtn: "Подробнее"},
                upcommingEvents: "Предстоящие мероприятия",
                becomeMember: {title: "Станьте частью сообщества!", readMoreBtn: "Узнать больше"},
                footer: {
                    title: "АСРМ",
                    menuGroups: [["Меню", "Общество", "События", "Образование", "Клинические протоколы", "Новости в медицине"], ["Членство", "Войти в мой кабинет", "Стать членом"], ["Ссылки", "European Lung Found", "European Respiratory System"], ["Пресса", "Press queries"]],
                    contactUs: "Свяжитесь с нами"
                },
                loginPage: {
                    loginTitle: "Авторизация",
                    login: "Войти",
                    registration: "Создать аккаунт",
                    username: "Имя пользователя",
                    password: "Пароль",
                    remember: "Запомнить меня",
                    forget: "Забыли пароль?"
                },
                accountPage: {
                    title: "Личный кабинет",
                    accountSetting: "Настройки аккаунта",
                    membership: "Членство",
                    editInfo: "Редактировать",
                    deleteAccount: "Удалить аккаунт",
                    signOut: "Выйти"
                }
            },
            kz: {
                header: {
                    navTop: ["Жаңалықтар", "Контактілер", "Аккаунт"],
                    navBottom: ["Қоғам", "Оқиғалар", "Білім", "Клиникалық хаттамалар", "Жаңалықтар"],
                    menu: {
                        society: "Қоғам",
                        events: "Оқиғалар",
                        education: "Білім",
                        protocols: "Клиникалық хаттамалар",
                        news: "Жаңалықтар"
                    }
                },
                aboutUs: {title: "Біз туралы", joinBtn: "Кіру", readMoreBtn: "Оқу"},
                upcommingEvents: "Оқиғалар",
                becomeMember: {title: "Мүше болe!", readMoreBtn: "Оқу"},
                footer: {
                    title: "АСРМ",
                    menuGroups: [["Меню", "Қоғам", "Оқиғалар", "Білім", "Клиникалық хаттамалар", "Жаңалықтар"], ["Мүшелік", "Кіру", "Мүше болу"], ["Сілтемелер", "European Lung Found", "European Respiratory System"], ["БАҚ", "Press queries"]],
                    contactUs: "Бізбен хабарласыңыз"
                },
                loginPage: {
                    loginTitle: "Login KZ",
                    login: "Log in",
                    registration: "Sign up",
                    username: "Username",
                    password: "Password",
                    remember: "Remember me",
                    forget: "Forgot password?"
                },
                accountPage: {
                    title: "Личный кабинет KZ",
                    accountSetting: "Настройки аккаунта",
                    membership: "Членство",
                    editInfo: "Редактировать",
                    deleteAccount: "Удалить аккаунт",
                    signOut: "Выйти"
                }
            },
            en: {
                header: {
                    navTop: ["News", "Contacts", "Account"],
                    navBottom: ["Society", "Events", "Education", "Clinical protocols", "News in medicine"],
                    menu: {
                        society: "Society",
                        events: "Events",
                        education: "Education",
                        protocols: "Clinical Protocols",
                        news: "News in medicine"
                    }
                },
                aboutUs: {title: "About us", joinBtn: "Join", readMoreBtn: "Read more"},
                upcommingEvents: "Upcomming events",
                becomeMember: {title: "Become member!", readMoreBtn: "Read more"},
                footer: {
                    title: "ASRM",
                    menuGroups: [["Menu", "Society", "Events", "Education", "Clinical protocols", "News in medicine"], ["Membership", "Log in", "Become member"], ["Links", "European Lung Found", "European Respiratory System"], ["Press", "Press queries"]],
                    contactUs: "Contact us"
                },
                loginPage: {
                    loginTitle: "Login",
                    login: "Log in",
                    registration: "Sign up",
                    username: "Username",
                    password: "Password",
                    remember: "Remember me",
                    forget: "Forgot password?"
                },
                accountPage: {
                    title: "Account",
                    accountSetting: "Account settings",
                    membership: "Membership",
                    editInfo: "Edit information",
                    deleteAccount: "Delete account",
                    signOut: "Sign out"
                }
            }
        }, b = new v["a"]({locale: "ru", fallbackLocale: "en", messages: _});
        var y = b, w = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "languages"}, [n("div", {
                    staticClass: "languages_language",
                    class: {opened: this.expanded},
                    on: {click: e.expand}
                }, [n("img", {
                    staticClass: "languages-logo",
                    attrs: {src: a("093e")("./" + e.languages[0].link + ".svg")}
                }), n("p", [e._v(e._s(e.languages[0].name))]), n("img", {
                    staticClass: "languages-expand",
                    class: {compress: this.expanded},
                    attrs: {src: a("18ea")}
                })]), n("div", {
                    staticClass: "dropdown-content",
                    class: {open: this.expanded}
                }, [n("div", {
                    staticClass: "languages_language", on: {
                        click: function (t) {
                            return e.changeLang(1)
                        }
                    }
                }, [n("img", {
                    staticClass: "languages-logo",
                    attrs: {src: a("093e")("./" + e.languages[1].link + ".svg")}
                }), n("p", [e._v(e._s(e.languages[1].name))])]), n("div", {
                    staticClass: "languages_language",
                    on: {
                        click: function (t) {
                            return e.changeLang(2)
                        }
                    }
                }, [n("img", {
                    staticClass: "languages-logo",
                    attrs: {src: a("093e")("./" + e.languages[2].link + ".svg")}
                }), n("p", [e._v(e._s(e.languages[2].name))])])])])
            }, S = [], k = {
                name: "DropDown", data() {
                    return {
                        expanded: !1,
                        languages: [{link: "ru", name: "Русский"}, {link: "kz", name: "Қазақ"}, {
                            link: "en",
                            name: "English"
                        }]
                    }
                }, methods: {
                    expand() {
                        this.expanded = !this.expanded
                    }, changeLang(e) {
                        this.expanded = !1;
                        const t = this.languages[e];
                        this.languages[e] = this.languages[0], this.languages[0] = t, this.$store.commit("SET_LANG", this.languages[0].link), y.locale = this.$store.state.currentLanguage, this.$router.go()
                    }
                }, created() {
                    "en" == this.$store.state.currentLanguage && (this.languages = [{
                        link: "en",
                        name: "English"
                    }, {link: "ru", name: "Русский"}, {
                        link: "kz",
                        name: "Қазақ"
                    }]), "kz" == this.$store.state.currentLanguage && (this.languages = [{
                        link: "kz",
                        name: "Kazakh"
                    }, {link: "en", name: "English"}, {link: "ru", name: "Русский"}])
                }
            }, E = k, x = (a("023e"), Object(g["a"])(E, w, S, !1, null, "2ff965a5", null)), $ = x.exports, C = {
                name: "HeaderTop", components: {NavItem: f, LangsDropDown: $}, computed: {
                    headerTopLinks() {
                        return this.$store.getters.headerTopItems
                    }
                }, data() {
                    return {pageActive: [!1, !1, !0]}
                }, methods: {
                    changeLocale(e) {
                        this.$store.commit("SET_LANG", e), y.locale = this.$store.state.currentLanguage, this.$router.go()
                    }
                }
            }, T = C, P = (a("eeec"), Object(g["a"])(T, c, l, !1, null, "d8a74706", null)), N = P.exports, I = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("nav", [n("ul", {class: {squeezedList: e.scrolledDown}}, [e.scrolledDown ? n("div", {staticClass: "squeezedSpan"}, [n("img", {
                    staticClass: "squeezedLogo",
                    attrs: {src: a("fcdd")}
                })]) : e._e(), e._l(e.$t("header.navBottom"), (function (t, a) {
                    return n("NavItem", {
                        key: a,
                        attrs: {
                            styling: e.scrolledDown ? "bottomSqueezed" : "bottom",
                            title: t,
                            pagePath: e.headerBottomLinks[a].path,
                            routerName: e.headerBottomLinks[a].routerName
                        }
                    })
                }))], 2)])
            }, R = [], L = {
                name: "HeaderBottom",
                components: {NavItem: f},
                props: {scrolledDown: {type: Boolean}},
                computed: {
                    headerBottomLinks() {
                        return this.$store.getters.headerBottomItems
                    }
                },
                data() {
                    return {
                        pageNames: ["Общество", "События", "Образование", "Клинические протоколы", "Новости в медицине"],
                        pageActive: [!1, !1, !0],
                        pagePaths: ["obschestvo", "sobytia", "obrazovanie", "clinicalprotocols", "medicinicnews"],
                        pageImgs: ["Home", "Order", "Rakhmet"]
                    }
                }
            }, O = L, A = (a("7f8c"), Object(g["a"])(O, I, R, !1, null, "08c9e8d1", null)), B = A.exports, M = function () {
                var e = this, t = this, n = t.$createElement, s = t._self._c || n;
                return s("div", {staticClass: "header-middle"}, [s("div", {staticClass: "logo-content"}, [s("img", {
                    staticClass: "logo",
                    attrs: {src: a("a384"), alt: ""},
                    on: {
                        click: function () {
                            "Home" !== t.currentRouteName && e.$router.push("/")
                        }
                    }
                }), s("h1", {
                    staticClass: "header-middle_name", on: {
                        click: function () {
                            "Home" !== t.currentRouteName && e.$router.push("/")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("footer.title")) + " ")])]), s("SearchBar"), s("div", {
                    staticClass: "icon-one",
                    class: {active: t.isActive},
                    on: {click: t.clickHandler}
                }, [s("div", {staticClass: "hamburger hamburger-one"})])], 1)
            }, D = [], j = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "searchbar"}, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.searchRef,
                        expression: "searchRef"
                    }],
                    attrs: {type: "text", placeholder: "Search"},
                    domProps: {value: e.searchRef},
                    on: {
                        input: [function (t) {
                            t.target.composing || (e.searchRef = t.target.value)
                        }, e.searchHandler]
                    }
                }), e.searchRef.length > 0 ? a("div", {staticClass: "search-results"}, [a("span", [e._v("Top results:")]), e._l(e.resultQuery, (function (t) {
                    return a("p", {
                        key: t.id, on: {
                            click: function (a) {
                                return e.clickHandler(t.url)
                            }
                        }
                    }, [e._v(" " + e._s(t.title) + " ")])
                }))], 2) : e._e()])
            }, U = [], q = {
                name: "SearchBar", data() {
                    return {searchRef: ""}
                }, methods: {
                    searchHandler() {
                        this.searchRef.length > 0 && this.getSearchRes()
                    }, async getSearchRes() {
                        await this.$store.dispatch("getSearchResults", this.searchRef)
                    }, clickHandler(e) {
                        console.log(this.$router), this.$router.push("/"), this.$router.push(e), this.$router.go()
                    }
                }, computed: {
                    resultQuery() {
                        return this.$store.state.searchResults
                    }
                }
            }, H = q, F = (a("b87b"), Object(g["a"])(H, j, U, !1, null, "7881fca5", null)), G = F.exports, z = {
                name: "HeaderMiddle",
                components: {SearchBar: G},
                props: {active: {type: Boolean}, styling: {type: String}, title: {type: String}},
                data() {
                    return {isActive: !1}
                },
                methods: {
                    clickHandler() {
                        this.isActive = !this.isActive, this.$emit("openMenu", this.isActive)
                    }
                },
                computed: {
                    currentRouteName() {
                        return this.$route.name
                    }
                }
            }, W = z, X = (a("79a9"), Object(g["a"])(W, M, D, !1, null, "34c7fbe2", null)), Y = X.exports, J = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "mobile-dropdown",
                    class: {menuOpen: e.isActive}
                }, [a("div", {staticClass: "mobile-dropdown__container"}, [a("DropDown"), a("NavItem", {
                    attrs: {
                        active: !0,
                        imgPath: "account",
                        pagePath: "account",
                        styling: "top",
                        title: "Личный кабинет"
                    }
                })], 1), a("SearchBar"), a("div", {staticClass: "mobile-dropdown__info"}, [a("ul", {staticClass: "mobile-dropdown__sections"}, e._l(e.headerLinks, (function (t, n) {
                    return a("MobileMenuItem", {
                        key: n,
                        attrs: {
                            currentSection: n == e.current,
                            sectionName: t.name,
                            styling: "left",
                            pagePath: t.path,
                            id: n
                        },
                        on: {
                            changeCurrentSection: function (t) {
                                return e.clickHandler(t)
                            }
                        }
                    })
                })), 1), e.groupList ? a("ul", {staticClass: "mobile-dropdown__list"}, e._l(e.groupList, (function (t, n) {
                    return a("MobileMenuItem", {
                        key: n,
                        attrs: {
                            sectionName: t.title,
                            styling: "right",
                            pageName: e.headerLinks[e.current].path,
                            pagePath: t.category
                        }
                    })
                })), 1) : e._e()])], 1)
            }, K = [], V = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("li", {
                    class: {current: e.currentSection},
                    on: {click: e.clickHandler}
                }, [a("p", {staticClass: "mobile-menu__item", class: e.styling}, [e._v(e._s(e.sectionName))])])
            }, Q = [], Z = {
                name: "MobileMenuItem",
                props: {
                    currentSection: {type: Boolean},
                    sectionName: {type: String},
                    styling: {type: String},
                    id: {type: Number},
                    pagePath: {type: String},
                    pageName: {type: String}
                },
                methods: {
                    clickHandler() {
                        "left" == this.styling ? (this.$emit("changeCurrentSection", this.id), "news" == this.pagePath && "News" != this.$router.currentRoute.name && (this.$router.push({name: "News"}), this.$router.go())) : this.$router.currentRoute.path !== "/" + this.pageName + "/" + this.pagePath && (console.log(this.pageName, this.pagePath), this.$router.push(`/${this.pageName}/${this.pagePath}`), this.$router.go())
                    }
                }
            }, ee = Z, te = (a("735d"), Object(g["a"])(ee, V, Q, !1, null, null, null)), ae = te.exports, ne = {
                name: "MobileDropdown",
                components: {NavItem: f, SearchBar: G, DropDown: $, MobileMenuItem: ae},
                props: {isActive: {type: Boolean}},
                created() {
                    this.fetchGroup();
                    const e = this.headerLinks.findIndex(e => e.path == this.$route.params.name);
                    this.current = -1 == e ? 0 : e
                },
                computed: {
                    headerLinks() {
                        return this.$store.getters.headerBottomItems
                    }, groupList() {
                        return this.$store.state.group
                    }
                },
                data() {
                    return {current: 0, group: ""}
                },
                watch: {
                    current() {
                        this.fetchGroup()
                    }
                },
                methods: {
                    clickHandler(e) {
                        this.current = e
                    }, async fetchGroup() {
                        this.group = this.headerLinks[this.current].path, this.loading = !0, await this.$store.dispatch("getGroup", this.group), this.loading = !1
                    }
                }
            }, se = ne, re = (a("9553"), Object(g["a"])(se, J, K, !1, null, "034cef71", null)), ie = re.exports, oe = {
                name: "BaseHeader",
                components: {HeaderTop: N, HeaderMiddle: Y, HeaderBottom: B, MobileDropdown: ie},
                props: {title: {type: String}},
                data() {
                    return {isActive: !1, scrolledDown: !1}
                },
                mounted() {
                    document.addEventListener("resize", this.handleResize(window.innerWidth)), document.addEventListener("scroll", () => {
                        this.handleScroll(window.scrollY)
                    })
                },
                beforeDestroy() {
                    document.removeEventListener("scroll", () => {
                        this.handleScroll(window.scrollY)
                    }), window.removeEventListener("resize", this.handleResize(window.innerWidth))
                },
                methods: {
                    toggleMenu(e) {
                        this.isActive = e
                    }, handleScroll(e) {
                        e >= 150 && window.innerWidth > 1040 ? this.scrolledDown = !0 : this.scrolledDown = !1
                    }, handleResize(e) {
                        e < 1040 && (this.scrolledDown = !1)
                    }
                }
            }, ce = oe, le = (a("7614"), Object(g["a"])(ce, i, o, !1, null, null, null)), ue = le.exports,
            me = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("footer", {staticClass: "footer"}, [a("div", {staticClass: "footer-title"}, [a("h2", [e._v(e._s(e.$t("footer.title")))])]), a("FooterMiddle")], 1)
            }, de = [], pe = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "grid-container"}, [e._l(e.$t("footer.menuGroups"), (function (e, t) {
                    return a("FooterMiddleBox", {key: t, attrs: {footerNavs: e}})
                })), a("div", {staticClass: "media-items-box"}, [a("h2", [e._v("Медиа")]), a("div", {staticClass: "media-container"}, [e._m(0), a("div", {staticClass: "media-row"}, [e._m(1), e._m(2), a("a", {on: {click: e.temporaryNews}}, [a("i", {staticClass: "fa-brands fa-telegram fa-2x"})])])]), a("a", {
                    staticClass: "contact-btn",
                    attrs: {href: "#"}
                }, [e._v(e._s(e.$t("footer.contactUs")))])])], 2)
            }, ge = [function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "media-row"}, [a("a", {attrs: {href: ""}}, [a("i", {staticClass: "fa-brands fa-facebook fa-2x"})]), a("a", {attrs: {href: ""}}, [a("i", {staticClass: "fa-brands fa-twitter fa-2x"})]), a("a", {attrs: {href: ""}}, [a("i", {staticClass: "fa-brands fa-youtube fa-2x"})])])
            }, function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("a", {attrs: {href: ""}}, [a("i", {staticClass: "fa-brands fa-instagram fa-2x"})])
            }, function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("a", {attrs: {href: ""}}, [a("i", {staticClass: "fa-brands fa-whatsapp fa-2x"})])
            }], he = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "footer-items-box"}, [a("h2", [e._v(e._s(e.footerNavs[0]))]), e._l(e.headerBottomLinks, (function (t, n) {
                    return a("FooterItem", {
                        key: n,
                        attrs: {link: e.footerNavs[n + 1], pagePath: t.path, routerName: t.routerName}
                    })
                }))], 2)
            }, fe = [], ve = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("a", {on: {click: e.changePage}}, [e._v(e._s(this.link))])
            }, _e = [], be = {
                name: "FooterItem",
                props: {link: {type: String}, pagePath: {type: String}, routerName: {type: String}},
                methods: {
                    changePage() {
                        this.$store.dispatch("getUserInformation"), this.$router.currentRoute.path !== "/" + this.pagePath && this.$router.push({
                            name: this.routerName,
                            params: {name: this.pagePath}
                        })
                    }
                }
            }, ye = be, we = (a("d5f3"), Object(g["a"])(ye, ve, _e, !1, null, "8460a562", null)), Se = we.exports, ke = {
                name: "FooterMiddleBox",
                props: {footerNavs: {type: Array}},
                components: {FooterItem: Se},
                computed: {
                    headerBottomLinks() {
                        return this.$store.getters.headerBottomItems
                    }
                }
            }, Ee = ke, xe = (a("f868"), Object(g["a"])(Ee, he, fe, !1, null, "33d0af91", null)), $e = xe.exports, Ce = {
                name: "FooterMiddle", components: {FooterMiddleBox: $e}, methods: {
                    temporaryNews() {
                        this.$router.push({name: "News"})
                    }
                }
            }, Te = Ce, Pe = (a("cb6b"), Object(g["a"])(Te, pe, ge, !1, null, "2bb085e1", null)), Ne = Pe.exports,
            Ie = {name: "BaseFooter", components: {FooterMiddle: Ne}}, Re = Ie,
            Le = (a("0cc0"), Object(g["a"])(Re, me, de, !1, null, "3e295256", null)), Oe = Le.exports, Ae = {
                name: "App", components: {BaseHeader: ue, BaseFooter: Oe}, mounted() {
                    y.locale = this.$store.state.currentLanguage, localStorage.setItem("currentLanguage", y.locale)
                }, data: () => ({})
            }, Be = Ae, Me = (a("034f"), Object(g["a"])(Be, s, r, !1, null, null, null)), De = Me.exports, je = a("8c4f"),
            Ue = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "home-page"}, [a("AboutUsBanner"), a("UpcommingEvents"), a("BecomeMember")], 1)
            }, qe = [], He = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "about-us-banner"}, [e.index ? a("div", {staticClass: "content-container"}, [a("h2", [e._v(e._s(e.index.title))]), a("div", {domProps: {innerHTML: e._s(e.index.text)}}), a("div", {staticClass: "buttons-container"}, [a("a", {attrs: {href: "#"}}, [e._v(e._s(e.$t("aboutUs.joinBtn")))]), a("a", {on: {click: e.goToSociety}}, [e._v(e._s(e.$t("aboutUs.readMoreBtn")))])])]) : e._e()])
            }, Fe = [], Ge = {
                name: "AboutUsBanner", props: {}, computed: {
                    index() {
                        return this.$store.state.aboutUs[0]
                    }
                }, mounted() {
                    this.fetchIndex()
                }, methods: {
                    async fetchIndex() {
                        this.loading = !0, await this.$store.dispatch("getAboutUs"), this.loading = !1
                    }, goToSociety() {
                        this.$router.push("society")
                    }
                }
            }, ze = Ge, We = (a("e789"), Object(g["a"])(ze, He, Fe, !1, null, "1d732dbd", null)), Xe = We.exports,
            Ye = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "upcomming-events-container"}, [n("h2", [e._v(e._s(e.$t("upcommingEvents")))]), n("div", {staticClass: "events-container"}, [n("a", {on: {click: e.scroll_left}}, [n("img", {
                    attrs: {
                        src: a("f033"),
                        alt: ""
                    }
                })]), n("div", {staticClass: "scrollable-container"}, [n("slider", {
                    ref: "slider",
                    attrs: {options: e.options}
                }, [e._l(e.events, (function (e, t) {
                    return n("slideritem", {
                        key: t,
                        staticClass: "custom-slider-item"
                    }, [n("EventItem", {attrs: {eventInfo: e}})], 1)
                })), n("div", {
                    attrs: {slot: "loading"},
                    slot: "loading"
                }, [e._v("loading...")])], 2)], 1), n("a", {on: {click: e.scroll_right}}, [n("img", {
                    attrs: {
                        src: a("a9f7"),
                        alt: ""
                    }
                })])])])
            }, Je = [], Ke = a("b190"), Ve = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "event-container"}, [a("img", {attrs: {src: "" + e.imgPath + e.eventInfo.main_image}}), a("div", {staticClass: "text-box"}, [a("p", [e._v(" " + e._s(e.eventInfo.announcement) + " ")]), a("p", {staticClass: "read-more"}, [e._v("Read More...")])])])
            }, Qe = [], Ze = a("bc3a"), et = a.n(Ze);
        const tt = et.a.create({baseURL: "http://192.168.0.112"});
        tt.interceptors.request.use((function (e) {
            const t = localStorage.getItem("token");
            return t && (e.headers.Authorization = "Bearer " + t), e
        }), (function (e) {
            return Promise.reject(e)
        }));
        var at = tt, nt = {
                name: "EventItem", props: {eventInfo: {type: Object}}, computed: {
                    imgPath() {
                        return "" + at.defaults.baseURL
                    }
                }
            }, st = nt, rt = (a("4a98"), Object(g["a"])(st, Ve, Qe, !1, null, "2938ea71", null)), it = rt.exports, ot = {
                name: "UpcommingEvents", props: {}, data() {
                    return {
                        options: {
                            currentPage: 0,
                            tracking: !1,
                            thresholdDistance: 100,
                            thresholdTime: 300,
                            infinite: 3,
                            slidesToScroll: 1,
                            autoplay: 5e3,
                            loop: !0,
                            pagination: !1
                        }
                    }
                }, computed: {
                    events() {
                        return this.$store.state.group
                    }
                }, mounted() {
                    this.fetchGroup()
                }, methods: {
                    scroll_left() {
                        this.$refs.slider.$emit("slidePre")
                    }, scroll_right() {
                        this.$refs.slider.$emit("slideNext")
                    }, async fetchGroup() {
                        this.loading = !0, await this.$store.dispatch("getGroup", "events"), this.loading = !1
                    }
                }, components: {EventItem: it, slider: Ke["slider"], slideritem: Ke["slideritem"]}
            }, ct = ot, lt = (a("8c9c"), Object(g["a"])(ct, Ye, Je, !1, null, "4013128c", null)), ut = lt.exports,
            mt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "become-member"}, [e.index ? a("div", {staticClass: "content-container"}, [a("h2", [e._v(e._s(e.index.title))]), a("div", {
                    staticClass: "text-content",
                    domProps: {innerHTML: e._s(e.index.text)}
                }), a("a", {attrs: {href: "#"}}, [e._v(e._s(e.$t("becomeMember.readMoreBtn")))])]) : e._e(), a("div", {staticClass: "image-container"})])
            }, dt = [], pt = {
                name: "BecomeMember", props: {}, computed: {
                    index() {
                        return this.$store.state.membership[0]
                    }
                }, mounted() {
                    this.fetchIndex()
                }, methods: {
                    async fetchIndex() {
                        this.loading = !0, await this.$store.dispatch("getMembership"), this.loading = !1
                    }
                }
            }, gt = pt, ht = (a("f942"), Object(g["a"])(gt, mt, dt, !1, null, "2b629b6e", null)), ft = ht.exports,
            vt = {name: "HomePage", components: {AboutUsBanner: Xe, UpcommingEvents: ut, BecomeMember: ft}}, _t = vt,
            bt = (a("da8c"), Object(g["a"])(_t, Ue, qe, !1, null, null, null)), yt = bt.exports, wt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return e.groupList.length > 0 ? a("div", {staticClass: "information"}, [a("InfoMenu", {
                    attrs: {
                        categoryList: e.groupList,
                        category: e.categoryDetails
                    }
                }), a("InfoText", {attrs: {category: e.categoryDetails}})], 1) : e._e()
            }, St = [], kt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", [e.category ? a("ul", {staticClass: "information-menu"}, [a("li", {staticClass: "information-menu__title"}, [e._v(e._s(e.$t("header.menu." + e.category.group)))]), e._l(e.categoryList, (function (t, n) {
                    return a("InfoItem", {key: n, attrs: {category: t.category, title: t.title, group: e.category.group}})
                }))], 2) : e._e()])
            }, Et = [], xt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("li", {
                    staticClass: "info-middle",
                    class: {active: this.activeGiven},
                    on: {click: e.changeRoute}
                }, [a("p", [e._v(e._s(this.title))])])
            }, $t = [], Ct = {
                name: "InfoItem2",
                props: {title: {type: String}, group: {type: String}, category: {type: String}},
                data() {
                    return {activeGiven: !1}
                },
                mounted() {
                    this.checkActive()
                },
                methods: {
                    changeRoute() {
                        this.$router.push(`/${this.group}/${this.category}`), this.activeGiven = !0
                    }, checkActive() {
                        this.activeGiven = this.$router.currentRoute.params.category == this.category
                    }
                },
                watch: {
                    $route: {
                        immediate: !0, handler() {
                            this.checkActive()
                        }
                    }
                }
            }, Tt = Ct, Pt = (a("cc1f"), Object(g["a"])(Tt, xt, $t, !1, null, "0b2be93e", null)), Nt = Pt.exports, It = {
                name: "InfoMenu",
                components: {InfoItem: Nt},
                props: {categoryList: {type: Array}, category: {type: Object}}
            }, Rt = It, Lt = (a("9a9e"), Object(g["a"])(Rt, kt, Et, !1, null, null, null)), Ot = Lt.exports,
            At = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return e.category ? a("div", {staticClass: "info-text"}, [a("h1", {staticClass: "info-text_title"}, [e._v(e._s(e.category.title))]), a("img", {
                    attrs: {
                        src: "" + e.imgPath + e.category.main_image,
                        alt: ""
                    }
                }), a("div", {staticClass: "parsed-html", domProps: {innerHTML: e._s(e.category.text)}})]) : e._e()
            }, Bt = [], Mt = {
                name: "InfoText", props: {category: {type: Object}}, computed: {
                    imgPath() {
                        return "" + at.defaults.baseURL
                    }
                }
            }, Dt = Mt, jt = (a("9604"), Object(g["a"])(Dt, At, Bt, !1, null, "33f6295e", null)), Ut = jt.exports, qt = {
                name: "SocietyPage", components: {InfoMenu: Ot, InfoText: Ut}, computed: {
                    groupList() {
                        return this.$store.state.group
                    }, categoryDetails() {
                        return this.$store.state.categoryDetails[0]
                    }
                }, data() {
                    return {group: "", category: ""}
                }, mounted() {
                    this.fetchGroup().then(() => {
                        this.fetchCategoryDetails()
                    })
                }, watch: {
                    $route: {
                        immediate: !0, handler() {
                            this.fetchGroup().then(() => {
                                this.fetchCategoryDetails()
                            })
                        }
                    }
                }, methods: {
                    async fetchGroup() {
                        this.group = this.$router.currentRoute.params.name, this.loading = !0, await this.$store.dispatch("getGroup", this.group), this.loading = !1
                    }, async fetchCategoryDetails() {
                        this.$router.currentRoute.params.category ? this.category = this.$router.currentRoute.params.category : this.category = this.$store.state.group[0].category, this.loading = !0, await this.$store.dispatch("getCategoryDetails", {
                            group: this.group,
                            category: this.category
                        }), this.loading = !1
                    }
                }
            }, Ht = qt, Ft = (a("9ec9"), Object(g["a"])(Ht, wt, St, !1, null, null, null)), Gt = Ft.exports,
            zt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "news-page"}, [a("h2", [e._v("Новости")]), e.news.length > 0 ? a("div", {staticClass: "news-container"}, [a("SingleNews", {
                    attrs: {
                        articleId: e.news[0].id,
                        imgPath: "" + e.imgPath + e.news[0].main_image,
                        title: e.news[0].title,
                        text: e.news[0].text,
                        date: e.news[0].date,
                        isLeadNews: !0
                    }
                }), e._l(e.news.slice(1, 4), (function (t, n) {
                    return a("SingleNews", {
                        key: n,
                        attrs: {
                            articleId: t.id,
                            imgPath: "" + e.imgPath + t.main_image,
                            title: t.title,
                            text: t.text,
                            date: t.date,
                            isLeadNews: !1
                        }
                    })
                }))], 2) : e._e(), e._m(0), a("router-view"), a("BecomeMember")], 1)
            }, Wt = [function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "more-news-btn"}, [a("a", {attrs: {href: ""}}, [e._v("Показать еще")])])
            }], Xt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "single-news-block",
                    class: {active: e.isLeadNews}
                }, [a("a", {
                    staticClass: "img-container", class: {activeImg: e.isLeadNews}, on: {
                        click: function (t) {
                            return e.goToArticle()
                        }
                    }
                }, [a("img", {attrs: {src: e.imgPath, alt: ""}})]), a("a", {
                    staticClass: "text-container",
                    class: {activeText: e.isLeadNews},
                    attrs: {href: ""}
                }, [a("div", {staticClass: "text-block"}, [a("h3", [e._v(e._s(e.title))]), a("p", [e._v(" " + e._s(e.shortText.slice(0, 250) + "..") + " ")]), a("span", [e._v(e._s(e.date))])])])])
            }, Yt = [], Jt = {
                name: "SingleNews",
                props: {
                    imgPath: {type: String},
                    title: {type: String},
                    text: {type: String},
                    date: {type: String},
                    isLeadNews: {type: Boolean},
                    articleId: {type: Number}
                },
                data() {
                    return {
                        htmlString: this.text,
                        shortText: (new DOMParser).parseFromString(this.text, "text/html").querySelector("p").textContent
                    }
                },
                methods: {
                    goToArticle() {
                        this.$router.push("/news/" + this.articleId)
                    }
                }
            }, Kt = Jt, Vt = (a("3b2c"), Object(g["a"])(Kt, Xt, Yt, !1, null, "db948336", null)), Qt = Vt.exports, Zt = {
                name: "NewsPage", components: {SingleNews: Qt, BecomeMember: ft}, mounted() {
                    this.fetchNews()
                }, methods: {
                    async fetchNews() {
                        this.loading = !0, await this.$store.dispatch("getNews"), this.loading = !1
                    }
                }, computed: {
                    imgPath() {
                        return "" + at.defaults.baseURL
                    }, news() {
                        return this.$store.state.news
                    }
                }
            }, ea = Zt, ta = (a("7b96"), Object(g["a"])(ea, zt, Wt, !1, null, "825cba96", null)), aa = ta.exports,
            na = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "article-page"}, [e.article.length > 0 ? a("div", {staticClass: "article-page-container"}, [a("div", {staticClass: "article-container"}, [e.article.length > 0 ? a("img", {
                    attrs: {
                        src: this.imgPath,
                        alt: ""
                    }
                }) : e._e(), a("h3", [e._v(e._s(e.article[0].title))]), a("span", [e._v(e._s(e.article[0].date))]), a("div", {domProps: {innerHTML: e._s(e.article[0].text)}})]), a("div", {staticClass: "similar-news-container"}, [a("h3", [e._v("Другие новости")]), e._l(e.news.filter((function (t) {
                    return t.id != e.article[0].id
                })).slice(0, 3), (function (e, t) {
                    return a("SimilarNewsBox", {key: t, attrs: {id: e.id, title: e.title, date: e.date}})
                }))], 2)]) : e._e(), a("div", {staticClass: "go-back-btn"}, [a("a", {on: {click: e.goBack}}, [a("i", {staticClass: "fa-solid fa-arrow-left-long"}), e._v(" Вернуться на страницу новостей ")])])])
            }, sa = [], ra = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "similar-news-box",
                    on: {click: e.goToArticle}
                }, [a("p", [e._v(" " + e._s(e.title) + " ")]), a("span", [e._v(e._s(e.date))])])
            }, ia = [], oa = {
                name: "SimilarNewsBox",
                props: {title: {type: String}, date: {type: String}, id: {type: Number}},
                methods: {
                    goToArticle() {
                        this.$router.push("/news/" + this.id)
                    }
                }
            }, ca = oa, la = (a("8d7e"), Object(g["a"])(ca, ra, ia, !1, null, "b5b2da94", null)), ua = la.exports, ma = {
                name: "ArticlePage", components: {SimilarNewsBox: ua}, computed: {
                    news() {
                        return this.$store.state.news
                    }, article() {
                        return this.$store.state.article
                    }, imgPath() {
                        return `${at.defaults.baseURL}${this.article[0].main_image}`
                    }
                }, watch: {
                    $route: {
                        immediate: !0, handler() {
                            this.fetchArticle(), this.fetchNews()
                        }
                    }
                }, methods: {
                    async fetchArticle() {
                        let e = this.$router.currentRoute.params.id;
                        this.loading = !0, await this.$store.dispatch("getArticle", e), this.loading = !1
                    }, async fetchNews() {
                        this.loading = !0, await this.$store.dispatch("getNews"), this.loading = !1
                    }, goBack() {
                        this.$router.back()
                    }
                }
            }, da = ma, pa = (a("5c1a"), Object(g["a"])(da, na, sa, !1, null, "29e4219a", null)), ga = pa.exports,
            ha = function () {
                var e = this, t = this, a = t.$createElement, n = t._self._c || a;
                return n("section", {staticClass: "login-page"}, [n("form", {on: {submit: t.submitHandler}}, [n("h3", [t._v(t._s(t.$t("loginPage.loginTitle")))]), n("label", {attrs: {for: "username"}}, [t._v(t._s(t.$t("loginPage.username")))]), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.usernameRef,
                        expression: "usernameRef"
                    }],
                    attrs: {type: "text", placeholder: "Email or Phone", id: "username"},
                    domProps: {value: t.usernameRef},
                    on: {
                        input: function (e) {
                            e.target.composing || (t.usernameRef = e.target.value)
                        }
                    }
                }), n("label", {attrs: {for: "password"}}, [t._v(t._s(t.$t("loginPage.password")))]), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.passwordRef,
                        expression: "passwordRef"
                    }],
                    attrs: {type: "password", placeholder: "*********", id: "password"},
                    domProps: {value: t.passwordRef},
                    on: {
                        input: function (e) {
                            e.target.composing || (t.passwordRef = e.target.value)
                        }
                    }
                }), n("div", {staticClass: "actions-container"}, [n("div", {staticClass: "checkbox-container"}, [n("input", {attrs: {type: "checkbox"}}), n("label", [t._v(" " + t._s(t.$t("loginPage.remember")))])]), n("span", [t._v(" " + t._s(t.$t("loginPage.forget")))])]), n("div", {staticClass: "login-page__buttons"}, [n("button", {attrs: {type: "submit"}}, [t._v(t._s(t.$t("loginPage.login")))]), n("p", {
                    on: {
                        click: function () {
                            e.$router.push("/register")
                        }
                    }
                }, [t._v(" New user? Create an account! ")])])])])
            }, fa = [], va = {
                name: "LoginPage", data() {
                    return {usernameRef: "", passwordRef: ""}
                }, methods: {
                    submitHandler(e) {
                        e.preventDefault(), this.$store.dispatch("loginUser", {
                            email: this.usernameRef,
                            password: this.passwordRef
                        }), console.log(this.usernameRef, this.passwordRef)
                    }
                }, created() {
                    localStorage.getItem("password") && this.$router.push("/account")
                }
            }, _a = va, ba = (a("af5e"), Object(g["a"])(_a, ha, fa, !1, null, "7a66351c", null)), ya = ba.exports,
            wa = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("section", {staticClass: "registration-page"}, [a("form", {on: {submit: e.submitHandler}}, [a("h3", [e._v("Create an account")]), a("div", {staticClass: "account-information"}, [a("label", {staticClass: "registration-information"}, [e._v("Account information")]), a("registration-form", {attrs: {info: e.accountInfo}}), a("registration-form", {attrs: {info: e.accountInfo2}})], 1), a("div", {staticClass: "personal-information"}, [a("label", {staticClass: "registration-information"}, [e._v("Personal information")]), a("registration-form", {attrs: {info: e.personalInfo}})], 1), a("div", {staticClass: "address-information"}, [a("label", {staticClass: "registration-information"}, [e._v("Address")]), a("registration-form", {attrs: {info: e.address1}}), a("registration-form", {attrs: {info: e.address2}}), a("registration-form", {attrs: {info: e.address3}})], 1), a("div", {staticClass: "work-information"}, [a("label", {staticClass: "registration-information"}, [e._v("Work information")]), a("registration-form", {attrs: {info: e.workInfo1}}), a("registration-form", {attrs: {info: e.workInfo2}})], 1), a("div", {staticClass: "registration-page__buttons"}, [a("button", {attrs: {type: "s, required: trueubmit"}}, [e._v(" " + e._s(e.$t("loginPage.registration")) + " ")])])])])
            }, Sa = [], ka = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "form-group"}, e._l(e.info, (function (e, t) {
                    return a("FormItem", {
                        key: t,
                        attrs: {
                            inputLabel: e.label,
                            inputPlaceholder: e.placeholder,
                            inputType: e.type,
                            inputClass: e.className,
                            inputRequired: e.required,
                            inputCommiter: e.committer
                        }
                    })
                })), 1)
            }, Ea = [], xa = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {class: e.inputClass}, [a("label", {staticClass: "input_label required-field"}, [e._v(e._s(e.inputLabel) + " ")]), "checkbox" === e.inputType && "tel" == e.inputType ? a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.modelka,
                        expression: "modelka"
                    }],
                    attrs: {
                        placeholder: e.inputPlaceholder,
                        pattern: "[0-9]{4}-[0-9]{3}-[0-9]{4}",
                        required: e.inputRequired,
                        minlength: "password" == e.inputType ? 8 : 1,
                        type: "checkbox"
                    },
                    domProps: {checked: Array.isArray(e.modelka) ? e._i(e.modelka, null) > -1 : e.modelka},
                    on: {
                        input: e.committer, change: function (t) {
                            var a = e.modelka, n = t.target, s = !!n.checked;
                            if (Array.isArray(a)) {
                                var r = null, i = e._i(a, r);
                                n.checked ? i < 0 && (e.modelka = a.concat([r])) : i > -1 && (e.modelka = a.slice(0, i).concat(a.slice(i + 1)))
                            } else e.modelka = s
                        }
                    }
                }) : "radio" === e.inputType && "tel" == e.inputType ? a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.modelka,
                        expression: "modelka"
                    }],
                    attrs: {
                        placeholder: e.inputPlaceholder,
                        pattern: "[0-9]{4}-[0-9]{3}-[0-9]{4}",
                        required: e.inputRequired,
                        minlength: "password" == e.inputType ? 8 : 1,
                        type: "radio"
                    },
                    domProps: {checked: e._q(e.modelka, null)},
                    on: {
                        input: e.committer, change: function (t) {
                            e.modelka = null
                        }
                    }
                }) : "tel" == e.inputType ? a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.modelka,
                        expression: "modelka"
                    }],
                    attrs: {
                        placeholder: e.inputPlaceholder,
                        pattern: "[0-9]{4}-[0-9]{3}-[0-9]{4}",
                        required: e.inputRequired,
                        minlength: "password" == e.inputType ? 8 : 1,
                        type: e.inputType
                    },
                    domProps: {value: e.modelka},
                    on: {
                        input: [function (t) {
                            t.target.composing || (e.modelka = t.target.value)
                        }, e.committer]
                    }
                }) : "checkbox" === e.inputType ? a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.modelka,
                        expression: "modelka"
                    }],
                    attrs: {
                        placeholder: e.inputPlaceholder,
                        required: e.inputRequired,
                        minlength: "password" == e.inputType ? 8 : 1,
                        type: "checkbox"
                    },
                    domProps: {checked: Array.isArray(e.modelka) ? e._i(e.modelka, null) > -1 : e.modelka},
                    on: {
                        input: e.committer, change: function (t) {
                            var a = e.modelka, n = t.target, s = !!n.checked;
                            if (Array.isArray(a)) {
                                var r = null, i = e._i(a, r);
                                n.checked ? i < 0 && (e.modelka = a.concat([r])) : i > -1 && (e.modelka = a.slice(0, i).concat(a.slice(i + 1)))
                            } else e.modelka = s
                        }
                    }
                }) : "radio" === e.inputType ? a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.modelka,
                        expression: "modelka"
                    }],
                    attrs: {
                        placeholder: e.inputPlaceholder,
                        required: e.inputRequired,
                        minlength: "password" == e.inputType ? 8 : 1,
                        type: "radio"
                    },
                    domProps: {checked: e._q(e.modelka, null)},
                    on: {
                        input: e.committer, change: function (t) {
                            e.modelka = null
                        }
                    }
                }) : a("input", {
                    directives: [{name: "model", rawName: "v-model", value: e.modelka, expression: "modelka"}],
                    attrs: {
                        placeholder: e.inputPlaceholder,
                        required: e.inputRequired,
                        minlength: "password" == e.inputType ? 8 : 1,
                        type: e.inputType
                    },
                    domProps: {value: e.modelka},
                    on: {
                        input: [function (t) {
                            t.target.composing || (e.modelka = t.target.value)
                        }, e.committer]
                    }
                })])
            }, $a = [], Ca = {
                name: "FormItem",
                data() {
                    return {modelka: ""}
                },
                props: {
                    inputLabel: {type: String},
                    inputPlaceholder: {type: String},
                    inputType: {type: String},
                    inputClass: {type: String},
                    inputRequired: Boolean,
                    inputCommiter: String
                },
                methods: {
                    committer() {
                        this.$store.commit("a/" + this.inputCommiter, this.modelka)
                    }
                }
            }, Ta = Ca, Pa = (a("fb1b"), Object(g["a"])(Ta, xa, $a, !1, null, "54e92d79", null)), Na = Pa.exports,
            Ia = {name: "RegistrationForm", props: {info: {type: Array}}, components: {FormItem: Na}}, Ra = Ia,
            La = (a("c2ac"), Object(g["a"])(Ra, ka, Ea, !1, null, "fe2d1e82", null)), Oa = La.exports, Aa = {
                components: {RegistrationForm: Oa}, name: "RegistrationPage", data() {
                    return {
                        usernameRef: "",
                        passwordRef: "",
                        emailRef: "",
                        firstNameRef: "",
                        lastNameRef: "",
                        middleNameRef: "",
                        accountInfo: [{
                            label: "Username",
                            placeholder: "",
                            type: "text",
                            required: !0,
                            committer: "SET_USERNAME"
                        }, {
                            label: "Email",
                            placeholder: "john@email.com",
                            type: "email",
                            required: !0,
                            committer: "SET_EMAIL"
                        }],
                        accountInfo2: [{
                            label: "Password",
                            placeholder: "min. 8 characters, not username",
                            type: "password",
                            required: !0,
                            committer: "SET_PASSWORD"
                        }, {
                            label: "Confirm password",
                            placeholder: "***********",
                            type: "password",
                            required: !0,
                            committer: "SET_PASSWORD"
                        }],
                        personalInfo: [{
                            label: "First name",
                            placeholder: "",
                            type: "text",
                            required: !0,
                            committer: "SET_FNAME"
                        }, {
                            label: "Middle name",
                            placeholder: "",
                            type: "text",
                            required: !1,
                            committer: "SET_MNAME"
                        }, {
                            label: "Last name",
                            placeholder: "",
                            type: "text",
                            required: !0,
                            committer: "SET_LNAME"
                        }, {
                            label: "Date of birth",
                            placeholder: "dd/mm/yyyy",
                            type: "date",
                            required: !0,
                            className: "date-class",
                            committer: "SET_BDATE"
                        }],
                        address1: [{
                            label: "Street address line 1",
                            placeholder: "",
                            type: "text",
                            required: !0,
                            committer: "SET_ADDRESS1"
                        }],
                        address2: [{
                            label: "Street address line 2",
                            placeholder: "",
                            type: "text",
                            required: !1,
                            committer: "SET_ADDRESS2"
                        }],
                        address3: [{
                            label: "Country",
                            placeholder: "",
                            type: "text",
                            required: !0,
                            committer: "SET_COUNTRY"
                        }, {label: "City", placeholder: "", type: "text", required: !0, committer: "SET_CITY"}],
                        workInfo1: [{
                            label: "Occupation",
                            placeholder: "",
                            type: "text",
                            required: !0,
                            committer: "SET_OCCUPATION"
                        }, {label: "Job title", placeholder: "", type: "text", required: !0, committer: "SET_JOB"}],
                        workInfo2: [{
                            label: "Place of work",
                            placeholder: "",
                            type: "text",
                            required: !0,
                            committer: "SET_PWORK"
                        }, {
                            label: "Phone number",
                            placeholder: "+X (XXX) XXX - XXXX",
                            type: "tel",
                            required: !0,
                            committer: "SET_PHONE"
                        }]
                    }
                }, methods: {
                    submitHandler(e) {
                        e.preventDefault(), this.$store.dispatch("a/getRegistration")
                    }
                }
            }, Ba = Aa, Ma = (a("9a1d"), Object(g["a"])(Ba, wa, Sa, !1, null, "3efcef8c", null)), Da = Ma.exports,
            ja = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "account-page"}, [a("h2", [e._v(e._s(e.$t("accountPage.title")))]), a("div", {staticClass: "account-categories"}, [a("a", {
                    class: {activeLink: e.isOnSettings},
                    on: {
                        click: function (t) {
                            return e.toggleIsOnSettings("settings")
                        }
                    }
                }, [e._v(e._s(e.$t("accountPage.accountSetting")))]), a("a", {
                    class: {activeLink: !e.isOnSettings},
                    on: {
                        click: function (t) {
                            return e.toggleIsOnSettings("membership")
                        }
                    }
                }, [e._v(e._s(e.$t("accountPage.membership")))])]), a("hr"), a("div", {staticClass: "main-content"}, [a("div", {staticClass: "main-edit"}, [a("a", {
                    class: {activeLink: e.isEditting},
                    on: {click: e.editInfo}
                }, [e._v(e._s(e.$t("accountPage.editInfo")))])]), a("div", {staticClass: "user-info-container"}, [a("form", {on: {submit: e.submitHandler}}, [e._l(e.formSections, (function (t, n) {
                    return a("AccountForm", {
                        key: n,
                        attrs: {sectionTitle: t.title, sectionItems: t.inputFields, isReadOnly: !e.isEditting}
                    })
                })), e.isEditting ? a("input", {
                    staticClass: "submit-btn",
                    attrs: {type: "submit", value: "Save"}
                }) : e._e(), e._v(' name: "" ')], 2)]), a("div", {staticClass: "user-actions-container"}, [a("a", {
                    class: {activeLink: e.isEditting},
                    on: {click: e.editInfo}
                }, [e._v(e._s(e.$t("accountPage.editInfo")))]), a("a", [e._v(e._s(e.$t("accountPage.deleteAccount")))]), a("a", {on: {click: e.signOutHandler}}, [e._v(e._s(e.$t("accountPage.signOut")))])])])])
            }, Ua = [], qa = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "container"}, [a("label", {staticClass: "section-title"}, [e._v(e._s(e.sectionTitle))]), a("div", {staticClass: "form-group"}, e._l(e.sectionItems, (function (t, n) {
                    return a("AccountFormItem", {
                        key: n,
                        attrs: {
                            inputLabel: t.label,
                            inputValue: t.value,
                            inputType: t.type,
                            isReadOnly: e.isReadOnly,
                            inputName: t.name
                        }
                    })
                })), 1)])
            }, Ha = [], Fa = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return e.userValue || "password" == e.inputType || "middle_name" == e.inputName ? a("div", [a("label", {staticClass: "input_label"}, [e._v(e._s(e.inputLabel) + " ")]), "tel" == e.inputType ? a("input", {
                    class: {activeInput: !e.isReadOnly},
                    attrs: {type: e.inputType, pattern: "[0-9]{4}-[0-9]{3}-[0-9]{4}", readonly: e.isReadOnly},
                    domProps: {value: e.userValue}
                }) : a("input", {
                    class: {activeInput: !e.isReadOnly},
                    attrs: {type: e.inputType, readonly: e.isReadOnly},
                    domProps: {value: "password" == e.inputType ? "lolipendr" : e.userValue}
                })]) : e._e()
            }, Ga = [], za = {
                name: "AccountFormItem",
                props: {
                    inputLabel: {type: String},
                    inputValue: {type: String},
                    inputType: {type: String},
                    isReadOnly: {type: Boolean},
                    inputName: String
                },
                mounted() {
                    console.log(this.isReadOnly)
                },
                computed: {
                    userValue() {
                        return this.$store.state.userInfo[this.inputName]
                    }
                }
            }, Wa = za, Xa = (a("5393"), Object(g["a"])(Wa, Fa, Ga, !1, null, "0ed5a014", null)), Ya = Xa.exports, Ja = {
                name: "AccountForm",
                components: {AccountFormItem: Ya},
                props: {sectionTitle: String, sectionItems: Array, isReadOnly: Boolean}
            }, Ka = Ja, Va = (a("374e"), Object(g["a"])(Ka, qa, Ha, !1, null, "79d8c14d", null)), Qa = Va.exports, Za = {
                name: "AccountPage", components: {AccountForm: Qa}, created() {
                    this.fetchUserInfo()
                }, mounted() {
                    console.log("messages: ", y.messages[this.$store.state.currentLanguage])
                }, methods: {
                    async fetchUserInfo() {
                        this.loading = !0, await this.$store.dispatch("getUserInformation"), this.loading = !1
                    }, submitHandler(e) {
                        e.preventDefault(), this.isEditting = !1
                    }, editInfo() {
                        this.isEditting = !0
                    }, toggleIsOnSettings(e) {
                        this.isOnSettings = "membership" != e
                    }, signOutHandler() {
                        this.$store.dispatch("userLogOut")
                    }
                }, computed: {
                    messages() {
                        return y.messages[this.$store.state.currentLanguage]
                    }
                }, data() {
                    return {
                        isOnSettings: !0,
                        isEditting: !1,
                        formSections: [{
                            title: "Account information",
                            inputFields: [{
                                label: "Username",
                                value: "renaidn",
                                type: "text",
                                name: "username"
                            }, {label: "Password", value: "*******", type: "password", name: "password"}, {
                                label: "Email",
                                value: "johndoe@gmail.com",
                                type: "email",
                                name: "email"
                            }, {label: "Phone number", value: "7777-333-4444", type: "tel", name: "phone"}]
                        }, {
                            title: "Personal information",
                            inputFields: [{
                                label: "First name",
                                value: "Adina",
                                type: "text",
                                name: "first_name"
                            }, {label: "Middle name", value: "", type: "text", name: "middle_name"}, {
                                label: "Last name",
                                value: "Maratkyzy",
                                type: "text",
                                name: "last_name"
                            }, {label: "Date of birth", value: "06/04/2002", type: "date", name: "date_of_Birth"}]
                        }, {
                            title: "Address",
                            inputFields: [{
                                label: "Street address line 1",
                                value: "Great street 58",
                                type: "text",
                                name: "address"
                            }, {
                                label: "Street address line 2",
                                value: "",
                                type: "text",
                                name: "address"
                            }, {label: "Country", value: "Kazakhstan", type: "text", name: "country"}, {
                                label: "City",
                                value: "Nur-Sultan",
                                type: "text",
                                name: "city"
                            }]
                        }, {
                            title: "Work information",
                            inputFields: [{
                                label: "Occupation",
                                value: "Profession",
                                type: "text",
                                name: "profession"
                            }, {
                                label: "Job title",
                                value: "Masters of profession",
                                type: "text",
                                name: "job"
                            }, {
                                label: "Place of work",
                                value: "National Bank of Professions (NPB)",
                                type: "text",
                                name: "place_of_work"
                            }]
                        }]
                    }
                }
            }, en = Za, tn = (a("0c41"), Object(g["a"])(en, ja, Ua, !1, null, "4851e5ac", null)), an = tn.exports;
        n["a"].use(je["a"]);
        const nn = [{path: "/", name: "Home", component: yt}, {
                path: "/news",
                name: "News",
                component: aa
            }, {path: "/news/:id", name: "Article", component: ga, props: !0}, {
                path: "/login",
                name: "Login",
                component: ya,
                props: !0
            }, {path: "/register", name: "Registration", component: Da, props: !0}, {
                path: "/account",
                name: "Account",
                component: an,
                props: !0
            }, {path: "/:name/:category?", name: "Information", component: Gt, props: !0}],
            sn = new je["a"]({mode: "history", routes: nn});
        var rn = sn, on = a("2f62");
        n["a"].use(on["a"]);
        const cn = {
            namespaced: !0,
            state: {
                username: "",
                password: "",
                email: "",
                passwordConfirmed: "",
                first_name: "",
                middle_name: "",
                last_name: "",
                date_of_Birth: "",
                profession: "",
                phone: "",
                address: "",
                city: "",
                country: "",
                place_of_work: "",
                job: ""
            },
            getters: {},
            mutations: {
                SET_USERNAME(e, t) {
                    e.username = t
                }, SET_EMAIL(e, t) {
                    e.email = t
                }, SET_PASSWORD(e, t) {
                    e.password = t
                }, SET_FNAME(e, t) {
                    e.first_name = t
                }, SET_MNAME(e, t) {
                    e.middle_name = t
                }, SET_LNAME(e, t) {
                    e.last_name = t
                }, SET_BDATE(e, t) {
                    e.date_of_Birth = t
                }, SET_ADDRESS1(e, t) {
                    e.address = t
                }, SET_ADDRESS2(e, t) {
                    e.address = t
                }, SET_COUNTRY(e, t) {
                    e.country = t
                }, SET_CITY(e, t) {
                    e.city = t
                }, SET_OCCUPATION(e, t) {
                    e.profession = t
                }, SET_JOB(e, t) {
                    e.job = t
                }, SET_PWORK(e, t) {
                    e.place_of_work = t
                }, SET_PHONE(e, t) {
                    e.phone = t
                }
            },
            actions: {
                async getRegistration({commit: e, state: t}) {
                    let a = new FormData;
                    a.append("username", t.username), a.append("password", t.password), a.append("email", t.email), a.append("first_name", t.first_name), a.append("last_name", t.last_name), a.append("profession", t.profession), a.append("date_of_Birth", t.date_of_Birth), a.append("phone", t.phone), a.append("address", t.address), a.append("city", t.city), a.append("country", t.country), a.append("place_of_work", t.place_of_work), a.append("job", t.job), await at.post("/auth/users/", a).then(t => {
                        console.log(t), e("REGISTER", t.data), rn.push("/login")
                    }).catch(e => {
                        console.log(e)
                    })
                }
            }
        };
        n["a"].use(on["a"]);
        var ln = new on["a"].Store({
            modules: {a: cn},
            state: {
                loginPassed: !1,
                currentLanguage: localStorage.getItem("currentLanguage"),
                news: [],
                article: [],
                group: [],
                categoryDetails: [],
                searchResults: [],
                aboutUs: [],
                membership: [],
                userInfo: {},
                menu: {
                    pages: {
                        headerNavTop: [{name: "Новости", path: "news", routerName: "News"}, {
                            name: "Контакты",
                            path: "contacts",
                            routerName: "Contacts"
                        }, {name: "Личный Кабинет", path: "account", routerName: "Account"}],
                        headerNavBottom: [{
                            name: "Общество",
                            path: "society",
                            routerName: "Information"
                        }, {name: "События", path: "events", routerName: "Information"}, {
                            name: "Образование",
                            path: "education",
                            routerName: "Information"
                        }, {
                            name: "Клинические протоколы",
                            path: "protocols",
                            routerName: "Information"
                        }, {name: "Новости в медицине", path: "news", routerName: "News"}]
                    }
                }
            },
            getters: {
                headerTopItems(e) {
                    return e.menu.pages.headerNavTop
                }, headerBottomItems(e) {
                    return e.menu.pages.headerNavBottom
                }, headerAllItems(e) {
                    return [...e.menu.pages.headerNavTop, ...e.menu.pages.headerNavBottom]
                }
            },
            mutations: {
                SET_ABOUT_US(e, t) {
                    e.aboutUs = t
                }, SET_MEMBERSHIP(e, t) {
                    e.membership = t
                }, SET_NEWS(e, t) {
                    e.news = t
                }, SET_ARTICLE(e, t) {
                    e.article = t
                }, SET_GROUP(e, t) {
                    e.group = t
                }, EMPTY_GROUP(e) {
                    e.group = []
                }, SET_CATEGORY_DETAILS(e, t) {
                    e.categoryDetails = t
                }, SET_LANG(e, t) {
                    localStorage.setItem("currentLanguage", t), e.currentLanguage = t
                }, SET_SEARCH_RESULTS(e, t) {
                    e.searchResults = t
                }, LOGIN(e, t) {
                    console.log(t), localStorage.setItem("token", t.auth_token), e.login = !0
                }, SET_USER_INFO(e, t) {
                    e.userInfo = t
                }
            },
            actions: {
                async getAboutUs({commit: e, state: t}) {
                    return await at.get(`/api/v1/${t.currentLanguage}/index/about-us`).then(t => {
                        e("SET_ABOUT_US", t.data)
                    })
                }, async getMembership({commit: e, state: t}) {
                    return await at.get(`/api/v1/${t.currentLanguage}/index/membership`).then(t => {
                        e("SET_MEMBERSHIP", t.data)
                    })
                }, async getNews({commit: e, state: t}) {
                    return await at.get(`/api/v1/${t.currentLanguage}/news`).then(t => {
                        e("SET_NEWS", t.data)
                    })
                }, async getArticle({commit: e}, t) {
                    return await at.get("/api/v1/news/" + t).then(t => {
                        e("SET_ARTICLE", t.data)
                    })
                }, async getGroup({commit: e, state: t}, a) {
                    return await at.get(`/api/v1/${t.currentLanguage}/${a}`).then(t => {
                        e("SET_GROUP", t.data)
                    })
                }, async getCategoryDetails({commit: e, state: t}, a) {
                    return await at.get(`/api/v1/${t.currentLanguage}/${a.group}/${a.category}`).then(t => {
                        e("SET_CATEGORY_DETAILS", t.data)
                    })
                }, async getSearchResults({commit: e, state: t}, a) {
                    return await at.get(`/api/v1/${t.currentLanguage}/search/${a}`).then(t => {
                        e("SET_SEARCH_RESULTS", t.data)
                    })
                }, loginUser({commit: e, state: t}, a) {
                    let n = new FormData;
                    n.append("username", a.email), n.append("password", a.password), at.post("auth/token/login", n).then(n => {
                        console.log(n.data), e("LOGIN", n.data), localStorage.setItem("username", a.email), localStorage.setItem("password", a.password), t.loginPassed = !0, rn.push("/account")
                    }).catch(e => {
                        console.log("Password or email incorrect!\n"), console.log(e)
                    })
                }, getUserInformation({commit: e}) {
                    at.get("/auth/users/me", {
                        auth: {
                            username: localStorage.getItem("username"),
                            password: localStorage.getItem("password")
                        }
                    }).then(t => {
                        console.log(t.data), e("SET_USER_INFO", t.data)
                    })
                }, userLogOut() {
                    localStorage.removeItem("username"), localStorage.removeItem("password"), rn.push("/login")
                }
            }
        }), un = a("2b27"), mn = a.n(un);
        n["a"].config.productionTip = !1, n["a"].use(mn.a), new n["a"]({
            i18n: y,
            router: rn,
            store: ln,
            render: e => e(De)
        }).$mount("#app")
    }, 5976: function (e, t, a) {
        e.exports = a.p + "static/dist/img/en.8c59cddf.svg"
    }, "5c1a": function (e, t, a) {
        "use strict";
        a("1cdb")
    }, "642c": function (e, t, a) {
    }, 6567: function (e, t, a) {
    }, "69fb": function (e, t, a) {
        e.exports = a.p + "static/dist/img/ru.d4e95143.svg"
    }, "6ff6": function (e, t, a) {
    }, 7238: function (e, t, a) {
    }, "735d": function (e, t, a) {
        "use strict";
        a("6ff6")
    }, 7614: function (e, t, a) {
        "use strict";
        a("7875")
    }, 7875: function (e, t, a) {
    }, "79a9": function (e, t, a) {
        "use strict";
        a("2126")
    }, "7b96": function (e, t, a) {
        "use strict";
        a("083a")
    }, "7efc": function (e, t, a) {
    }, "7f8c": function (e, t, a) {
        "use strict";
        a("cc5b")
    }, 8394: function (e, t, a) {
    }, "85ec": function (e, t, a) {
    }, "8c9c": function (e, t, a) {
        "use strict";
        a("fd82")
    }, "8d7e": function (e, t, a) {
        "use strict";
        a("aabb")
    }, 9108: function (e, t, a) {
    }, 9151: function (e, t, a) {
    }, 9250: function (e, t, a) {
        e.exports = a.p + "static/dist/img/kz.7b2beea0.svg"
    }, 9328: function (e, t, a) {
        e.exports = a.p + "static/dist/img/news_icon.3ce091f5.svg"
    }, 9553: function (e, t, a) {
        "use strict";
        a("e9a3")
    }, 9604: function (e, t, a) {
        "use strict";
        a("1588")
    }, "9a1d": function (e, t, a) {
        "use strict";
        a("7238")
    }, "9a9e": function (e, t, a) {
        "use strict";
        a("642c")
    }, "9ec9": function (e, t, a) {
        "use strict";
        a("06cd")
    }, a384: function (e, t, a) {
        e.exports = a.p + "static/dist/img/logo2.59697a63.png"
    }, a81e: function (e, t, a) {
    }, a9f7: function (e, t, a) {
        e.exports = a.p + "static/dist/img/right.dfa23edd.png"
    }, aabb: function (e, t, a) {
    }, aea2: function (e, t, a) {
        e.exports = a.p + "static/dist/img/contacts_icon.94e5e162.svg"
    }, af0b: function (e, t, a) {
    }, af5e: function (e, t, a) {
        "use strict";
        a("7efc")
    }, b87b: function (e, t, a) {
        "use strict";
        a("f0b7")
    }, bea6: function (e, t, a) {
    }, c2ac: function (e, t, a) {
        "use strict";
        a("340e")
    }, c9f5: function (e, t, a) {
        e.exports = a.p + "static/dist/img/account_icon.a966fe2c.svg"
    }, cb6b: function (e, t, a) {
        "use strict";
        a("a81e")
    }, cc1f: function (e, t, a) {
        "use strict";
        a("182f")
    }, cc5b: function (e, t, a) {
    }, ccc3: function (e, t, a) {
    }, d15a: function (e, t, a) {
    }, d5f3: function (e, t, a) {
        "use strict";
        a("ed65")
    }, da8c: function (e, t, a) {
        "use strict";
        a("1eea")
    }, e789: function (e, t, a) {
        "use strict";
        a("0847")
    }, e9a3: function (e, t, a) {
    }, e9c4: function (e, t, a) {
        var n = {
            "./account_icon.svg": "c9f5",
            "./contacts_icon.svg": "aea2",
            "./expand-more_icon.svg": "18ea",
            "./news_icon.svg": "9328",
            "./search_icon.svg": "f530"
        };

        function s(e) {
            var t = r(e);
            return a(t)
        }

        function r(e) {
            if (!a.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }

        s.keys = function () {
            return Object.keys(n)
        }, s.resolve = r, e.exports = s, s.id = "e9c4"
    }, ebe3: function (e, t, a) {
    }, ecc4: function (e, t, a) {
        e.exports = a.p + "static/dist/img/news.bcf78c46.svg"
    }, ed65: function (e, t, a) {
    }, eeec: function (e, t, a) {
        "use strict";
        a("8394")
    }, f033: function (e, t, a) {
        e.exports = a.p + "static/dist/img/left.3cf384bb.png"
    }, f0b7: function (e, t, a) {
    }, f530: function (e, t, a) {
        e.exports = a.p + "static/dist/img/search_icon.e2887dff.svg"
    }, f868: function (e, t, a) {
        "use strict";
        a("ebe3")
    }, f942: function (e, t, a) {
        "use strict";
        a("d15a")
    }, fb1b: function (e, t, a) {
        "use strict";
        a("3c02")
    }, fcdd: function (e, t, a) {
        e.exports = a.p + "static/dist/img/logo.b802b369.png"
    }, fd82: function (e, t, a) {
    }
});
//# sourceMappingURL=app.1b2c6c66.js.map