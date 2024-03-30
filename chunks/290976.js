function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("512722"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("502752");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                c(e, t, n[t])
            })
        }
        return e
    }

    function _(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = null,
        m = new Map;

    function y(e) {
        var t = m.get(e);
        return null == t ? (console.warn("Window state not initialized", e), {
            isElementFullscreen: !1,
            focused: !1,
            windowSize: {
                width: 0,
                height: 0
            },
            visible: !1
        }) : t
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "isFocused",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                return y(e).focused
            }
        }, {
            key: "isVisible",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                return y(e).visible
            }
        }, {
            key: "getFocusedWindowId",
            value: function() {
                var e = null;
                return m.forEach(function(t, n) {
                    t.focused && (e = n)
                }), e
            }
        }, {
            key: "getLastFocusedWindowId",
            value: function() {
                return p
            }
        }, {
            key: "isElementFullScreen",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                return y(e).isElementFullscreen
            }
        }, {
            key: "windowSize",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                return y(e).windowSize
            }
        }], l(r.prototype, o), i && l(r, i), u
    }(a.default.Store);
    c(I, "displayName", "WindowStore");
    var h = new I(u.default, {
        WINDOW_INIT: function(e) {
            i()(!m.has(e.windowId), "Window initialized multiple times");
            var t = e.width,
                n = e.height,
                r = e.isElementFullscreen,
                o = e.focused,
                a = e.visible;
            return m.set(e.windowId, {
                windowSize: {
                    width: t,
                    height: n
                },
                isElementFullscreen: r,
                focused: o,
                visible: a
            }), o && (p = e.windowId), !0
        },
        WINDOW_FULLSCREEN_CHANGE: function(e) {
            var t = y(e.windowId);
            return t.isElementFullscreen !== e.isElementFullscreen && (m.set(e.windowId, _(d({}, t), {
                isElementFullscreen: e.isElementFullscreen
            })), !0)
        },
        WINDOW_FOCUS: function(e) {
            var t = y(e.windowId);
            return t.focused !== e.focused && (e.focused && (p = e.windowId), m.set(e.windowId, _(d({}, t), {
                focused: e.focused
            })), !0)
        },
        WINDOW_RESIZED: function(e) {
            var t = y(e.windowId);
            return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (m.set(e.windowId, _(d({}, t), {
                windowSize: {
                    width: e.width,
                    height: e.height
                }
            })), !0)
        },
        WINDOW_UNLOAD: function(e) {
            return m.delete(e.windowId), p === e.windowId && (p = null), !0
        },
        WINDOW_VISIBILITY_CHANGE: function(e) {
            var t = y(e.windowId);
            return t.visible !== e.visible && (m.set(e.windowId, _(d({}, t), {
                visible: e.visible
            })), !0)
        }
    });
    Promise.resolve().then(n.bind(n, "870331")).then(function(e) {
        (0, e.addExtraAnalyticsDecorator)(function(e) {
            e.client_app_state = h.isFocused() ? "focused" : "unfocused"
        })
    }), t.default = h
}