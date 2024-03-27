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
        r = n.n(a),
        l = n("77078"),
        i = n("145131"),
        o = n("124969"),
        u = n("803230"),
        d = n("890957");

    function c(e) {
        let {
            value: t,
            onChange: n,
            subText: a,
            muted: c,
            marginTopStyle: E
        } = e;
        return (0, s.jsx)(i.default, {
            className: null != E ? E : d.marginTop20,
            align: i.default.Align.CENTER,
            children: (0, s.jsx)(l.Checkbox, {
                value: t,
                type: l.Checkbox.Types.INVERTED,
                onChange: (e, t) => n(t),
                className: u.checkbox,
                children: (0, s.jsx)(o.SubText, {
                    className: r({
                        [u.subText]: !c
                    }),
                    children: a
                })
            })
        })
    }
}