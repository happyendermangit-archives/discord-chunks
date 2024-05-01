function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        a = n("433517"),
        s = n("570140"),
        o = n("581883");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = {},
        d = {};

    function _() {
        var e, t, n, i, r, a;
        let s = o.default.settings;
        return {
            gifAutoPlay: null === (t = s.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
            animateEmoji: null === (i = s.textAndImages) || void 0 === i ? void 0 : null === (n = i.animateEmoji) || void 0 === n ? void 0 : n.value,
            animateStickers: null === (a = s.textAndImages) || void 0 === a ? void 0 : null === (r = a.animateStickers) || void 0 === r ? void 0 : r.value
        }
    }

    function c() {
        return d = _(), !1
    }
    class E extends(i = r.default.PersistedStore) {
        initialize(e) {
            u = null != e ? e : {}, this.syncWith([o.default], c)
        }
        getState() {
            return u
        }
        getAppliedOverrideReasonKey(e) {
            var t;
            return null === (t = u[e]) || void 0 === t ? void 0 : t.reasonKey
        }
        getOverride(e) {
            return u[e]
        }
    }
    l(E, "displayName", "UserSettingsOverridesStore"), l(E, "persistKey", "UserSettingsOverridesStore"), l(E, "migrations", [() => {
        var e;
        let t = null !== (e = a.Storage.get("UserSettingsStoreOverrides")) && void 0 !== e ? e : {};
        return a.Storage.remove("UserSettingsStoreOverrides"), t
    }]), t.default = new E(s.default, {
        USER_SETTINGS_PROTO_UPDATE: function() {
            let e = _(),
                t = !1;
            for (let n in e) e[n] !== d[n] && (delete u[n], t = !0);
            return t
        },
        USER_SETTINGS_OVERRIDE_APPLY: function(e) {
            let {
                settings: t
            } = e;
            u = {
                ...u,
                ...t
            }
        },
        USER_SETTINGS_OVERRIDE_CLEAR: function(e) {
            let {
                settings: t
            } = e;
            for (let e of t) delete u[e]
        },
        LOGOUT: function() {
            u = {}
        },
        LOGIN_SUCCESS: function() {
            u = {}
        }
    })
}