function(e, t, r) {
    "use strict";
    let n;
    r.r(t), r.d(t, {
        default: function() {
            return T
        }
    });
    var u = r("917351"),
        o = r("446674"),
        l = r("913144");
    let i = [],
        a = !1;
    let s = i,
        c = {},
        f = null,
        d = e => {
            s = (0, u.cloneDeep)(e);
            let t = {};
            s.forEach(e => {
                t[e.id] = e
            }), c = t
        };
    class E extends o.default.Store {
        get isFetching() {
            return a
        }
        get fetchError() {
            return n
        }
        get profileEffects() {
            return s
        }
        get tryItOutId() {
            return f
        }
        getProfileEffectById(e) {
            return null != e ? c[e] : void 0
        }
    }
    E.displayName = "ProfileEffectStore";
    var T = new E(l.default, {
        USER_PROFILE_EFFECTS_FETCH: () => {
            a = !0
        },
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
            let {
                profileEffects: t
            } = e;
            a = !1, d(0 === t.length ? i : t)
        },
        USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            a = !1, n = t, d(i)
        },
        PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
            let {
                id: t
            } = e;
            f = t
        },
        LOGOUT: e => {
            a = !1, d(i), f = null
        }
    })
}