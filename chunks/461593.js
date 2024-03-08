function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("165555");

    function r(e) {
        let {
            attributes: t,
            children: n,
            leaf: l,
            text: r
        } = e;
        if (l.commandName) {
            let e = a(s.commandName, {
                [s.emptyText]: "" === r.text
            });
            return (0, i.jsx)("span", {
                ...t,
                className: e,
                spellCheck: !1,
                children: n
            })
        }
        return null
    }
}