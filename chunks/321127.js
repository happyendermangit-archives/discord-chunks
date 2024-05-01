function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("3500");

    function o(e) {
        let {
            attributes: t,
            children: n,
            leaf: r,
            text: o
        } = e;
        if (r.commandName) {
            let e = a()(s.commandName, {
                [s.emptyText]: "" === o.text
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