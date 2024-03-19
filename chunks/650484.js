function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return k
        },
        PaymentPortalBody: function() {
            return p
        },
        PaymentPortalFooter: function() {
            return y
        }
    });
    var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("627445"),
        u = r.n(a),
        c = r("817736"),
        d = r.n(c),
        o = r("77078"),
        f = r("642906"),
        S = r("304006");

    function k(e) {
        var t, r, s, a, c, d;
        let {
            header: k,
            isLargeModal: p,
            stepProps: y
        } = function(e) {
            let {
                header: t,
                isLargeModal: r,
                ...n
            } = e;
            return {
                header: t,
                isLargeModal: r,
                stepProps: n
            }
        }(e), {
            step: m,
            stepConfigs: E,
            setBodyNode: h,
            setFooterNode: I,
            setModalOverlayNode: v,
            setReadySlideId: g
        } = (0, f.usePaymentContext)(), C = E.find(e => e.key === m);
        i.useEffect(() => {
            v(null)
        }, [m, v]), u(null != C, "Unknown step for current payment flow.");
        let T = null !== (c = null == C ? void 0 : null === (t = C.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== c && c,
            R = null == C ? void 0 : null === (r = C.options) || void 0 === r ? void 0 : r.bodyClassName,
            x = void 0 !== p && p ? S.sliderBodyLarge : null == C ? void 0 : null === (s = C.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
        return (0, n.jsxs)(n.Fragment, {
            children: [null === (d = null == C ? void 0 : null === (a = C.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === d || d ? k : null, C.renderStep(y), null == m || T ? null : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(o.ModalContent, {
                    className: l(S.body, R),
                    children: (0, n.jsx)(o.Slides, {
                        activeSlide: m,
                        centered: !1,
                        onSlideReady: e => g(e),
                        children: E.filter(e => null != e.key).map(e => (0, n.jsx)(o.Slide, {
                            id: e.key,
                            children: (0, n.jsx)("form", {
                                className: l(S.sliderBody, x),
                                ref: e => h(e),
                                onSubmit: e => e.preventDefault()
                            })
                        }, e.key))
                    })
                }), (0, n.jsx)("div", {
                    ref: e => I(e)
                }), (0, n.jsx)("div", {
                    ref: e => v(e)
                })]
            })]
        })
    }

    function p(e) {
        let {
            children: t
        } = e, {
            bodyNode: r
        } = (0, f.usePaymentContext)();
        return null == r ? null : d.createPortal(t, r)
    }

    function y(e) {
        let {
            children: t
        } = e, {
            footerNode: r
        } = (0, f.usePaymentContext)();
        return null == r ? null : d.createPortal(t, r)
    }
}