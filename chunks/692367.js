function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        defineProtoSetting: function() {
            return c
        },
        wrapSettingWithOverride: function() {
            return d
        },
        wrapSettingWithSelectiveSyncing: function() {
            return f
        }
    });
    var r = n("898511"),
        o = n("629815"),
        i = n("92118"),
        a = n("968574"),
        u = n("851285"),
        s = n("382021");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e, t, n, o) {
        var i = function() {
            var r;
            return n(null === (r = u.default.settings[e]) || void 0 === r ? void 0 : r[t])
        };
        return {
            getSetting: i,
            updateSetting: _(i, function(n) {
                return a.PreloadedUserSettingsActionCreators.updateAsync(e, function(e) {
                    e[t] = o(n, e[t])
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }),
            useSetting: function() {
                return (0, r.useStateFromStores)([u.default], i)
            }
        }
    }

    function f(e, t, n) {
        var a = function() {
            var r, o = i.default.getState()[t];
            return null !== (r = null == o ? void 0 : o.settings[n]) && void 0 !== r ? r : e.getSetting()
        };
        return {
            getSetting: a,
            useSetting: function() {
                var o = e.useSetting(),
                    a = (0, r.useStateFromStores)([i.default], function() {
                        var e = i.default.getState()[t];
                        return null == e ? void 0 : e.settings[n]
                    });
                return null != a ? a : o
            },
            updateSetting: _(a, function(r) {
                return i.default.shouldSync(t) ? e.updateSetting(r) : (o.default.dispatch({
                    type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                    changes: l({}, t, {
                        settings: l({}, n, r)
                    })
                }), Promise.resolve())
            })
        }
    }

    function d(e, t, n, r) {
        var i = function() {
            var t;
            return null !== (t = n()) && void 0 !== t ? t : e.getSetting()
        };
        return {
            getSetting: i,
            useSetting: function() {
                var t = e.useSetting(),
                    n = r();
                return null != n ? n : t
            },
            updateSetting: _(i, function(n) {
                return o.default.dispatch({
                    type: "USER_SETTINGS_OVERRIDE_CLEAR",
                    settings: [t]
                }), e.updateSetting(n)
            })
        }
    }

    function _(e, t) {
        return function(n) {
            return "function" == typeof n ? t(n(e())) : t(n)
        }
    }
}