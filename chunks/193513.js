function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ImageLoadingOverlay: function() {
            return _
        }
    }), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("492311"), n("101997");
    var r = n("37983"),
        i = n("884691"),
        l = n("146606"),
        a = n("723251"),
        s = n("77078"),
        o = n("504439"),
        u = n("49111"),
        c = n("366822");
    let d = {
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
        f = {
            ...d,
            config: {
                duration: 50
            }
        },
        m = {
            ...d,
            config: (e, t) => t ? {
                duration: 800
            } : {
                duration: 200
            }
        };

    function _(e) {
        let {
            readyState: t,
            aspectRatio: n,
            placeholder: _,
            placeholderVersion: E,
            placeholderStyle: I,
            children: T
        } = e, p = t === u.ImageReadyStates.LOADING, [S] = i.useState(() => Date.now()), [P] = i.useState(p), [R, C] = i.useState(!1), O = i.useMemo(() => {
            if (P && 1 === E && null != _) {
                let e = Uint8Array.from(atob(_), e => e.charCodeAt(0)),
                    t = (0, o.thumbHashToRGBA)(e, {
                        detail: 1,
                        pop: 1.1
                    }),
                    n = (0, a.rgbaToDataURL)(t.w, t.h, t.rgba);
                return n
            }
        }, [P, _, E]);
        i.useEffect(() => {
            let e = setTimeout(() => {
                C(!0)
            }, 2e3);
            return () => {
                clearTimeout(e)
            }
        }, [P]);
        let M = t === u.ImageReadyStates.READY && Date.now() - S < 200,
            g = (0, l.useTransition)(p && null != O, M ? f : d),
            h = (0, l.useTransition)(p && R, m);
        return (0, r.jsxs)("div", {
            className: c.loadingOverlay,
            style: {
                aspectRatio: n
            },
            children: [T, g((e, t) => t && (0, r.jsx)(l.animated.img, {
                style: {
                    ...I,
                    ...e
                },
                className: c.imagePlaceholder,
                src: O,
                alt: ""
            })), h((e, t) => t && (0, r.jsx)(l.animated.div, {
                style: e,
                className: c.imageLoadingOverlay,
                children: (0, r.jsx)(s.Spinner, {
                    type: s.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: c.cornerLoadingSpinner
                })
            }))]
        })
    }
}