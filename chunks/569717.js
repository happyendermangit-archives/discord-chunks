function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("592407"),
        s = n("49111");

    function r(e) {
        a.default.open(e, s.GuildSettingsSections.SOUNDBOARD), (0, l.openModalLazy)(async () => {
            let {
                default: t
            } = await n.el("823749").then(n.bind(n, "823749"));
            return n => (0, i.jsx)(t, {
                ...n,
                guildId: e
            })
        })
    }
}