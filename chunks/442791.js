function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LinkMarkupRule: function() {
            return i
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("404828"),
        r = n.n(l),
        s = n("77078");
    let i = {
        ...r.defaultRules.link,
        react: function(e, t, n) {
            return (0, a.jsx)(s.Anchor, {
                href: e.target,
                target: "_blank",
                children: t(e.content, n)
            })
        }
    }
}