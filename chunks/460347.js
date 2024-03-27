function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        getIsNewMember: function() {
            return u
        }
    }), n("789020");
    var i = n("442837"),
        r = n("160404"),
        s = n("271383"),
        a = n("70956"),
        o = n("630388"),
        l = n("372897");

    function u(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (null == e ? void 0 : e.joinedAt) == null ? null : new Date(e.joinedAt),
            r = new Date;
        return !!n || null != i && r.getTime() - i.getTime() < a.default.Millis.WEEK && !(0, o.hasFlag)(null !== (t = null == e ? void 0 : e.flags) && void 0 !== t ? t : 0, l.GuildMemberFlags.COMPLETED_HOME_ACTIONS)
    }

    function d(e) {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.getSelfMember(e));
        return u(t, (0, i.useStateFromStores)([r.default], () => r.default.isFullServerPreview(e)))
    }
}