function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t);
    var s, a, o, l, u = n("392711"),
        d = n("442837"),
        _ = n("570140");
    let c = [],
        E = !1;
    let I = c,
        T = {},
        f = null;
    let S = 0,
        A = e => {
            I = (0, u.cloneDeep)(e);
            let t = {};
            I.forEach(e => {
                t[e.id] = e
            }), T = t
        };
    class h extends(l = d.default.Store) {
        get isFetching() {
            return E
        }
        get fetchError() {
            return i
        }
        get profileEffects() {
            return I
        }
        get tryItOutId() {
            return f
        }
        canFetch() {
            return null == r || Date.now() >= r
        }
        hasFetched() {
            return null != r && null == i
        }
        getProfileEffectById(e) {
            return null != e ? T[e] : void 0
        }
    }
    o = "ProfileEffectStore", (a = "displayName") in(s = h) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new h(_.default, {
        USER_PROFILE_EFFECTS_FETCH: () => {
            E = !0
        },
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
            let {
                profileEffects: t
            } = e;
            E = !1, i = void 0, r = Date.now() + 3e5, S = 0, A(0 === t.length ? c : t)
        },
        USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            E = !1, i = t, r = Date.now() + Math.min(6e4 * 2 ** S, 36e5), ++S, A(c)
        },
        PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
            let {
                id: t
            } = e;
            f = t
        },
        LOGOUT: e => {
            E = !1, A(c), f = null
        }
    })
}