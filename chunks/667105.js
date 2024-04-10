function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHandleClaimQuestsReward: function() {
            return l
        }
    });
    var i = n("470079"),
        r = n("617136"),
        s = n("918701"),
        a = n("920916"),
        o = n("341907");

    function l(e) {
        let {
            quest: t,
            location: n
        } = e, l = (0, a.useCollectibleRewardModal)(t, n);
        return i.useCallback(() => {
            null != t && ((0, r.trackQuestContentClicked)({
                questId: t.id,
                questContent: n,
                questContentCTA: r.QuestContentCTA.CLAIM_REWARD
            }), (0, s.hasQuestCollectibleRewards)(t.config) ? l() : (0, o.openQuestsRewardCodeModal)({
                questId: t.id,
                location: n
            }))
        }, [t, n, l])
    }
}