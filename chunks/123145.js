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
        a = n("750858"),
        s = n("739566");

    function o(e) {
        var t, n;
        let o = (0, s.default)(e.message),
            l = (0, r.renderSystemTag)({
                message: e.message,
                channel: e.channel,
                user: null !== (n = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== n ? n : e.userOverride,
                compact: !!e.compact,
                isRepliedMessage: !!e.isRepliedMessage
            }),
            u = {};
        return null != l && (u[a.UsernameDecorationTypes.SYSTEM_TAG] = l), (0, i.jsx)(a.default, {
            ...e,
            author: o,
            decorations: u
        })
    }
}