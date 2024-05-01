function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LinkMarkupRule: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("302454"),
        a = n.n(r),
        s = n("481060");
    let o = {
        ...a().defaultRules.link,
        react: function(e, t, n) {
            return (0, i.jsx)(s.Anchor, {
                href: e.target,
                target: "_blank",
                children: t(e.content, n)
            })
        }
    }
}