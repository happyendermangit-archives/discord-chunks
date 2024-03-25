function(e, t, i) {
    "use strict";
    let l;
    i.r(t), i.d(t, {
        default: function() {
            return g
        }
    });
    var r = i("917351"),
        n = i("446674"),
        u = i("913144");
    let o = [],
        s = !1;
    let a = o,
        d = {},
        f = null,
        c = e => {
            a = (0, r.cloneDeep)(e);
            let t = {};
            a.forEach(e => {
                t[e.id] = e
            }), d = t
        };
    class h extends n.default.Store {
        get isFetching() {
            return s
        }
        get fetchError() {
            return l
        }
        get profileEffects() {
            return a
        }
        get tryItOutId() {
            return f
        }
        getProfileEffectById(e) {
            return null != e ? d[e] : void 0
        }
    }
    h.displayName = "ProfileEffectStore";
    var g = new h(u.default, {
        USER_PROFILE_EFFECTS_FETCH: () => {
            s = !0
        },
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: e => {
            let {
                profileEffects: t
            } = e;
            s = !1, c(0 === t.length ? o : t)
        },
        USER_PROFILE_EFFECTS_FETCH_FAILURE: e => {
            let {
                error: t
            } = e;
            s = !1, l = t, c(o)
        },
        PROFILE_EFFECTS_SET_TRY_IT_OUT: e => {
            let {
                id: t
            } = e;
            f = t
        },
        LOGOUT: e => {
            s = !1, c(o), f = null
        }
    })
}