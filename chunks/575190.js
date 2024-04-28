function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ImageLoadingOverlay: function() {
            return I
        }
    }), n("47120"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("863942"), n("642549");
    var i = n("735250"),
        r = n("470079"),
        s = n("513715"),
        a = n("788900"),
        o = n("481060"),
        l = n("504053"),
        u = n("981631"),
        d = n("592959");
    let _ = {
            from: {
                opacity: 1
            },
            enter: {
                opacity: 1
            },
            leave: {
                opacity: 0
            },
            config: {
                duration: 200
            }
        },
        c = {
            ..._,
            config: {
                duration: 50
            }
        },
        E = {
            ..._,
            config: (e, t) => t ? {
                duration: 800
            } : {
                duration: 200
            }
        };

    function I(e) {
        let {
            readyState: t,
            aspectRatio: n,
            placeholder: I,
            placeholderVersion: T,
            placeholderStyle: f,
            children: S
        } = e, h = t === u.ImageReadyStates.LOADING, [A] = r.useState(() => Date.now()), [m] = r.useState(h), [N, p] = r.useState(!1), O = r.useMemo(() => {
            if (m && 1 === T && null != I) {
                let e = Uint8Array.from(atob(I), e => e.charCodeAt(0)),
                    t = (0, l.thumbHashToRGBA)(e, {
                        detail: 1,
                        pop: 1.1
                    });
                return (0, a.rgbaToDataURL)(t.w, t.h, t.rgba)
            }
        }, [m, I, T]);
        r.useEffect(() => {
            let e = setTimeout(() => {
                p(!0)
            }, 2e3);
            return () => {
                clearTimeout(e)
            }
        }, [m]);
        let R = t === u.ImageReadyStates.READY && Date.now() - A < 200,
            C = (0, s.useTransition)(h && null != O, R ? c : _),
            g = (0, s.useTransition)(h && N, E);
        return (0, i.jsxs)("div", {
            className: d.loadingOverlay,
            style: {
                aspectRatio: n
            },
            children: [S, C((e, t) => t && (0, i.jsx)(s.animated.img, {
                style: {
                    ...f,
                    ...e
                },
                className: d.imagePlaceholder,
                src: O,
                alt: ""
            })), g((e, t) => t && (0, i.jsx)(s.animated.div, {
                style: e,
                className: d.imageLoadingOverlay,
                children: (0, i.jsx)(o.Spinner, {
                    type: o.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: d.cornerLoadingSpinner
                })
            }))]
        })
    }
}