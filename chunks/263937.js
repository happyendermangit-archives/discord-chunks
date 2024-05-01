function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        s = n("433517"),
        a = n("570140"),
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
        var e, t, n, i, r, s;
        let a = o.default.settings;
        return {
            gifAutoPlay: null === (t = a.textAndImages) || void 0 === t ? void 0 : null === (e = t.gifAutoPlay) || void 0 === e ? void 0 : e.value,
            animateEmoji: null === (i = a.textAndImages) || void 0 === i ? void 0 : null === (n = i.animateEmoji) || void 0 === n ? void 0 : n.value,
            animateStickers: null === (s = a.textAndImages) || void 0 === s ? void 0 : null === (r = s.animateStickers) || void 0 === r ? void 0 : r.value
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
        let t = null !== (e = s.Storage.get("UserSettingsStoreOverrides")) && void 0 !== e ? e : {};
        return s.Storage.remove("UserSettingsStoreOverrides"), t
    }]), t.default = new E(a.default, {
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