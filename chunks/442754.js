function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("902356"),
        u = n("868615");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = "OverridePremiumTypeStore",
        _ = {
            premiumTypeOverride: u.UNSELECTED_PREMIUM_TYPE_OVERRIDE,
            premiumTypeActual: u.UNSELECTED_PREMIUM_TYPE_OVERRIDE
        };

    function E(e) {
        var t = e.user;
        _.premiumTypeActual = (0, a.getPremiumTypeFromRawValue)(t.premium_type)
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
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
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
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
            value: function(e) {
                if (null != e) {
                    _ = e;
                    return
                }
                _.premiumTypeOverride = u.UNSELECTED_PREMIUM_TYPE_OVERRIDE
            }
        }, {
            key: "getPremiumTypeOverride",
            value: function() {
                return _.premiumTypeOverride
            }
        }, {
            key: "getPremiumTypeActual",
            value: function() {
                return _.premiumTypeActual
            }
        }, {
            key: "getState",
            value: function() {
                return _
            }
        }, {
            key: "premiumType",
            get: function() {
                return _.premiumTypeOverride
            }
        }], s(r.prototype, o), i && s(r, i), l
    }(o.default.PersistedStore);
    l(p, "displayName", d), l(p, "persistKey", d), t.default = new p(i.default, {
        SET_PREMIUM_TYPE_OVERRIDE: function(e) {
            var t = e.premiumType;
            _.premiumTypeOverride = t
        },
        CURRENT_USER_UPDATE: E,
        CONNECTION_OPEN: E
    })
}