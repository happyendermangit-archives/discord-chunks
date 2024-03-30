function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("302454"),
        s = n.n(r),
        a = n("481060");

    function o(e) {
        return e.paragraph = {
            ...e.paragraph,
            react: function(e, t, n) {
                return (0, i.jsx)("p", {
                    children: t(e.content, n)
                }, n.key)
            }
        }, e.link = {
            ...e.link,
            react: function(e, t, n) {
                let r = {};
                if (null != e.context) {
                    let t = e.context[e.target];
                    t && t.onClick ? (r.onClick = t.onClick, r.onContextMenu = t.onContextMenu) : r.onClick = t
                }
                return null == r.onClick && (r.href = s().sanitizeUrl(e.target)), (0, i.jsx)(a.Anchor, {
                    title: e.title,
                    ...r,
                    children: t(e.content, n)
                }, n.key)
            }
        }, e
    }
}