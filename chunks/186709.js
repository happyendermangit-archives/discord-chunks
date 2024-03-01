function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var i = n("446674"),
        r = n("95410"),
        o = n("913144"),
        s = n("374363");
    let l = {},
        a = {};

    function u() {
        var e, t, n, i, r, o;
        let l = s.default.settings;
        return {
            gifAutoPlay: null === (t = l.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
            animateEmoji: null === (i = l.textAndImages) || void 0 === i ? void 0 : null === (n = i.animateEmoji) || void 0 === n ? void 0 : n.value,
            animateStickers: null === (o = l.textAndImages) || void 0 === o ? void 0 : null === (r = o.animateStickers) || void 0 === r ? void 0 : r.value
        }
    }

    function c() {
        return a = u(), !1
    }
    class d extends i.default.PersistedStore {
        initialize(e) {
            l = null != e ? e : {}, this.syncWith([s.default], c)
        }
        getState() {
            return l
        }
        getAppliedOverrideReasonKey(e) {
            var t;
            return null === (t = l[e]) || void 0 === t ? void 0 : t.reasonKey
        }
        getOverride(e) {
            return l[e]
        }
    }
    d.displayName = "UserSettingsOverridesStore", d.persistKey = "UserSettingsOverridesStore", d.migrations = [() => {
        var e;
        let t = null !== (e = r.default.get("UserSettingsStoreOverrides")) && void 0 !== e ? e : {};
        return r.default.remove("UserSettingsStoreOverrides"), t
    }];
    var _ = new d(o.default, {
        USER_SETTINGS_PROTO_UPDATE: function() {
            let e = u(),
                t = !1;
            for (let n in e) e[n] !== a[n] && (delete l[n], t = !0);
            return t
        },
        USER_SETTINGS_OVERRIDE_APPLY: function(e) {
            let {
                settings: t
            } = e;
            l = {
                ...l,
                ...t
            }
        },
        USER_SETTINGS_OVERRIDE_CLEAR: function(e) {
            let {
                settings: t
            } = e;
            for (let e of t) delete l[e]
        },
        LOGOUT: function() {
            l = {}
        },
        LOGIN_SUCCESS: function() {
            l = {}
        }
    })
}