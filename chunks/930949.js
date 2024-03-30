function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("870331"),
        u = n("217014"),
        s = n("281767");

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
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function E(e, t) {
        a.default.track(s.AnalyticEvents.STREAMER_MODE_TOGGLE, {
            enabled: e,
            automatic: t
        })
    }
    var p = {
            enabled: !1,
            autoToggle: !0,
            hideInstantInvites: !0,
            hidePersonalInformation: !0,
            disableSounds: !0,
            disableNotifications: !0,
            enableContentProtection: !1
        },
        m = {},
        y = d({}, p),
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(s, e);
            var t, n, r, o, i, a = (t = s, n = function() {
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

            function s() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), a.apply(this, arguments)
            }
            return r = s, o = [{
                key: "initialize",
                value: function(e) {
                    Object.assign(m, e), this.syncWith([u.default], function() {
                        var e, t, n = u.default.getId();
                        y = null != n ? (null == (t = m[e = n]) && (t = m[e] = d({}, p)), t) : d({}, p)
                    })
                }
            }, {
                key: "getState",
                value: function() {
                    return m
                }
            }, {
                key: "getSettings",
                value: function() {
                    return y
                }
            }, {
                key: "enabled",
                get: function() {
                    return y.enabled
                }
            }, {
                key: "autoToggle",
                get: function() {
                    return y.autoToggle
                }
            }, {
                key: "hideInstantInvites",
                get: function() {
                    return this.enabled && y.hideInstantInvites
                }
            }, {
                key: "hidePersonalInformation",
                get: function() {
                    return this.enabled && y.hidePersonalInformation
                }
            }, {
                key: "disableSounds",
                get: function() {
                    return this.enabled && y.disableSounds
                }
            }, {
                key: "disableNotifications",
                get: function() {
                    return this.enabled && y.disableNotifications
                }
            }, {
                key: "enableContentProtection",
                get: function() {
                    return this.enabled && y.enableContentProtection
                }
            }], l(r.prototype, o), i && l(r, i), s
        }(o.default.PersistedStore);
    c(I, "displayName", "StreamerModeStore"), c(I, "persistKey", "StreamerModeStore"), c(I, "migrations", [function(e) {
        var t = u.default.getId();
        return null == e || null == t ? {} : c({}, t, d({}, e))
    }]), t.default = new I(i.default, {
        LOGOUT: function(e) {
            !e.isSwitchingAccount && (m = {})
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            e.userId in m && delete m[e.userId]
        },
        STREAMER_MODE_UPDATE: function(e) {
            var t = d({}, y);
            return y[e.key] = e.value, "enabled" === e.key ? E(e.value, !1) : a.default.track(s.AnalyticEvents.UPDATE_STREAMER_MODE_SETTINGS, {
                enabled: y.enabled,
                automatic: y.autoToggle,
                disable_notifications: y.disableNotifications,
                disable_sounds: y.disableSounds,
                hide_instant_invites: y.hideInstantInvites,
                hide_personal_info: y.hidePersonalInformation,
                enable_content_protection: y.enableContentProtection,
                old_enabled: t.enabled,
                old_automatic: t.autoToggle,
                old_disable_notifications: t.disableNotifications,
                old_disable_sounds: t.disableSounds,
                old_hide_instant_invites: t.hideInstantInvites,
                old_hide_personal_info: t.hidePersonalInformation,
                old_enable_content_protection: t.enableContentProtection
            }), !0
        },
        RUNNING_STREAMER_TOOLS_CHANGE: function(e) {
            if (!y.autoToggle) return !1;
            var t = e.count > 0;
            return y.enabled = t, E(t, !0), !0
        }
    })
}