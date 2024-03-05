function(e, s, t) {
    "use strict";
    t.r(s), t.d(s, {
        default: function() {
            return i
        }
    });
    var a = t("37983");
    t("884691");
    var l = t("473374"),
        n = t("195483"),
        r = t("574073");

    function i(e) {
        var s, t;
        let i = (0, r.default)(e.message),
            c = (0, l.renderSystemTag)({
                message: e.message,
                channel: e.channel,
                user: null !== (t = null === (s = e.message) || void 0 === s ? void 0 : s.author) && void 0 !== t ? t : e.userOverride,
                compact: !!e.compact,
                isRepliedMessage: !!e.isRepliedMessage
            }),
            u = {};
        return null != c && (u[n.UsernameDecorationTypes.SYSTEM_TAG] = c), (0, a.jsx)(n.default, {
            ...e,
            author: i,
            decorations: u
        })
    }
}