function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var s = n("735250");
    n("470079");
    var a = n("803997"),
        i = n.n(a),
        r = n("481060"),
        l = n("285952"),
        o = n("819570"),
        u = n("155388"),
        d = n("794711");

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
                    className: i()({
                        [u.subText]: !c
                    }),
                    children: a
                })
            })
        })
    }
}