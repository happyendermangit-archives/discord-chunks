function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var a = n("37983"),
        l = n("884691"),
        r = n("367376"),
        s = n("555158"),
        i = n("442791"),
        d = n("512048"),
        u = e => {
            let {
                node: {
                    info: t
                }
            } = e, n = l.useRef(r.default.reactParserFor({
                ...r.default.defaultRules,
                link: i.LinkMarkupRule
            }));
            return null == t ? null : (0, a.jsx)(s.default, {
                className: d.infoBox,
                messageType: s.HelpMessageTypes.INFO,
                children: n.current(t)
            })
        }
}