function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLimitedChannel: function() {
            return a
        }
    }), n("592125");
    var i = n("650774"),
        r = n("981631");

    function a(e) {
        var t;
        let n = null !== (t = i.default.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
        return null != e && e.type !== r.ChannelTypes.DM && e.type !== r.ChannelTypes.GROUP_DM && n >= 1e4
    }
}