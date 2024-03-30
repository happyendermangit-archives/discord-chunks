function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("242880"),
        a = n("629815"),
        u = n("851285");

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
    var d = {},
        _ = {};

    function E() {
        var e, t, n, r, o, i, a = u.default.settings;
        return {
            gifAutoPlay: null === (t = a.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
            animateEmoji: null === (r = a.textAndImages) || void 0 === r ? void 0 : null === (n = r.animateEmoji) || void 0 === n ? void 0 : n.value,
            animateStickers: null === (i = a.textAndImages) || void 0 === i ? void 0 : null === (o = i.animateStickers) || void 0 === o ? void 0 : o.value
        }
    }

    function p() {
        return _ = E(), !1
    }
    var m = function(e) {
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
                d = null != e ? e : {}, this.syncWith([u.default], p)
            }
        }, {
            key: "getState",
            value: function() {
                return d
            }
        }, {
            key: "getAppliedOverrideReasonKey",
            value: function(e) {
                var t;
                return null === (t = d[e]) || void 0 === t ? void 0 : t.reasonKey
            }
        }, {
            key: "getOverride",
            value: function(e) {
                return d[e]
            }
        }], s(r.prototype, o), i && s(r, i), l
    }(o.default.PersistedStore);
    l(m, "displayName", "UserSettingsOverridesStore"), l(m, "persistKey", "UserSettingsOverridesStore"), l(m, "migrations", [function() {
        var e, t = null !== (e = i.Storage.get("UserSettingsStoreOverrides")) && void 0 !== e ? e : {};
        return i.Storage.remove("UserSettingsStoreOverrides"), t
    }]), t.default = new m(a.default, {
        USER_SETTINGS_PROTO_UPDATE: function() {
            var e = E(),
                t = !1;
            for (var n in e) e[n] !== _[n] && (delete d[n], t = !0);
            return t
        },
        USER_SETTINGS_OVERRIDE_APPLY: function(e) {
            var t = e.settings;
            d = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        l(e, t, n[t])
                    })
                }
                return e
            }({}, d, t)
        },
        USER_SETTINGS_OVERRIDE_CLEAR: function(e) {
            var t = e.settings,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    delete d[u]
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        },
        LOGOUT: function() {
            d = {}
        },
        LOGIN_SUCCESS: function() {
            d = {}
        }
    })
}