function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        renderSystemTag: function() {
            return o
        }
    });
    var a = n("735250");
    n("470079");
    var r = n("368859"),
        i = n("245315"),
        s = n("467679"),
        l = n("50182");

    function o(e) {
        let t, {
            message: n,
            channel: o,
            user: u,
            compact: c,
            isRepliedMessage: d,
            hideIcon: m = !1,
            children: f
        } = e;
        return ((null == n ? void 0 : n.isSystemDM()) ? t = s.default.Types.SYSTEM_DM : null != n && (0, r.default)(n) ? t = (0, i.isPublicSystemMessage)(n) ? s.default.Types.OFFICIAL : s.default.Types.SERVER : (null == u ? void 0 : u.bot) ? t = s.default.Types.BOT : null != o && o.isForumPost() && o.ownerId === (null == u ? void 0 : u.id) && !d && (t = s.default.Types.ORIGINAL_POSTER), null == t) ? null : (0, a.jsx)(s.default, {
            className: c ? l.botTagCompact : l.botTagCozy,
            type: t,
            verified: null == u ? void 0 : u.isVerifiedBot(),
            hideIcon: m,
            useRemSizes: !0,
            children: f
        })
    }
}