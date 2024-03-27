function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, s, a, o, l = n("392711"),
        u = n("442837"),
        d = n("570140");
    let _ = [],
        c = !1;
    let E = _,
        I = {},
        T = null,
        f = e => {
            E = (0, l.cloneDeep)(e);
            let t = {};
            E.forEach(e => {
                t[e.id] = e
            }), I = t
        };
    class S extends(o = u.default.Store) {
        get isFetching() {
            return c
        }
        get fetchError() {
            return i
        }
        get profileEffects() {
            return E
        }
        get tryItOutId() {
            return T
        }
        getProfileEffectById(e) {
            return null != e ? I[e] : void 0
        }
    }
    a = "ProfileEffectStore", (s = "displayName") in(r = S) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new S(d.default, {
        USER_PROFILE_EFFECTS_FETCH: () => {
            c = !0
        },
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
            let {
                profileEffects: t
            } = e;
            c = !1, f(0 === t.length ? _ : t)
        },
        USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            c = !1, i = t, f(_)
        },
        PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
            let {
                id: t
            } = e;
            T = t
        },
        LOGOUT: e => {
            c = !1, f(_), T = null
        }
    })
}