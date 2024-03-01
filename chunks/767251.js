function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return i
        }
    });
    var t = E("37983");
    E("884691");
    var o = E("404828"),
        n = E.n(o),
        r = E("77078");

    function i(e) {
        return e.paragraph = {
            ...e.paragraph,
            react: function(e, _, E) {
                return (0, t.jsx)("p", {
                    children: _(e.content, E)
                }, E.key)
            }
        }, e.link = {
            ...e.link,
            react: function(e, _, E) {
                let o = {};
                if (null != e.context) {
                    let _ = e.context[e.target];
                    _ && _.onClick ? (o.onClick = _.onClick, o.onContextMenu = _.onContextMenu) : o.onClick = _
                }
                return null == o.onClick && (o.href = n.sanitizeUrl(e.target)), (0, t.jsx)(r.Anchor, {
                    title: e.title,
                    ...o,
                    children: _(e.content, E)
                }, E.key)
            }
        }, e
    }
}