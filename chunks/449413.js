function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250"),
        l = n("470079"),
        r = n("454585"),
        s = n("474333"),
        i = n("273744"),
        d = n("952836");
    t.default = e => {
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