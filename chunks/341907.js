function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openGameLink: function() {
            return u
        },
        openQuestsRewardCodeModal: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("782568"),
        s = n("49012"),
        o = n("617136");

    function l(e) {
        let {
            questId: t,
            location: a
        } = e;
        (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("61624")]).then(n.bind(n, "985866"));
            return n => (0, i.jsx)(e, {
                ...n,
                questId: t,
                location: a
            })
        })
    }

    function u(e, t) {
        (0, s.handleClick)({
            href: e.config.getGameLink,
            onConfirm: () => {
                (0, o.trackQuestContentClicked)({
                    questId: e.id,
                    questContent: t.content,
                    questContentCTA: t.ctaContent
                }), (0, a.default)(e.config.getGameLink)
            }
        })
    }
}