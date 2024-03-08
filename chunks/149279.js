function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Separator: function() {
            return o
        },
        Button: function() {
            return u
        },
        default: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("323845");

    function o(e) {
        let {
            className: t
        } = e;
        return (0, i.jsx)("div", {
            className: a(t, r.separator)
        })
    }

    function u(e) {
        let {
            onClick: t,
            onContextMenu: n,
            className: l,
            selected: o = !1,
            children: u,
            disabled: d = !1,
            dangerous: c,
            ...f
        } = e;
        return (0, i.jsx)(s.Clickable, {
            onClick: d ? void 0 : t,
            onContextMenu: d ? void 0 : n,
            className: a(l, {
                [r.button]: !0,
                [r.selected]: o,
                [r.disabled]: d,
                [r.dangerous]: c
            }),
            ...f,
            children: u
        })
    }
    var d = function(e) {
        let {
            className: t,
            children: n
        } = e;
        return (0, i.jsx)("div", {
            className: a(t, r.wrapper),
            children: n
        })
    }
}