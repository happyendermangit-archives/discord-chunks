function(e, t, n) {
    "use strict";
    n.r(t);
    var l, a = n("442837"),
        u = n("570140");

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let i = null;
    class s extends(l = a.default.PersistedStore) {
        initialize(e) {
            var t;
            i = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : null
        }
        getType() {
            return i
        }
        getState() {
            return {
                type: i
            }
        }
    }
    r(s, "displayName", "NewUserStore"), r(s, "persistKey", "nuf"), t.default = new s(u.default, {
        NUF_NEW_USER: function(e) {
            let {
                newUserType: t
            } = e;
            i = t
        },
        NUF_COMPLETE: function() {
            i = null
        }
    })
}