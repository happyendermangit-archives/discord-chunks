function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("607391"),
        s = n("145131"),
        i = n("331639");

    function l(e) {
        let {
            mainText: t,
            supportingText: n,
            children: l,
            size: u
        } = e;
        return (0, a.jsxs)(s.default, {
            className: i.root,
            justify: s.default.Justify.CENTER,
            align: s.default.Align.CENTER,
            direction: s.default.Direction.VERTICAL,
            children: [(0, a.jsx)(r.default, {
                header: t,
                description: n,
                size: u
            }), l]
        })
    }
}