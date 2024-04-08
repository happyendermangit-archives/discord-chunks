function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHandleClaimQuestsReward: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("617136"),
        o = n("918701"),
        l = n("920916");

    function u(e) {
        let {
            quest: t,
            location: u
        } = e, d = (0, l.useCollectibleRewardModal)(t, u);
        return r.useCallback(() => {
            null != t && ((0, a.trackQuestContentClicked)({
                questId: t.id,
                questContent: u,
                questContentCTA: a.QuestContentCTA.CLAIM_REWARD
            }), (0, o.hasQuestCollectibleRewards)(t.config) ? d() : (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("49237"), n.e("99387"), n.e("61624")]).then(n.bind(n, "985866"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    quest: t,
                    location: u
                })
            }))
        }, [t, u, d])
    }
}