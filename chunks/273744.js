function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LinkMarkupRule: function() {
            return i
        }
    });
    var a = n("735250");
    n("470079");
    var l = n("302454"),
        r = n.n(l),
        s = n("481060");
    let i = {
        ...r().defaultRules.link,
        react: function(e, t, n) {
            return (0, a.jsx)(s.Anchor, {
                href: e.target,
                target: "_blank",
                children: t(e.content, n)
            })
        }
    }
}