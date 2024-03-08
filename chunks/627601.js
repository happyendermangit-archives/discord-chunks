function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserPopoutUpsellSource: function() {
            return l
        },
        useUserPopoutCollectiblesUpsellStore: function() {
            return r
        }
    });
    var i, l, a = n("308503");
    (i = l || (l = {})).PROFILE_PANEL = "profile panel", i.USER_POPOUT = "user popout";
    let s = {
            upsellSource: null
        },
        r = (0, a.default)(e => ({
            ...s,
            setUpsellSource: t => e({
                upsellSource: t
            }),
            reset: () => {
                e({
                    ...s
                })
            }
        }))
}