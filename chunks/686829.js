function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        I18N: function() {
            return S
        },
        getSystemLocale: function() {
            return I
        }
    });
    var r = n("836560"),
        o = n("400053"),
        i = n.n(o),
        a = n("762272");

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && p(e, t)
    }

    function E(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function m(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = d(e);
            if (t) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : u(n)
        }
    }
    n.g.IntlMessageFormat = i(), n("770801"), n("177486"), n("144062"), n("750854"), n("198823"), n("551576"), n("682422"), n("760388"), n("725589"), n("338770"), n("99783"), n("740635"), n("523332"), n("307163"), n("636681"), n("209012"), n("651811"), n("740191"), n("407837"), n("372097"), n("894996"), n("829028"), n("750879"), n("952874"), n("185851"), n("962066"), n("519708"), n("180583"), delete n.g.IntlMessageFormat, "undefined" == typeof Intl && n("211604");
    var y = "en-US";

    function I() {
        var e;
        return null != (e = (Array.isArray(navigator.languages) ? navigator.languages[0] : null) || navigator.language || navigator.browserLanguage || navigator.userLanguage) ? e : ""
    }
    var h = function() {
            function e(t) {
                s(this, e), f(this, "_context", {
                    messages: {},
                    defaultMessages: {},
                    locale: y
                }), f(this, "_parsedMessages", {}), f(this, "_getParsedMessages", void 0), this._getParsedMessages = t
            }
            return c(e, [{
                key: "getMessages",
                value: function() {
                    return this._parsedMessages
                }
            }]), e
        }(),
        O = function(e) {
            _(n, e);
            var t = m(n);

            function n() {
                var e;
                return s(this, n), e = t.apply(this, arguments), f(u(e), "_refresh", function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(t.defaultMessages).forEach(function(r) {
                        Object.defineProperty(n, r, {
                            configurable: !0,
                            get: function() {
                                return delete n[r], n[r] = e._getParsedMessages(t, r, e._refresh)
                            }
                        })
                    }), n
                }), e
            }
            return c(n, [{
                key: "refresh",
                value: function(e) {
                    this._context = e, this._refresh(e, this._parsedMessages)
                }
            }]), n
        }(h),
        T = function(e) {
            _(n, e);
            var t = m(n);

            function n(e) {
                var r;
                return s(this, n), f(u(r = t.call(this, e)), "_createProxy", function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r._context;
                    return new Proxy({}, {
                        get: function(t, n) {
                            return t[n] || (t[n] = r._getParsedMessages(e, n, r._createProxy))
                        }
                    })
                }), r._parsedMessages = r._createProxy(r._context), r
            }
            return c(n, [{
                key: "refresh",
                value: function(e) {
                    var t = this;
                    Object.assign(this._context, e), Object.keys(this._parsedMessages).forEach(function(e) {
                        delete t._parsedMessages[e]
                    })
                }
            }]), n
        }(h),
        S = function(e) {
            _(r, e);
            var t = m(r);

            function r(e) {
                var o, i = e.initialLocale,
                    l = e.getMessages,
                    c = e.getLanguages;
                s(this, r), f(u(o = t.call(this)), "Messages", void 0), f(u(o), "loadPromise", Promise.resolve()), f(u(o), "initialLanguageLoad", void 0), f(u(o), "resolveLanguageLoaded", function() {}), f(u(o), "_languages", []), f(u(o), "_provider", void 0), f(u(o), "_chosenLocale", ""), f(u(o), "_requestedLocale", void 0), f(u(o), "_getMessages", void 0), f(u(o), "_getParsedMessages", function(e, t, n) {
                    var r = e.messages,
                        o = e.defaultMessages,
                        i = e.locale,
                        u = r[t] || o[t];
                    if ("object" == typeof u) return n({
                        messages: u,
                        defaultMessages: o[t],
                        locale: i
                    });
                    try {
                        return (0, a.getMessage)(u, i)
                    } catch (e) {
                        if (console.warn("Failed parsing intl key '".concat(String(t), "' in locale '").concat(i, "' defaulting to English"), e), "string" == typeof(u = o[t])) return (0, a.getMessage)(u, i)
                    }
                    return ""
                }), f(u(o), "_handleNewListener", function(e) {
                    if ("locale" === e) o.emit(e, o._chosenLocale)
                }), o.initialLanguageLoad = new Promise(function(e, t) {
                    o.resolveLanguageLoaded = e
                }), Intl.__addLocaleData && Intl.__addLocaleData(n("201688")), o._languages = c(), o._provider = null != window.Proxy ? new T(o._getParsedMessages) : new O(o._getParsedMessages), o.Messages = o._provider.getMessages(), o._getMessages = l;
                try {
                    new Intl.NumberFormat(i, {}), o.setLocale(i || o.getDefaultLocale())
                } catch (e) {
                    o.setLocale(o.getDefaultLocale())
                }
                return o.on("newListener", o._handleNewListener), o
            }
            return c(r, [{
                key: "updateMessagesForExperiment",
                value: function(e, t) {
                    var n = this,
                        r = this._fetchMessages(e);
                    if (E(r, Promise)) {
                        r.then(function(r) {
                            n._applyMessagesForLocale(t(r), e)
                        });
                        return
                    }
                    this._applyMessagesForLocale(t(r), e)
                }
            }, {
                key: "setLocale",
                value: function(e) {
                    if (this._chosenLocale !== e) {
                        this._requestedLocale = e;
                        var t = this._chosenLocale;
                        this._chosenLocale = e, this.loadPromise = this._loadMessagesForLocale(e), this.emit("locale", this._chosenLocale, t)
                    }
                }
            }, {
                key: "setUpdateRules",
                value: function(e) {
                    (0, a.setUpdateRules)(e)
                }
            }, {
                key: "getLanguages",
                value: function() {
                    return this._languages
                }
            }, {
                key: "getAvailableLocales",
                value: function() {
                    var e = this;
                    return this._languages.filter(function(e) {
                        return e.enabled
                    }).map(function(t) {
                        var n, r = t.code,
                            o = t.name;
                        return {
                            value: r,
                            name: o,
                            localizedName: null !== (n = e.Messages[r]) && void 0 !== n ? n : o
                        }
                    }).sort(function(e, t) {
                        var n = e.name,
                            r = t.name;
                        return n = n.toLowerCase(), n < (r = r.toLowerCase()) ? -1 : n > r ? 1 : 0
                    })
                }
            }, {
                key: "getLocale",
                value: function() {
                    return this._chosenLocale
                }
            }, {
                key: "getLocaleInfo",
                value: function() {
                    var e = this;
                    return this._languages.find(function(t) {
                        return t.code === e._chosenLocale
                    })
                }
            }, {
                key: "getDefaultLocale",
                value: function() {
                    var e, t, n, r = null !== (e = I()) && void 0 !== e ? e : y,
                        o = this._languages.filter(function(e) {
                            return e.enabled
                        }).map(function(e) {
                            return e.code
                        });
                    if (o.includes(r)) return r;
                    var i = r.split("-");
                    return o.includes(i[0]) ? i[0] : "zh" === i[0] && i.length > 1 && "Hant" === i[1] ? null !== (t = o.find(function(e) {
                        return "zh-TW" === e
                    })) && void 0 !== t ? t : y : null !== (n = o.find(function(e) {
                        return e.split("-")[0] === i[0]
                    })) && void 0 !== n ? n : y
                }
            }, {
                key: "_loadMessagesForLocale",
                value: function(e) {
                    var t = this,
                        n = this._fetchMessages(e);
                    return E(n, Promise) ? n.then(function(n) {
                        return t._applyMessagesForLocale(n, e)
                    }) : (this._applyMessagesForLocale(n, e), Promise.resolve())
                }
            }, {
                key: "_applyMessagesForLocale",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._findMessages(y);
                    this._requestedLocale === t && (this._provider.refresh({
                        messages: e,
                        defaultMessages: n,
                        locale: t
                    }), this.resolveLanguageLoaded())
                }
            }, {
                key: "_findMessages",
                value: function(e) {
                    var t = this._fetchMessages(e);
                    if (E(t, Promise)) throw Error("Messages are still loading.");
                    return t
                }
            }, {
                key: "_fetchMessages",
                value: function(e) {
                    var t = this,
                        n = e === y ? function() {
                            throw Error("Error Loading ".concat(y))
                        } : function() {
                            return (console.warn("Unsupported Locale", e), -1 === e.indexOf("-")) ? t._fetchMessages(y) : t._fetchMessages(e.split("-")[0])
                        };
                    try {
                        var r = this._getMessages(e);
                        return E(r, Promise) ? r.catch(n) : r
                    } catch (e) {
                        return n()
                    }
                }
            }]), r
        }(r.EventEmitter)
}