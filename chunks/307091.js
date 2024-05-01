function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("307643"),
        r = n("973616"),
        a = n("592125"),
        s = n("566620"),
        o = n("969345");
    async function l(e, t) {
        var n;
        let l = null === (n = a.default.getChannel(t)) || void 0 === n ? void 0 : n.guild_id,
            {
                activityConfigs: u,
                applications: d
            } = await (0, s.fetchShelf)({
                guildId: l
            }),
            _ = (0, o.default)({
                applicationId: e,
                activityConfigs: u,
                applications: d
            });
        if ((null == _ ? void 0 : _.application) != null) return null == _ ? void 0 : _.application;
        {
            let t = await (0, i.fetchApplication)(e);
            return r.default.createFromServer(t)
        }
    }
}