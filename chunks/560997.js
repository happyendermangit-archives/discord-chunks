function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        defineProtoSetting: function() {
            return u
        },
        wrapSettingWithOverride: function() {
            return _
        },
        wrapSettingWithSelectiveSyncing: function() {
            return d
        }
    });
    var i = n("442837"),
        r = n("570140"),
        a = n("238514"),
        s = n("675478"),
        o = n("581883"),
        l = n("526761");

    function u(e, t, n, r) {
        let a = () => {
            var i;
            return n(null === (i = o.default.settings[e]) || void 0 === i ? void 0 : i[t])
        };
        return {
            getSetting: a,
            updateSetting: c(a, n => s.PreloadedUserSettingsActionCreators.updateAsync(e, e => {
                e[t] = r(n, e[t])
            }, l.UserSettingsDelay.INFREQUENT_USER_ACTION)),
            useSetting: () => (0, i.useStateFromStores)([o.default], a)
        }
    }

    function d(e, t, n) {
        let s = () => {
            var i;
            let r = a.default.getState()[t];
            return null !== (i = null == r ? void 0 : r.settings[n]) && void 0 !== i ? i : e.getSetting()
        };
        return {
            getSetting: s,
            useSetting: () => {
                let r = e.useSetting(),
                    s = (0, i.useStateFromStores)([a.default], () => {
                        let e = a.default.getState()[t];
                        return null == e ? void 0 : e.settings[n]
                    });
                return null != s ? s : r
            },
            updateSetting: c(s, i => a.default.shouldSync(t) ? e.updateSetting(i) : (r.default.dispatch({
                type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                changes: {
                    [t]: {
                        settings: {
                            [n]: i
                        }
                    }
                }
            }), Promise.resolve()))
        }
    }

    function _(e, t, n, i) {
        let a = () => {
            var t;
            return null !== (t = n()) && void 0 !== t ? t : e.getSetting()
        };
        return {
            getSetting: a,
            useSetting: () => {
                let t = e.useSetting(),
                    n = i();
                return null != n ? n : t
            },
            updateSetting: c(a, n => (r.default.dispatch({
                type: "USER_SETTINGS_OVERRIDE_CLEAR",
                settings: [t]
            }), e.updateSetting(n)))
        }
    }

    function c(e, t) {
        return function(n) {
            return "function" == typeof n ? t(n(e())) : t(n)
        }
    }
}