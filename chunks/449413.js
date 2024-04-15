function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("454585"),
        a = n("474333"),
        o = n("273744"),
        l = n("952836");
    t.default = e => {
        let {
            node: {
                info: t
            }
        } = e, n = r.useRef(s.default.reactParserFor({
            ...s.default.defaultRules,
            link: o.LinkMarkupRule
        }));
        return null == t ? null : (0, i.jsx)(a.default, {
            className: l.infoBox,
            messageType: a.HelpMessageTypes.INFO,
            children: n.current(t)
        })
    }
}