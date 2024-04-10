function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openQuestsRewardCodeModal: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060");

    function s(e) {
        let {
            questId: t,
            location: s
        } = e;
        (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("61624")]).then(n.bind(n, "985866"));
            return n => (0, i.jsx)(e, {
                ...n,
                questId: t,
                location: s
            })
        })
    }
}