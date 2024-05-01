function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        s = n("570140"),
        a = n("699516");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let l = !1,
        u = Object.freeze({
            userAffinities: [],
            affinityUserIds: new Set,
            lastFetched: 0
        }),
        d = Object.freeze({
            userAffinitiesMap: new Map,
            affinityUserIds: new Set
        }),
        _ = {
            ...u
        },
        c = {
            ...d
        };

    function E() {
        let e = new Map(_.userAffinities.filter(e => {
                let {
                    user_id: t
                } = e;
                return !a.default.isBlocked(t)
            }).map(e => [e.user_id, e])),
            t = new Set(e.keys());
        c = {
            userAffinitiesMap: e,
            affinityUserIds: t
        }
    }
    class I extends(i = r.default.PersistedStore) {
        initialize(e) {
            this.waitFor(a.default), null != e && (_.userAffinities = e.userAffinities, _.lastFetched = e.lastFetched, E()), this.syncWith([a.default], E)
        }
        needsRefresh() {
            return Date.now() - _.lastFetched > 864e5
        }
        getFetching() {
            return l
        }
        getState() {
            return _
        }
        getUserAffinities() {
            return _.userAffinities
        }
        getUserAffinity(e) {
            return c.userAffinitiesMap.get(e)
        }
        getUserAffinitiesUserIds() {
            return c.affinityUserIds
        }
    }
    o(I, "displayName", "UserAffinitiesStore"), o(I, "persistKey", "UserAffinitiesStore"), o(I, "migrations", [e => null]), t.default = new I(s.default, {
        LOAD_USER_AFFINITIES_SUCCESS: function(e) {
            var t;
            let {
                affinities: n
            } = e;
            _.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], _.lastFetched = Date.now(), E(), l = !1
        },
        LOAD_USER_AFFINITIES: function() {
            l = !0
        },
        LOAD_USER_AFFINITIES_FAILURE: function() {
            l = !1
        },
        LOGOUT: function() {
            _ = {
                ...u
            }, c = {
                ...d
            }
        }
    })
}