function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("154921"),
        l = n("30857");

    function u(e) {
        var t;
        let {
            name: n,
            className: r,
            state: u,
            isInline: d,
            onClick: _
        } = e, c = null, E = o.default.Colors.HEADER_PRIMARY;
        (null == u ? void 0 : u.isActive) && !d ? c = l.active : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? c = l.error : (null == u ? void 0 : u.hasValue) && !d && (c = l.set);
        let I = (0, i.jsx)(o.default, {
            size: d ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
            color: E,
            className: s()(l.option, {
                [l.inline]: d
            }, c, r),
            children: n + (d ? ":" : "")
        });
        return null == _ ? I : (0, i.jsx)(a.Clickable, {
            className: l.clickable,
            onClick: () => _(n),
            children: I
        })
    }
}