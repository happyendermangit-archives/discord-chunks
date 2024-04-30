function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHandleClaimQuestsReward: function() {
            return c
        },
        useHasLaunchedGame: function() {
            return E
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("594190"),
        a = n("594174"),
        o = n("617136"),
        l = n("918701"),
        u = n("920916"),
        d = n("669041"),
        _ = n("341907");

    function c(e) {
        let {
            quest: t,
            location: n
        } = e, s = (0, r.useStateFromStores)([a.default], () => {
            var e;
            return null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
        });
        return i.useCallback(() => {
            null != t && ((0, o.trackQuestContentClicked)({
                questId: t.id,
                questContent: n,
                questContentCTA: o.QuestContentCTA.CLAIM_REWARD
            }), s ? (0, l.hasQuestCollectibleRewards)(t.config) ? (0, u.openCollectibleRewardModal)(t, n) : (0, _.openQuestsRewardCodeModal)({
                questId: t.id,
                location: n
            }) : (0, d.openRewardModalUnverified)())
        }, [t, n, s])
    }

    function E(e) {
        var t;
        let n = (0, r.useStateFromStoresArray)([s.default], () => s.default.getGamesSeen(!1)).find(t => (null == t ? void 0 : t.id) === e);
        if (null == n) return !1;
        let i = Date.now() - 2592e7;
        return i <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0)
    }
}