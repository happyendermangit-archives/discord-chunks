function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHandleClaimQuestsReward: function() {
            return o
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("617136");

    function o(e) {
        let {
            quest: t,
            location: o
        } = e;
        return r.useCallback(() => {
            null != t && ((0, a.trackQuestContentClicked)({
                questId: t.id,
                questContent: o,
                questContentCTA: a.QuestContentCTA.CLAIM_REWARD
            }), (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("49237"), n.e("99387"), n.e("61624")]).then(n.bind(n, "985866"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    quest: t,
                    location: o
                })
            }))
        }, [t, o])
    }
}