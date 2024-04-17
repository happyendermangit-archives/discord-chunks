function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHandleClaimQuestsReward: function() {
            return _
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("594174"),
        a = n("617136"),
        o = n("918701"),
        l = n("920916"),
        u = n("669041"),
        d = n("341907");

    function _(e) {
        let {
            quest: t,
            location: n
        } = e, _ = (0, r.useStateFromStores)([s.default], () => {
            var e;
            return null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
        });
        return i.useCallback(() => {
            null != t && ((0, a.trackQuestContentClicked)({
                questId: t.id,
                questContent: n,
                questContentCTA: a.QuestContentCTA.CLAIM_REWARD
            }), _ ? (0, o.hasQuestCollectibleRewards)(t.config) ? (0, l.openCollectibleRewardModal)(t, n) : (0, d.openQuestsRewardCodeModal)({
                questId: t.id,
                location: n
            }) : (0, u.openRewardModalUnverified)())
        }, [t, n, _])
    }
}