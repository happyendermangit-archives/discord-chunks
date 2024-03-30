function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLimitedChannel: function() {
            return i
        }
    }), n("935741");
    var r = n("382199"),
        o = n("281767");

    function i(e) {
        var t, n = null !== (t = r.default.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
        return null != e && e.type !== o.ChannelTypes.DM && e.type !== o.ChannelTypes.GROUP_DM && n >= 1e4
    }
}