function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openAdoptClanIdentityModal: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("524437"),
        a = n("481060"),
        s = n("645041");

    function o(e) {
        (0, a.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("95883")]).then(n.bind(n, "83521"));
            return n => (0, i.jsx)(t, {
                ...n,
                onClose: t => {
                    (0, s.markContentAsDismissed)(r.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE, e, !0, t), n.onClose()
                },
                guildId: e
            })
        })
    }
}