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
    var i, r, s = n("652874");
    (i = r || (r = {})).PROFILE_PANEL = "profile panel", i.USER_POPOUT = "user popout";
    let a = {
            upsellSource: null
        },
        o = (0, s.default)(e => ({
            ...a,
            setUpsellSource: t => e({
                upsellSource: t
            }),
            reset: () => {
                e({
                    ...a
                })
            }
        }))
}