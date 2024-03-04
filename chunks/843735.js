function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("697309"),
        a = n("214725");

    function o(e, t, n) {
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

    function i(e) {
        return [(0, r.top), (0, r.right), (0, r.bottom), (0, r.left)].some(function(t) {
            return e[t] >= 0
        })
    }
    var s = {
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
                l = (0, a.default)(t, {
                    elementContext: "reference"
                }),
                c = (0, a.default)(t, {
                    altBoundary: !0
                }),
                d = o(l, r),
                f = o(c, s, u),
                p = i(d),
                m = i(f);
            t.modifiersData[n] = {
                referenceClippingOffsets: d,
                popperEscapeOffsets: f,
                isReferenceHidden: p,
                hasPopperEscaped: m
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": p,
                "data-popper-escaped": m
            })
        }
    }
}