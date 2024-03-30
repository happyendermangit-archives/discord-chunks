function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        renderSystemTag: function() {
            return s
        }
    });
    var r = n("470079"),
        a = n("652115"),
        o = n("426318"),
        i = n("303052"),
        l = n("50182");

    function s(e) {
        var t, n = e.message,
            s = e.channel,
            c = e.user,
            u = e.compact,
            d = e.isRepliedMessage,
            f = e.hideIcon,
            m = e.children;
        return ((null == n ? void 0 : n.isSystemDM()) ? t = i.default.Types.SYSTEM_DM : null != n && (0, a.default)(n) ? t = (0, o.isPublicSystemMessage)(n) ? i.default.Types.OFFICIAL : i.default.Types.SERVER : (null == c ? void 0 : c.bot) ? t = i.default.Types.BOT : null != s && s.isForumPost() && s.ownerId === (null == c ? void 0 : c.id) && !d && (t = i.default.Types.ORIGINAL_POSTER), null == t) ? null : r.createElement(i.default, {
            className: u ? l.botTagCompact : l.botTagCozy,
            type: t,
            verified: null == c ? void 0 : c.isVerifiedBot(),
            hideIcon: void 0 !== f && f,
            useRemSizes: !0
        }, m)
    }
}