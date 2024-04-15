function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("307187"),
        s = n("750858"),
        a = n("739566");

    function o(e) {
        var t, n;
        let o = (0, a.default)(e.message),
            l = (0, r.renderSystemTag)({
                message: e.message,
                channel: e.channel,
                user: null !== (n = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== n ? n : e.userOverride,
                compact: !!e.compact,
                isRepliedMessage: !!e.isRepliedMessage
            }),
            u = {};
        return null != l && (u[s.UsernameDecorationTypes.SYSTEM_TAG] = l), (0, i.jsx)(s.default, {
            ...e,
            author: o,
            decorations: u
        })
    }
}