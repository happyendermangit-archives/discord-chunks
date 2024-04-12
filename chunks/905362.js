function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openAdoptClanIdentityModal: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060");

    function s(e) {
        (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("95883")]).then(n.bind(n, "83521"));
            return n => (0, i.jsx)(t, {
                ...n,
                guildId: e
            })
        })
    }
}