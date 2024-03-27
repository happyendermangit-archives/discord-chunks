function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("740078"),
        i = n("510104");

    function a(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }

    function o(e) {
        return [(0, r.top), (0, r.right), (0, r.bottom), (0, r.left)].some(function(t) {
            return e[t] >= 0
        })
    }
    t.default = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(e) {
            var t = e.state,
                n = e.name,
                r = t.rects.reference,
                s = t.rects.popper,
                u = t.modifiersData.preventOverflow,
                c = (0, i.default)(t, {
                    elementContext: "reference"
                }),
                l = (0, i.default)(t, {
                    altBoundary: !0
                }),
                d = a(c, r),
                f = a(l, s, u),
                p = o(d),
                h = o(f);
            t.modifiersData[n] = {
                referenceClippingOffsets: d,
                popperEscapeOffsets: f,
                isReferenceHidden: p,
                hasPopperEscaped: h
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": p,
                "data-popper-escaped": h
            })
        }
    }
}