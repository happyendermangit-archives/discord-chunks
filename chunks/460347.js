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

    function u(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (n) return !0;
        let i = null != e ? new Date(e) : void 0;
        return null != i && new Date().getTime() - i.getTime() < a.default.Millis.WEEK && !(0, o.hasFlag)(null != t ? t : 0, l.GuildMemberFlags.COMPLETED_HOME_ACTIONS)
    }

    function d(e) {
        return (0, i.useStateFromStores)([s.default, r.default], () => {
            var t, n;
            if (r.default.isFullServerPreview(e)) return !0;
            let i = s.default.getSelfMember(e);
            return u(null !== (t = null == i ? void 0 : i.joinedAt) && void 0 !== t ? t : void 0, null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : void 0)
        })
    }
}