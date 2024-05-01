function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormNotice: function() {
            return E
        },
        FormNoticeImagePositions: function() {
            return c
        },
        FormNoticeTypes: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("49800"),
        o = n("285952"),
        l = n("534542"),
        u = n("512983"),
        d = n("763873");
    let _ = a.Card.Types,
        c = {
            LEFT: "left",
            RIGHT: "right"
        };

    function E(e) {
        let t, n, {
                type: r = a.Card.Types.DANGER,
                imageData: _,
                button: E,
                className: I,
                iconClassName: T,
                title: f,
                body: S,
                style: h,
                align: A = o.default.Align.START
            } = e,
            m = o.default.Direction.HORIZONTAL;
        if (null != _) {
            let {
                position: e,
                ...n
            } = _;
            t = (0, i.jsx)(o.default.Child, {
                grow: 0,
                shrink: 0,
                children: (0, i.jsx)("img", {
                    alt: "",
                    className: s()(d.icon, T),
                    ...n
                })
            }), e === c.RIGHT && (m = o.default.Direction.HORIZONTAL_REVERSE)
        } else null != E && (n = E);
        let N = !0;
        return r === a.Card.Types.PRIMARY && (N = !1), (0, i.jsx)(a.Card, {
            className: s()(d.formNotice, I),
            type: r,
            style: h,
            children: (0, i.jsxs)(o.default, {
                direction: m,
                align: A,
                children: [t, (0, i.jsxs)(o.default.Child, {
                    children: [null != f && "" !== f ? (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        className: s()(d.formNoticeTitle, {
                            [d.whiteText]: N
                        }),
                        faded: !0,
                        children: f
                    }) : null, (0, i.jsx)(l.FormText, {
                        className: s()(d.formNoticeBody, {
                            [d.whiteText]: N
                        }),
                        children: S
                    }), n]
                })]
            })
        })
    }
    E.Types = a.Card.Types
}