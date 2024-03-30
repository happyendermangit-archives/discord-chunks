function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("242880"),
        s = n("629815"),
        l = n("281767");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
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

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = {},
        y = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
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
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
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
                value: function(e) {
                    m = null != e ? e : {}
                }
            }, {
                key: "getState",
                value: function() {
                    return m
                }
            }, {
                key: "shouldSync",
                value: function(e) {
                    var t;
                    return (null === (t = m[e]) || void 0 === t ? void 0 : t.shouldSync) !== !1
                }
            }, {
                key: "getTextSettings",
                value: function() {
                    var e;
                    return null === (e = m.text) || void 0 === e ? void 0 : e.settings
                }
            }, {
                key: "getAppearanceSettings",
                value: function() {
                    var e;
                    return null === (e = m.appearance) || void 0 === e ? void 0 : e.settings
                }
            }], c(r.prototype, o), i && c(r, i), u
        }(a.default.PersistedStore);
    f(y, "displayName", "SelectivelySyncedUserSettingsStore"), f(y, "persistKey", "SelectivelySyncedUserSettingsStore"), f(y, "migrations", [function() {
        var e, t, n = null !== (e = u.Storage.get("UserSettingsSync")) && void 0 !== e ? e : {},
            r = null !== (t = u.Storage.get("UserSettingsStore")) && void 0 !== t ? t : {};
        u.Storage.remove("UserSettingsSync");
        var o = {};
        return !1 === n[l.UserSettingsSections.TEXT] && (o.text = {
            shouldSync: !1,
            settings: i().pick(r, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay"])
        }), !1 === n[l.UserSettingsSections.APPEARANCE] && (o.appearance = {
            shouldSync: !1,
            settings: i().pick(r, ["theme", "clientThemeSettings", "developerMode"])
        }), o
    }, function(e) {
        var t, n;
        if ((null == e ? void 0 : null === (n = e.appearance) || void 0 === n ? void 0 : null === (t = n.settings) || void 0 === t ? void 0 : t.theme) === "amoled") return E(_({}, e), {
            appearance: E(_({}, e.appearance), {
                settings: E(_({}, e.appearance.settings), {
                    theme: "midnight"
                })
            })
        })
    }]), t.default = new y(s.default, {
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function(e) {
            var t = e.changes;
            for (var n in t) {
                var r, o = t[n],
                    i = o.shouldSync,
                    a = o.settings;
                if (!0 === i) {
                    delete m[n];
                    continue
                }!1 === i && (m[n] = {
                    shouldSync: i,
                    settings: {}
                });
                if ((null === (r = m[n]) || void 0 === r ? void 0 : r.shouldSync) === !1)
                    for (var u in a) m[n].settings[u] = a[u]
            }
        },
        LOGOUT: function() {
            m = {}
        }
    })
}