function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var s = n("37983");
    n("884691");
    var a = n("414456"),
        r = n.n(a),
        l = n("124969"),
        i = n("316664");

    function o(e) {
        let {
            children: t,
            className: n,
            ...a
        } = e, o = t();
        return (0, s.jsx)(l.default, {
            ...a,
            className: r(n, i.container),
            contentClassName: i.content,
            children: o.map((e, t) => (0, s.jsx)("div", {
                className: i.column,
                style: {
                    flexBasis: "".concat(100 / o.length, "%")
                },
                children: e
            }, t))
        })
    }
}