function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        syncUserTenureRewardStatus: function() {
            return s
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("981631");
    async function s() {
        r.default.dispatch({
            type: "USER_TENURE_REWARD_SYNC_START"
        });
        try {
            let e = await i.HTTP.post({
                url: a.Endpoints.TENURE_REWARD_SYNC
            });
            r.default.dispatch({
                type: "USER_TENURE_REWARD_SYNC_SUCCESS",
                userTenureRewardStatus: e.body.tenure_reward_status
            })
        } catch (e) {
            r.default.dispatch({
                type: "USER_TENURE_REWARD_SYNC_SUCCESS"
            })
        }
    }
}