function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("683012"),
        s = n("919163");

    function r(e) {
        let {
            node: t
        } = e, n = (0, a.default)(t);
        return (0, i.jsx)(l.Tooltip, {
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