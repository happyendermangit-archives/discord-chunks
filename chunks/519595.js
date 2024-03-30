function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("470079"),
        r = n("525654"),
        c = n.n(r),
        o = n("784184"),
        i = n("629815"),
        f = n("264518"),
        d = n("241174"),
        u = n("481971"),
        l = n("281767"),
        s = n("941504");

    function b(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && v(e, t)
        }(_, e);
        var t, n, r, d, y, E = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, a, r, c = m(t);
            if (n) {
                var o = m(this).constructor;
                r = Reflect.construct(c, arguments, o)
            } else r = c.apply(this, arguments);
            return e = this, (a = r) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(a) || "function" == typeof a) ? a : b(e)
        });

        function _() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _), e = E.apply(this, arguments), h(b(e), "handlePermission", function(e) {
                var t = e.kind,
                    n = e.granted,
                    r = "Firefox" === c().name ? l.HelpdeskArticles.ENABLE_MIC_FIREFOX : l.HelpdeskArticles.ENABLE_MIC_CHROME;
                if (!n) {
                    var i = "audio" !== t;
                    (0, o.openModal)(function(e) {
                        return a.createElement(f.default, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), a.forEach(function(t) {
                                    h(e, t, n[t])
                                })
                            }
                            return e
                        }({
                            title: i ? s.default.Messages.NO_CAMERA_TITLE : s.default.Messages.NO_MIC_TITLE,
                            body: i ? s.default.Messages.NO_CAMERA_BODY : s.default.Messages.NO_MIC_BODY,
                            onConfirm: function() {
                                return window.open(u.default.getArticleURL(r), "_blank")
                            },
                            confirmText: s.default.Messages.HELP_DESK
                        }, e))
                    })
                }
            }), e
        }
        return r = _, d = [{
            key: "_initialize",
            value: function() {
                i.default.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
            }
        }, {
            key: "_terminate",
            value: function() {
                i.default.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
            }
        }], p(r.prototype, d), y && p(r, y), _
    }(d.default);
    t.default = new y
}