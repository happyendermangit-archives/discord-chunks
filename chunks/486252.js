function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var s = n("37983");
    n("884691");
    var a = n("414456"),
        i = n.n(a),
        r = n("77078"),
        l = n("145131"),
        o = n("124969"),
        u = n("803230"),
        d = n("890957");

    function c(e) {
        let {
            value: t,
            onChange: n,
            subText: a,
            muted: c,
            marginTopStyle: f
        } = e;
        return (0, s.jsx)(l.default, {
            className: null != f ? f : d.marginTop20,
            align: l.default.Align.CENTER,
            children: (0, s.jsx)(r.Checkbox, {
                value: t,
                type: r.Checkbox.Types.INVERTED,
                onChange: (e, t) => n(t),
                className: u.checkbox,
                children: (0, s.jsx)(o.SubText, {
                    className: i({
                        [u.subText]: !c
                    }),
                    children: a
                })
            })
        })
    }
}