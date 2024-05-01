function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("916752"),
        s = n("990291");

    function o(e) {
        let {
            node: t
        } = e, n = (0, a.default)(t);
        return (0, i.jsx)(r.Tooltip, {
            text: t.full,
            tooltipClassName: s.timestampTooltip,
            children: e => (0, i.jsx)("span", {
                ...e,
                className: s.timestamp,
                children: n
            })
        })
    }
}