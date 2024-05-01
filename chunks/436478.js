function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserPopoutUpsellSource: function() {
            return r
        },
        useUserPopoutCollectiblesUpsellStore: function() {
            return o
        }
    });
    var i, r, a = n("652874");
    (i = r || (r = {})).PROFILE_PANEL = "profile panel", i.USER_POPOUT = "user popout";
    let s = {
            upsellSource: null
        },
        o = (0, a.default)(e => ({
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