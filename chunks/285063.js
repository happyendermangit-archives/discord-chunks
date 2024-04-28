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
        s = n("916752"),
        a = n("946278");

    function o(e) {
        let {
            node: t
        } = e, n = (0, s.default)(t);
        return (0, i.jsx)(r.Tooltip, {
            text: t.full,
            tooltipClassName: a.timestampTooltip,
            children: e => (0, i.jsx)("span", {
                ...e,
                className: a.timestamp,
                children: n
            })
        })
    }
}