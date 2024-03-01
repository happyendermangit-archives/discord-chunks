function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Popper: function() {
            return c
        }
    });
    var r = n("884691"),
        a = n("204748"),
        o = n("84075"),
        i = n("734059"),
        s = function() {},
        u = function() {
            return Promise.resolve(null)
        },
        l = [];

    function c(e) {
        var t = e.placement,
            n = void 0 === t ? "bottom" : t,
            c = e.strategy,
            d = void 0 === c ? "absolute" : c,
            f = e.modifiers,
            p = void 0 === f ? l : f,
            h = e.referenceElement,
            m = e.onFirstUpdate,
            y = e.innerRef,
            _ = e.children,
            g = r.useContext(a.ManagerReferenceNodeContext),
            v = r.useState(null),
            b = v[0],
            M = v[1],
            w = r.useState(null),
            k = w[0],
            L = w[1];
        r.useEffect(function() {
            (0, o.setRef)(y, b)
        }, [y, b]);
        var D = r.useMemo(function() {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: m,
                    modifiers: [].concat(p, [{
                        name: "arrow",
                        enabled: null != k,
                        options: {
                            element: k
                        }
                    }])
                }
            }, [n, d, m, p, k]),
            T = (0, i.usePopper)(h || g, b, D),
            S = T.state,
            Y = T.styles,
            x = T.forceUpdate,
            O = T.update,
            E = r.useMemo(function() {
                return {
                    ref: M,
                    style: Y.popper,
                    placement: S ? S.placement : n,
                    hasPopperEscaped: S && S.modifiersData.hide ? S.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: S && S.modifiersData.hide ? S.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: Y.arrow,
                        ref: L
                    },
                    forceUpdate: x || s,
                    update: O || u
                }
            }, [M, L, n, S, Y, O, x]);
        return (0, o.unwrapArray)(_)(E)
    }
}