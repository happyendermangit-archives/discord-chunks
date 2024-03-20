function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        FetchState: function() {
            return o
        },
        default: function() {
            return s
        }
    });
    var t, o, n = E("446674"),
        r = E("913144");
    (t = o || (o = {}))[t.NOT_FETCHED = 0] = "NOT_FETCHED", t[t.FETCHING = 1] = "FETCHING", t[t.FETCHED = 2] = "FETCHED";
    let a = {
            userTenureRewardStatusByRewardId: {},
            lastFetchTimeMs: null,
            fetchState: 0
        },
        i = a;
    class I extends n.default.PersistedStore {
        initialize(e) {
            i = {
                ...i,
                ...null != e ? e : {}
            }
        }
        getState() {
            return i
        }
        getFetchState() {
            return i.fetchState
        }
        getTenureRewardStatusForRewardId(e) {
            return i.userTenureRewardStatusByRewardId[e]
        }
    }
    I.displayName = "TenureRewardStore", I.persistKey = "TenureRewardStore";
    var s = new I(r.default, {
        USER_TENURE_REWARD_SYNC_START: function() {
            i.fetchState = 1
        },
        USER_TENURE_REWARD_SYNC_SUCCESS: function(e) {
            let {
                userTenureRewardStatus: _
            } = e;
            if (null != _) {
                let e = {};
                _.forEach(_ => {
                    null != _.next_tenure_reward_id && (e[_.next_tenure_reward_id] = _)
                }), i.userTenureRewardStatusByRewardId = e
            } else i.userTenureRewardStatusByRewardId = a.userTenureRewardStatusByRewardId;
            i.lastFetchTimeMs = Date.now(), i.fetchState = 2
        },
        USER_TENURE_REWARD_STATUS_RESET: function() {
            i.userTenureRewardStatusByRewardId = a.userTenureRewardStatusByRewardId
        },
        USER_TENURE_REWARD_STATUS_DELETE: function(e) {
            let {
                tenureRewardIds: _
            } = e;
            _.forEach(e => {
                delete i.userTenureRewardStatusByRewardId[e]
            })
        },
        LOGOUT: function() {
            i = a
        }
    })
}