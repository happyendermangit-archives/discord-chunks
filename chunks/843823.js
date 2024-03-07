function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return p
        }
    }), s("222007");
    var l = s("446674"),
        i = s("913144"),
        u = s("27618");
    let n = !1,
        r = Object.freeze({
            userAffinities: [],
            affinityUserIds: new Set,
            lastFetched: 0
        }),
        a = Object.freeze({
            userAffinitiesMap: new Map,
            affinityUserIds: new Set
        }),
        o = {
            ...r
        },
        h = {
            ...a
        };

    function d() {
        let e = new Map(o.userAffinities.filter(e => {
                let {
                    user_id: t
                } = e;
                return !u.default.isBlocked(t)
            }).map(e => [e.user_id, e])),
            t = new Set(e.keys());
        h = {
            userAffinitiesMap: e,
            affinityUserIds: t
        }
    }
    class c extends l.default.PersistedStore {
        initialize(e) {
            this.waitFor(u.default), null != e && (o.userAffinities = e.userAffinities, o.lastFetched = e.lastFetched, d()), this.syncWith([u.default], d)
        }
        needsRefresh() {
            return Date.now() - o.lastFetched > 864e5
        }
        getFetching() {
            return n
        }
        getState() {
            return o
        }
        getUserAffinities() {
            return o.userAffinities
        }
        getUserAffinity(e) {
            return h.userAffinitiesMap.get(e)
        }
        getUserAffinitiesUserIds() {
            return h.affinityUserIds
        }
    }
    c.displayName = "UserAffinitiesStore", c.persistKey = "UserAffinitiesStore", c.migrations = [e => null];
    var p = new c(i.default, {
        LOAD_USER_AFFINITIES_SUCCESS: function(e) {
            var t;
            let {
                affinities: s
            } = e;
            o.userAffinities = null !== (t = s.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), d(), n = !1
        },
        LOAD_USER_AFFINITIES: function() {
            n = !0
        },
        LOAD_USER_AFFINITIES_FAILURE: function() {
            n = !1
        },
        LOGOUT: function() {
            o = {
                ...r
            }, h = {
                ...a
            }
        }
    })
}