function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        renderSystemTag: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("368859"),
        s = n("245315"),
        a = n("467679"),
        o = n("50182");

    function l(e) {
        let t, {
            message: n,
            channel: l,
            user: u,
            compact: d,
            isRepliedMessage: _,
            hideIcon: c = !1,
            children: E
        } = e;
        return ((null == n ? void 0 : n.isSystemDM()) ? t = a.default.Types.SYSTEM_DM : null != n && (0, r.default)(n) ? t = (0, s.isPublicSystemMessage)(n) ? a.default.Types.OFFICIAL : a.default.Types.SERVER : (null == u ? void 0 : u.bot) ? t = a.default.Types.BOT : null != l && l.isForumPost() && l.ownerId === (null == u ? void 0 : u.id) && !_ && (t = a.default.Types.ORIGINAL_POSTER), null == t) ? null : (0, i.jsx)(a.default, {
            className: d ? o.botTagCompact : o.botTagCozy,
            type: t,
            verified: null == u ? void 0 : u.isVerifiedBot(),
            hideIcon: c,
            useRemSizes: !0,
            children: E
        })
    }
}