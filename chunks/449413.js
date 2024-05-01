function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("454585"),
        s = n("474333"),
        o = n("273744"),
        l = n("244974");
    t.default = e => {
        let {
            node: {
                info: t
            }
        } = e, n = r.useRef(a.default.reactParserFor({
            ...a.default.defaultRules,
            link: o.LinkMarkupRule
        }));
        return null == t ? null : (0, i.jsx)(s.default, {
            className: l.infoBox,
            messageType: s.HelpMessageTypes.INFO,
            children: n.current(t)
        })
    }
}