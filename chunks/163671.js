function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var s = n("735250");
    n("470079");
    var a = n("120356"),
        i = n.n(a),
        r = n("819570"),
        l = n("812470");

    function o(e) {
        let {
            children: t,
            className: n,
            ...a
        } = e, o = t();
        return (0, s.jsx)(r.default, {
            ...a,
            className: i()(n, l.container),
            contentClassName: l.content,
            children: o.map((e, t) => (0, s.jsx)("div", {
                className: l.column,
                style: {
                    flexBasis: "".concat(100 / o.length, "%")
                },
                children: e
            }, t))
        })
    }
}