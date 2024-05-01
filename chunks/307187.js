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
        a = n("245315"),
        s = n("467679"),
        o = n("904335");

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
        return ((null == n ? void 0 : n.isSystemDM()) ? t = s.default.Types.SYSTEM_DM : null != n && (0, r.default)(n) ? t = (0, a.isPublicSystemMessage)(n) ? s.default.Types.OFFICIAL : s.default.Types.SERVER : (null == u ? void 0 : u.bot) ? t = s.default.Types.BOT : null != l && l.isForumPost() && l.ownerId === (null == u ? void 0 : u.id) && !_ && (t = s.default.Types.ORIGINAL_POSTER), null == t) ? null : (0, i.jsx)(s.default, {
            className: d ? o.botTagCompact : o.botTagCozy,
            type: t,
            verified: null == u ? void 0 : u.isVerifiedBot(),
            hideIcon: c,
            useRemSizes: !0,
            children: E
        })
    }
}