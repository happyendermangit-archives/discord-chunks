function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PaymentPortalBody: function() {
            return E
        },
        PaymentPortalFooter: function() {
            return p
        },
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("512722"),
        u = n.n(a),
        s = n("699581"),
        l = n.n(s),
        c = n("784184"),
        f = n("751455"),
        d = n("359054");

    function _(e) {
        var t, n, o, a, s, l, _, E = {
                header: (t = e).header,
                isLargeModal: t.isLargeModal,
                stepProps: function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) {
                            if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                    }
                    return o
                }(t, ["header", "isLargeModal"])
            },
            p = E.header,
            m = E.isLargeModal,
            y = E.stepProps,
            I = (0, f.usePaymentContext)(),
            h = I.step,
            O = I.stepConfigs,
            T = I.setBodyNode,
            S = I.setFooterNode,
            v = I.setModalOverlayNode,
            g = I.setReadySlideId,
            A = O.find(function(e) {
                return e.key === h
            });
        r.useEffect(function() {
            v(null)
        }, [h, v]), u()(null != A, "Unknown step for current payment flow.");
        var b = null !== (l = null == A ? void 0 : null === (n = A.options) || void 0 === n ? void 0 : n.hideSlider) && void 0 !== l && l,
            N = null == A ? void 0 : null === (o = A.options) || void 0 === o ? void 0 : o.bodyClassName,
            R = void 0 !== m && m ? d.sliderBodyLarge : null == A ? void 0 : null === (a = A.options) || void 0 === a ? void 0 : a.sliderBodyClassName;
        return r.createElement(r.Fragment, null, null === (_ = null == A ? void 0 : null === (s = A.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === _ || _ ? p : null, A.renderStep(y), null == h || b ? null : r.createElement(r.Fragment, null, r.createElement(c.ModalContent, {
            className: i()(d.body, N)
        }, r.createElement(c.Slides, {
            activeSlide: h,
            centered: !1,
            onSlideReady: function(e) {
                return g(e)
            }
        }, O.filter(function(e) {
            return null != e.key
        }).map(function(e) {
            return r.createElement(c.Slide, {
                key: e.key,
                id: e.key
            }, r.createElement("form", {
                className: i()(d.sliderBody, R),
                ref: function(e) {
                    return T(e)
                },
                onSubmit: function(e) {
                    return e.preventDefault()
                }
            }))
        }))), r.createElement("div", {
            ref: function(e) {
                return S(e)
            }
        }), r.createElement("div", {
            ref: function(e) {
                return v(e)
            }
        })))
    }

    function E(e) {
        var t = e.children,
            n = (0, f.usePaymentContext)().bodyNode;
        return null == n ? null : l().createPortal(t, n)
    }

    function p(e) {
        var t = e.children,
            n = (0, f.usePaymentContext)().footerNode;
        return null == n ? null : l().createPortal(t, n)
    }
}