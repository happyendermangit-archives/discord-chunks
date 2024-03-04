function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLimitedChannel: function() {
            return r
        }
    }), n("42203");
    var i = n("525065"),
        s = n("49111");

    function r(e) {
        var t;
        let n = null !== (t = i.default.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
        return null != e && e.type !== s.ChannelTypes.DM && e.type !== s.ChannelTypes.GROUP_DM && n >= 1e4
    }
}