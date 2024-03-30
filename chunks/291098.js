function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var a = n("470079"),
        r = n("525654"),
        c = n.n(r),
        o = n("445131"),
        i = n("898511"),
        f = n("946188"),
        d = n("784184"),
        u = n("765457"),
        l = n("290976"),
        s = n("251552"),
        b = n("739226"),
        p = n("481971"),
        h = n("374550"),
        m = n("153732"),
        v = n("131900"),
        y = n("603157"),
        E = n("281767"),
        _ = n("941504");

    function g(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function w(e, t) {
        return (w = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var R = i.default.connectStores([l.default], function() {
            return {
                focused: l.default.isFocused()
            }
        })(y.default),
        T = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && w(e, t)
            }(T, e);
            var t, n, r, i, l, y = (t = T, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, a, r, c = I(t);
                if (n) {
                    var o = I(this).constructor;
                    r = Reflect.construct(c, arguments, o)
                } else r = c.apply(this, arguments);
                return e = this, (a = r) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(a) || "function" == typeof a) ? a : g(e)
            });

            function T() {
                var e, t, n, a;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, T), e = y.apply(this, arguments), t = g(e), n = "handleDownload", a = function() {
                    window.open(e.getPlatform() === h.PlatformTypes.WINDOWS ? p.default.getArticleURL(E.HelpdeskArticles.CORRUPT_INSTALLATION) : E.MarketingURLs.DOWNLOAD)
                }, n in t ? Object.defineProperty(t, n, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = a, e
            }
            return r = T, i = [{
                key: "getPlatform",
                value: function() {
                    var e, t = null === (e = c().os) || void 0 === e ? void 0 : e.family;
                    return null != t && /^win/i.test(t) ? h.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? h.PlatformTypes.OSX : h.PlatformTypes.LINUX
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e;
                    e = window.require("electron").remote.getCurrentWindow(), v.default.minimize = function() {
                        return e.minimize()
                    }, v.default.maximize = function() {
                        e.isMaximized() ? e.unmaximize() : e.maximize()
                    }, v.default.close = function() {
                        return e.close()
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = a.createElement("div", null, a.createElement("p", null, _.default.Messages.VERY_OUT_OF_DATE_DESCRIPTION, " ", a.createElement(u.default, {
                            src: b.default.getURL(f.default.convert.fromCodePoint("1f44c")),
                            emojiName: ":ok_hand:",
                            animated: !1
                        }))),
                        t = a.createElement(d.Button, {
                            size: d.ButtonSizes.LARGE,
                            onClick: this.handleDownload
                        }, _.default.Messages.DOWNLOAD);
                    return a.createElement(a.Fragment, null, a.createElement(o.Helmet, null, a.createElement("html", {
                        className: (0, m.getThemeClass)(E.ThemeTypes.DARK)
                    })), a.createElement(R, {
                        type: this.getPlatform()
                    }), a.createElement(s.default, {
                        title: _.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                        note: e,
                        action: t
                    }))
                }
            }], O(r.prototype, i), l && O(r, l), T
        }(a.PureComponent)
}