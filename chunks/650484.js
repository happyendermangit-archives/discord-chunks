function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        },
        PaymentPortalBody: function() {
            return p
        },
        PaymentPortalFooter: function() {
            return C
        }
    });
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        l = n.n(s),
        a = n("627445"),
        o = n.n(a),
        u = n("817736"),
        c = n.n(u),
        d = n("77078"),
        f = n("642906"),
        h = n("304006");

    function v(e) {
        var t, n, s, a, u, c;
        let {
            header: v,
            isLargeModal: p,
            stepProps: C
        } = function(e) {
            let {
                header: t,
                isLargeModal: n,
                ...i
            } = e;
            return {
                header: t,
                isLargeModal: n,
                stepProps: i
            }
        }(e), {
            step: E,
            stepConfigs: m,
            setBodyNode: _,
            setFooterNode: g,
            setModalOverlayNode: N,
            setReadySlideId: I
        } = (0, f.usePaymentContext)(), S = m.find(e => e.key === E);
        r.useEffect(() => {
            N(null)
        }, [E, N]), o(null != S, "Unknown step for current payment flow.");
        let x = null !== (u = null == S ? void 0 : null === (t = S.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
            T = null == S ? void 0 : null === (n = S.options) || void 0 === n ? void 0 : n.bodyClassName,
            M = void 0 !== p && p ? h.sliderBodyLarge : null == S ? void 0 : null === (s = S.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
        return (0, i.jsxs)(i.Fragment, {
            children: [null === (c = null == S ? void 0 : null === (a = S.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === c || c ? v : null, S.renderStep(C), null == E || x ? null : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(d.ModalContent, {
                    className: l(h.body, T),
                    children: (0, i.jsx)(d.Slides, {
                        activeSlide: E,
                        centered: !1,
                        onSlideReady: e => I(e),
                        children: m.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
                            id: e.key,
                            children: (0, i.jsx)("form", {
                                className: l(h.sliderBody, M),
                                ref: e => _(e),
                                onSubmit: e => e.preventDefault()
                            })
                        }, e.key))
                    })
                }), (0, i.jsx)("div", {
                    ref: e => g(e)
                }), (0, i.jsx)("div", {
                    ref: e => N(e)
                })]
            })]
        })
    }

    function p(e) {
        let {
            children: t
        } = e, {
            bodyNode: n
        } = (0, f.usePaymentContext)();
        return null == n ? null : c.createPortal(t, n)
    }

    function C(e) {
        let {
            children: t
        } = e, {
            footerNode: n
        } = (0, f.usePaymentContext)();
        return null == n ? null : c.createPortal(t, n)
    }
}