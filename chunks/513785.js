function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return r
        }
    });
    var i, r, a, s = n("442837"),
        o = n("570140");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
    let u = {
            userTenureRewardStatusByRewardId: {},
            lastFetchTimeMs: null,
            fetchState: 0
        },
        d = u;
    class _ extends(a = s.default.PersistedStore) {
        initialize(e) {
            d = {
                ...d,
                ...null != e ? e : {}
            }
        }
        getState() {
            return d
        }
        getFetchState() {
            return d.fetchState
        }
        getTenureRewardStatusForRewardId(e) {
            return d.userTenureRewardStatusByRewardId[e]
        }
    }
    l(_, "displayName", "TenureRewardStore"), l(_, "persistKey", "TenureRewardStore"), t.default = new _(o.default, {
        USER_TENURE_REWARD_SYNC_START: function() {
            d.fetchState = 1
        },
        USER_TENURE_REWARD_SYNC_SUCCESS: function(e) {
            let {
                userTenureRewardStatus: t
            } = e;
            if (null != t) {
                let e = {};
                t.forEach(t => {
                    null != t.next_tenure_reward_id && (e[t.next_tenure_reward_id] = t)
                }), d.userTenureRewardStatusByRewardId = e
            } else d.userTenureRewardStatusByRewardId = u.userTenureRewardStatusByRewardId;
            d.lastFetchTimeMs = Date.now(), d.fetchState = 2
        },
        USER_TENURE_REWARD_STATUS_RESET: function() {
            d.userTenureRewardStatusByRewardId = u.userTenureRewardStatusByRewardId
        },
        USER_TENURE_REWARD_STATUS_DELETE: function(e) {
            let {
                tenureRewardIds: t
            } = e;
            t.forEach(e => {
                delete d.userTenureRewardStatusByRewardId[e]
            })
        },
        LOGOUT: function() {
            d = u
        }
    })
}