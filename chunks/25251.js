function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t);
    var a, s, o, l, u = n("392711"),
        d = n("442837"),
        _ = n("570140"),
        c = n("358085"),
        E = n("729436");
    let I = [],
        T = !1;
    let f = I,
        S = {},
        h = null;
    let A = 0,
        m = e => {
            f = (0, u.cloneDeep)(e);
            let t = {};
            f.forEach(e => {
                t[e.id] = (0, c.isAndroid)() ? (0, E.applyPatches)(e) : e
            }), S = t
        };
    class N extends(l = d.default.Store) {
        get isFetching() {
            return T
        }
        get fetchError() {
            return i
        }
        get profileEffects() {
            return f
        }
        get tryItOutId() {
            return h
        }
        canFetch() {
            return null == r || Date.now() >= r
        }
        hasFetched() {
            return null != r && null == i
        }
        getProfileEffectById(e) {
            return null != e ? S[e] : void 0
        }
    }
    o = "ProfileEffectStore", (s = "displayName") in(a = N) ? Object.defineProperty(a, s, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[s] = o, t.default = new N(_.default, {
        USER_PROFILE_EFFECTS_FETCH: () => {
            T = !0
        },
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
            let {
                profileEffects: t
            } = e;
            T = !1, i = void 0, r = Date.now() + 3e5, A = 0, m(0 === t.length ? I : t)
        },
        USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            T = !1, i = t, r = Date.now() + Math.min(6e4 * 2 ** A, 36e5), ++A, m(I)
        },
        PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
            let {
                id: t
            } = e;
            h = t
        },
        LOGOUT: e => {
            T = !1, m(I), h = null
        }
    })
}