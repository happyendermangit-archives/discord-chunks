function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLimitedChannel: function() {
            return s
        }
    }), n("42203");
    var a = n("525065"),
        l = n("49111");

    function s(e) {
        var t;
        let n = null !== (t = a.default.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
        return null != e && e.type !== l.ChannelTypes.DM && e.type !== l.ChannelTypes.GROUP_DM && n >= 1e4
    }
}