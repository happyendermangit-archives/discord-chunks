function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Spinner: function() {
            return c
        },
        SpinnerTypes: function() {
            return r
        }
    });
    var i, r, a = n("735250"),
        s = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("186325"),
        d = n("689938"),
        _ = n("550386");
    (i = r || (r = {})).WANDERING_CUBES = "wanderingCubes", i.CHASING_DOTS = "chasingDots", i.PULSING_ELLIPSIS = "pulsingEllipsis", i.SPINNING_CIRCLE = "spinningCircle", i.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple", i.LOW_MOTION = "lowMotion";

    function c(e) {
        let {
            type: t = "wanderingCubes",
            animated: n = !0,
            className: i,
            itemClassName: r,
            "aria-label": o,
            ...c
        } = e, {
            reducedMotion: E
        } = s.useContext(u.AccessibilityPreferencesContext), I = E.enabled ? function(e) {
            switch (e) {
                case "wanderingCubes":
                case "chasingDots":
                    return "lowMotion";
                default:
                    return e
            }
        }(t) : t;
        if (o = null != o ? o : d.default.Messages.LOADING, "spinningCircle" === I || "spinningCircleSimple" === I) return (0, a.jsx)("div", {
            className: l()(_.spinner, _[I], i, {
                [_.stopAnimation]: !n
            }),
            role: "img",
            "aria-label": o,
            ...c,
            children: (0, a.jsx)("div", {
                className: _.spinningCircleInner,
                children: (0, a.jsxs)("svg", {
                    className: _.circular,
                    viewBox: "25 25 50 50",
                    children: ["spinningCircle" === I && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("circle", {
                            className: l()(_.path, _.path3, r),
                            cx: "50",
                            cy: "50",
                            r: "20"
                        }), (0, a.jsx)("circle", {
                            className: l()(_.path, _.path2, r),
                            cx: "50",
                            cy: "50",
                            r: "20"
                        })]
                    }), (0, a.jsx)("circle", {
                        className: l()(_.path, r),
                        cx: "50",
                        cy: "50",
                        r: "20"
                    })]
                })
            })
        });
        let T = l()(_.item, r);
        return (0, a.jsx)("span", {
            className: l()(_.spinner, i, {
                [_.stopAnimation]: !n
            }),
            role: "img",
            "aria-label": o,
            ...c,
            children: (0, a.jsxs)("span", {
                className: l()(_.inner, _[I]),
                children: [(0, a.jsx)("span", {
                    className: T
                }), (0, a.jsx)("span", {
                    className: T
                }), "pulsingEllipsis" === I || "lowMotion" === I ? (0, a.jsx)("span", {
                    className: T
                }) : null]
            })
        })
    }
    c.Type = r
}