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
            isPreview: n = !1,
            sentrySource: u
        } = e, [d, _] = r.useState(!1), [c, E] = r.useState(new Set), [I, T] = r.useState(!1), f = r.useRef(!1);
        r.useEffect(() => {
            let e = new Set;
            for (let t of c) !l(t) && e.add(t);
            e.size !== c.size && E(e)
        }, [c]);
        let S = r.useCallback(e => {
                let {
                    assetNode: t,
                    nodeId: i,
                    errorPrefix: r,
                    errorMessage: o
                } = e;
                if (!n && null != u) {
                    var l, d, c;
                    a.default.captureException(Error("".concat(r, ": ").concat(null != o ? "".concat(o, ", ") : "").concat((l = t, (0, s.isElement)(l, HTMLImageElement) ? l.getAttribute("src") : (0, s.isElement)(l, HTMLVideoElement) ? null !== (c = null === (d = l.querySelectorAll("source")[0]) || void 0 === d ? void 0 : d.getAttribute("src")) && void 0 !== c ? c : "video" : l.tagName), ", ").concat(i)), {
                        tags: {
                            source: u
                        }
                    }), _(!0)
                }
            }, [n, u]),
            h = r.useCallback(e => {
                E(t => {
                    let n = new Set(t);
                    return n.delete(e), n
                })
            }, []),
            A = r.useCallback((e, t) => {
                var n;
                if (T(!0), l(e)) return;
                E(t => {
                    let n = new Set(t);
                    return n.add(e), n
                });
                let i = (n = e, (0, s.isElement)(n, HTMLImageElement) ? "load" : (0, s.isElement)(n, HTMLVideoElement) ? "canplaythrough" : "load");
                e.addEventListener(i, function t() {
                    h(e), e.removeEventListener(i, t)
                });
                e.addEventListener("error", function n(i) {
                    h(e), S({
                        assetNode: e,
                        nodeId: t,
                        errorPrefix: "Error loading asset",
                        errorMessage: "message" in i ? i.message : null
                    }), e.removeEventListener("error", n)
                })
            }, [S, h]),
            m = r.useMemo(() => c.size > 0 || !I, [I, c]);
        r.useEffect(() => {
            !m && (f.current = !0)
        }, [m]);
        let N = r.useMemo(() => ({
            registerAsset: A,
            unregisterAsset: h,
            hasError: d,
            isLoading: m && !f.current
        }), [A, h, d, m]);
        return (0, i.jsx)(o.Provider, {
            value: N,
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