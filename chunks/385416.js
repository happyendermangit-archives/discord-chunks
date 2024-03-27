function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHandleClaimQuestsReward: function() {
            return r
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("77078"),
        s = n("815496");

    function r(e) {
        let {
            quest: t,
            location: r
        } = e;
        return l.useCallback(() => {
            null != t && ((0, s.trackQuestContentClicked)({
                questId: t.id,
                questContent: r,
                questContentCTA: s.QuestContentCTA.CLAIM_REWARD
            }), (0, a.openModalLazy)(async () => {
                let {
                    default: e
                } = await n.el("36170").then(n.bind(n, "36170"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    quest: t,
                    location: r
                })
            }))
        }, [t, r])
    }
}