function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return n
        }
    });
    var t = E("37983");
    E("884691");
    var o = E("404828");

    function n(e) {
        return e.heading = o.defaultRules.heading, e.lheading = o.defaultRules.lheading, e.list = o.defaultRules.list, e.paragraph = {
            ...e.paragraph,
            react: function(e, _, E) {
                return (0, t.jsx)("p", {
                    children: _(e.content, E)
                }, E.key)
            }
        }, e.link = {
            ...e.link,
            react: function(e, _, E) {
                let n = {};
                if (null != e.context) {
                    let _ = e.context[e.target];
                    _ && _.onClick ? (n.onClick = _.onClick, n.onContextMenu = _.onContextMenu) : n.onClick = _
                }
                return null == n.onClick && (n.href = (0, o.sanitizeUrl)(e.target), n.target = "_blank"), (0, t.jsx)("a", {
                    title: e.title,
                    ...n,
                    rel: "noreferrer",
                    children: _(e.content, E)
                }, E.key)
            }
        }, e
    }
}