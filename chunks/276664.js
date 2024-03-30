function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("217014");

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = Object.freeze([]),
        m = {};

    function y(e) {
        m = {}, e.sessions.forEach(function(e) {
            m[e.sessionId] = e
        })
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
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
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
            key: "initialize",
            value: function() {
                this.waitFor(f.default)
            }
        }, {
            key: "getSessions",
            value: function() {
                return m
            }
        }, {
            key: "getSession",
            value: function() {
                var e = f.default.getSessionId();
                return null != e ? this.getSessionById(e) : null
            }
        }, {
            key: "getRemoteActivities",
            value: function() {
                var e = f.default.getSessionId(),
                    t = s().find(m, function(t) {
                        return t.active && t.sessionId !== e
                    });
                return null != t ? t.activities : p
            }
        }, {
            key: "getSessionById",
            value: function(e) {
                return m[e]
            }
        }, {
            key: "getActiveSession",
            value: function() {
                return s().find(m, function(e) {
                    return e.active
                })
            }
        }], d(r.prototype, o), i && d(r, i), u
    }(l.default.Store);
    i = "SessionsStore", (o = "displayName") in(r = I) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new I(c.default, {
        CONNECTION_OPEN: y,
        SESSIONS_REPLACE: y
    })
}