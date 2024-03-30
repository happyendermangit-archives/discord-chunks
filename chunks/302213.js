function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        },
        getIsNewMember: function() {
            return l
        }
    });
    var r = n("898511"),
        o = n("717744"),
        i = n("957808"),
        a = n("388990"),
        u = n("947248"),
        s = n("844659");

    function l(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = (null == e ? void 0 : e.joinedAt) == null ? null : new Date(e.joinedAt),
            o = new Date;
        return !!n || null != r && o.getTime() - r.getTime() < a.default.Millis.WEEK && !(0, u.hasFlag)(null !== (t = null == e ? void 0 : e.flags) && void 0 !== t ? t : 0, s.GuildMemberFlags.COMPLETED_HOME_ACTIONS)
    }

    function c(e) {
        return l((0, r.useStateFromStores)([i.default], function() {
            return i.default.getSelfMember(e)
        }), (0, r.useStateFromStores)([o.default], function() {
            return o.default.isFullServerPreview(e)
        }))
    }
}