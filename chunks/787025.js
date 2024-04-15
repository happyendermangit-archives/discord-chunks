function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2Modal: function() {
            return A
        },
        OAuth2Page: function() {
            return S
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("466377"),
        l = n("481060"),
        u = n("252618"),
        d = n("612744"),
        _ = n("449934"),
        c = n("792125"),
        E = n("981631"),
        I = n("756286"),
        T = n("689938"),
        f = n("160516");

    function S(e) {
        let {
            children: t,
            wrapperClassName: n,
            embedded: s
        } = e, [o, S] = r.useState(I.WaveStates.INITIAL), A = r.useCallback(e => {
            S(t => Math.max(t, e))
        }, []);
        return (0, u.usePageTitle)({
            location: T.default.Messages.OAUTH2_TITLE
        }), (0, i.jsx)(l.ThemeContextProvider, {
            theme: E.ThemeTypes.DARK,
            children: (0, i.jsx)(d.default, {
                embedded: s,
                className: a()((0, c.getThemeClass)(E.ThemeTypes.DARK), f.wave),
                splash: (0, _.getArtForPath)(),
                waveState: o,
                showLogo: !0,
                updateWaveState: A,
                children: (0, i.jsx)("div", {
                    className: a()(f.oauth2Wrapper, n),
                    children: t
                })
            })
        })
    }

    function A(e) {
        let {
            children: t,
            transitionState: n,
            ...r
        } = e;
        return (0, i.jsx)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            transitionState: n,
            className: f.oauth2Wrapper,
            ...r,
            children: t
        })
    }
}