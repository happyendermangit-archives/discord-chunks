function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l, c = n("153832"),
        f = n("898511"),
        d = n("242880"),
        _ = n("945816"),
        E = n("629815"),
        p = n("463272"),
        m = n("428009"),
        y = n("618396"),
        I = n("374550"),
        h = n("10132");

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var v = "BrowserHandoffStore",
        g = !1,
        A = new _.Timeout;

    function b() {
        null != a && null != u && (window.open("".concat(a, "&key=").concat(u)), y.default.focus(null, !0))
    }

    function N() {
        u = null, A.stop(), g = !1, d.Storage.set(v, g)
    }

    function R() {
        N()
    }
    var C = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
        }(l, e);
        var t, n, r, o, i, a = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = T(t);
            if (n) {
                var a = T(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), a.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function() {
                !1 !== d.Storage.get(v) && (g = I.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
            }
        }, {
            key: "isHandoffAvailable",
            value: function() {
                return !h.ProcessArgs.isDisallowPopupsSet() && g
            }
        }, {
            key: "user",
            get: function() {
                return s
            }
        }, {
            key: "key",
            get: function() {
                return u
            }
        }], O(r.prototype, o), i && O(r, i), l
    }(f.default.Store);
    i = "BrowserHandoffStore", (o = "displayName") in(r = C) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new C(E.default, {
        RPC_SERVER_READY: function(e) {
            a = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), b()
        },
        BROWSER_HANDOFF_BEGIN: function(e) {
            if (null != u) return !1;
            u = (0, c.v4)(), A.start(e.timeout, function() {
                return (0, p.handoffEnd)()
            }), b()
        },
        BROWSER_HANDOFF_FROM_APP: function(e) {
            var t = e.handoffKey,
                n = e.handoffToken,
                r = e.timeout;
            if (null == t || null == n) return !1;
            g = !0, A.start(r, function() {
                return (0, p.handoffEnd)()
            })
        },
        BROWSER_HANDOFF_UNAVAILABLE: N,
        BROWSER_HANDOFF_SET_USER: function(e) {
            s = new m.default(e.user)
        },
        LOGIN: R,
        LOGIN_SUCCESS: R,
        LOGOUT: R,
        REGISTER: R
    })
}