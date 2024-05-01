function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PaymentPortalBody: function() {
            return T
        },
        PaymentPortalFooter: function() {
            return f
        },
        default: function() {
            return I
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("512722"),
        l = n.n(o),
        u = n("699581"),
        d = n.n(u),
        _ = n("481060"),
        c = n("563132"),
        E = n("56210");

    function I(e) {
        var t, n, a, o, u, d;
        let {
            header: I,
            isLargeModal: T,
            stepProps: f
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
            step: S,
            stepConfigs: h,
            setBodyNode: A,
            setFooterNode: m,
            setModalOverlayNode: N,
            setReadySlideId: p
        } = (0, c.usePaymentContext)(), O = h.find(e => e.key === S);
        r.useEffect(() => {
            N(null)
        }, [S, N]), l()(null != O, "Unknown step for current payment flow.");
        let R = null !== (u = null == O ? void 0 : null === (t = O.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
            C = null == O ? void 0 : null === (n = O.options) || void 0 === n ? void 0 : n.bodyClassName,
            g = void 0 !== T && T ? E.sliderBodyLarge : null == O ? void 0 : null === (a = O.options) || void 0 === a ? void 0 : a.sliderBodyClassName;
        return (0, i.jsxs)(i.Fragment, {
            children: [null === (d = null == O ? void 0 : null === (o = O.options) || void 0 === o ? void 0 : o.renderHeader) || void 0 === d || d ? I : null, O.renderStep(f), null == S || R ? null : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(_.ModalContent, {
                    className: s()(E.body, C),
                    children: (0, i.jsx)(_.Slides, {
                        activeSlide: S,
                        centered: !1,
                        onSlideReady: e => p(e),
                        children: h.filter(e => null != e.key).map(e => (0, i.jsx)(_.Slide, {
                            id: e.key,
                            children: (0, i.jsx)("form", {
                                className: s()(E.sliderBody, g),
                                ref: e => A(e),
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

    function T(e) {
        let {
            children: t
        } = e, {
            bodyNode: n
        } = (0, c.usePaymentContext)();
        return null == n ? null : d().createPortal(t, n)
    }

    function f(e) {
        let {
            children: t
        } = e, {
            footerNode: n
        } = (0, c.usePaymentContext)();
        return null == n ? null : d().createPortal(t, n)
    }
}