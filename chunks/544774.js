function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        syncUserTenureRewardStatus: function() {
            return r
        }
    });
    var t = E("872717"),
        o = E("913144"),
        n = E("49111");
    async function r() {
        o.default.dispatch({
            type: "USER_TENURE_REWARD_SYNC_START"
        });
        try {
            let e = await t.default.post({
                url: n.Endpoints.TENURE_REWARD_SYNC
            });
            o.default.dispatch({
                type: "USER_TENURE_REWARD_SYNC_SUCCESS",
                userTenureRewardStatus: e.body.tenure_reward_status
            })
        } catch (e) {
            o.default.dispatch({
                type: "USER_TENURE_REWARD_SYNC_SUCCESS"
            })
        }
    }
}