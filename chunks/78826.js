function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestsAsset: function() {
            return d
        },
        QuestsAssetContextProvider: function() {
            return u
        },
        useQuestsAssetsLoadState: function() {
            return _
        }
    }), n("411104"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("374470"),
        a = n("960048");
    let o = r.createContext({
        registerAsset: () => {},
        unregisterAsset: () => {},
        hasError: !1,
        isLoading: !0
    });

    function l(e) {
        return (0, s.isElement)(e, HTMLImageElement) ? e.complete : !(0, s.isElement)(e, HTMLVideoElement) || e.readyState >= 2
    }

    function u(e) {
        let {
            children: t,
            sentrySource: n
        } = e, [u, d] = r.useState(!1), [_, c] = r.useState(new Set), [E, I] = r.useState(!1), T = r.useRef(!1);
        r.useEffect(() => {
            let e = new Set;
            for (let t of _) !l(t) && e.add(t);
            e.size !== _.size && c(e)
        }, [_]);
        let f = r.useCallback(e => {
                var t, i, r;
                let {
                    assetNode: o,
                    nodeId: l,
                    errorPrefix: u,
                    errorMessage: _
                } = e;
                a.default.captureException(Error("".concat(u, ": ").concat(null != _ ? "".concat(_, ", ") : "").concat((t = o, (0, s.isElement)(t, HTMLImageElement) ? t.getAttribute("src") : (0, s.isElement)(t, HTMLVideoElement) ? null !== (r = null === (i = t.querySelectorAll("source")[0]) || void 0 === i ? void 0 : i.getAttribute("src")) && void 0 !== r ? r : "video" : t.tagName), ", ").concat(l)), {
                    tags: {
                        source: n
                    }
                }), d(!0)
            }, [n]),
            S = r.useCallback(e => {
                c(t => {
                    let n = new Set(t);
                    return n.delete(e), n
                })
            }, []),
            A = r.useCallback((e, t) => {
                var n;
                if (I(!0), l(e)) return;
                c(t => {
                    let n = new Set(t);
                    return n.add(e), n
                });
                let i = (n = e, (0, s.isElement)(n, HTMLImageElement) ? "load" : (0, s.isElement)(n, HTMLVideoElement) ? "canplaythrough" : "load");
                e.addEventListener(i, function t() {
                    S(e), e.removeEventListener(i, t)
                });
                e.addEventListener("error", function n(i) {
                    S(e), f({
                        assetNode: e,
                        nodeId: t,
                        errorPrefix: "Error loading asset",
                        errorMessage: "message" in i ? i.message : null
                    }), e.removeEventListener("error", n)
                })
            }, [f, S]),
            h = r.useMemo(() => _.size > 0 || !E, [E, _]);
        r.useEffect(() => {
            !h && (T.current = !0)
        }, [h]);
        let m = r.useMemo(() => ({
            registerAsset: A,
            unregisterAsset: S,
            hasError: u,
            isLoading: h && !T.current
        }), [A, S, u, h]);
        return (0, i.jsx)(o.Provider, {
            value: m,
            children: t
        })
    }

    function d(e) {
        let {
            id: t,
            children: n
        } = e, {
            registerAsset: i,
            unregisterAsset: s
        } = r.useContext(o), a = r.useRef(null);
        return r.useEffect(() => {
            let e = a.current;
            return null != e && i(e, t), () => {
                null != e && s(e)
            }
        }, [i, s, t]), n(a)
    }

    function _() {
        let {
            hasError: e,
            isLoading: t
        } = r.useContext(o);
        return {
            hasError: e,
            isLoading: t
        }
    }
}