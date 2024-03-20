function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        },
        PaymentPortalBody: function() {
            return v
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

    function E(e) {
        var t, n, s, a, u, c;
        let {
            header: E,
            isLargeModal: v,
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
            step: p,
            stepConfigs: _,
            setBodyNode: I,
            setFooterNode: m,
            setModalOverlayNode: N,
            setReadySlideId: g
        } = (0, f.usePaymentContext)(), T = _.find(e => e.key === p);
        r.useEffect(() => {
            N(null)
        }, [p, N]), o(null != T, "Unknown step for current payment flow.");
        let S = null !== (u = null == T ? void 0 : null === (t = T.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
            M = null == T ? void 0 : null === (n = T.options) || void 0 === n ? void 0 : n.bodyClassName,
            R = void 0 !== v && v ? h.sliderBodyLarge : null == T ? void 0 : null === (s = T.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
        return (0, i.jsxs)(i.Fragment, {
            children: [null === (c = null == T ? void 0 : null === (a = T.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === c || c ? E : null, T.renderStep(C), null == p || S ? null : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(d.ModalContent, {
                    className: l(h.body, M),
                    children: (0, i.jsx)(d.Slides, {
                        activeSlide: p,
                        centered: !1,
                        onSlideReady: e => g(e),
                        children: _.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
                            id: e.key,
                            children: (0, i.jsx)("form", {
                                className: l(h.sliderBody, R),
                                ref: e => I(e),
                                onSubmit: e => e.preventDefault()
                            })
                        }, e.key))
                    })
                }), (0, i.jsx)("div", {
                    ref: e => m(e)
                }), (0, i.jsx)("div", {
                    ref: e => N(e)
                })]
            })]
        })
    }

    function v(e) {
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