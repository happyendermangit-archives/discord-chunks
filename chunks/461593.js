function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("165555");

    function r(e) {
        let {
            attributes: t,
            children: n,
            leaf: i,
            text: r
        } = e;
        if (i.commandName) {
            let e = a(s.commandName, {
                [s.emptyText]: "" === r.text
            });
            return (0, l.jsx)("span", {
                ...t,
                className: e,
                spellCheck: !1,
                children: n
            })
        }
        return null
    }
}