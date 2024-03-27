function(e, s, t) {
    "use strict";
    t.r(s), t.d(s, {
        default: function() {
            return r
        }
    });
    var l = t("37983");
    t("884691");
    var a = t("473374"),
        n = t("195483"),
        i = t("574073");

    function r(e) {
        var s, t;
        let r = (0, i.default)(e.message),
            c = (0, a.renderSystemTag)({
                message: e.message,
                channel: e.channel,
                user: null !== (t = null === (s = e.message) || void 0 === s ? void 0 : s.author) && void 0 !== t ? t : e.userOverride,
                compact: !!e.compact,
                isRepliedMessage: !!e.isRepliedMessage
            }),
            u = {};
        return null != c && (u[n.UsernameDecorationTypes.SYSTEM_TAG] = c), (0, l.jsx)(n.default, {
            ...e,
            author: r,
            decorations: u
        })
    }
}