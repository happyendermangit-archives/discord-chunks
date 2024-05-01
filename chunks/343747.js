function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("434404"),
        s = n("981631");

    function o(e) {
        a.default.open(e, s.GuildSettingsSections.SOUNDBOARD), (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("56035"), n.e("358")]).then(n.bind(n, "758961"));
            return n => (0, i.jsx)(t, {
                ...n,
                guildId: e
            })
        })
    }
}