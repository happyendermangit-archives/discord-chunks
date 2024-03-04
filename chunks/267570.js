function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2Page: function() {
            return m
        },
        OAuth2Modal: function() {
            return p
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("516256"),
        l = n("77078"),
        u = n("69927"),
        d = n("554054"),
        c = n("831588"),
        f = n("439932"),
        _ = n("49111"),
        h = n("289382"),
        E = n("782340"),
        g = n("720016");

    function m(e) {
        let {
            children: t,
            wrapperClassName: n,
            embedded: r
        } = e, [o, m] = s.useState(h.WaveStates.INITIAL), p = s.useCallback(e => {
            m(t => Math.max(t, e))
        }, []);
        return (0, u.usePageTitle)({
            location: E.default.Messages.OAUTH2_TITLE
        }), (0, i.jsx)(l.ThemeContextProvider, {
            theme: _.ThemeTypes.DARK,
            children: (0, i.jsx)(d.default, {
                embedded: r,
                className: a((0, f.getThemeClass)(_.ThemeTypes.DARK), g.wave),
                splash: (0, c.getArtForPath)(),
                waveState: o,
                showLogo: !0,
                updateWaveState: p,
                children: (0, i.jsx)("div", {
                    className: a(g.oauth2Wrapper, n),
                    children: t
                })
            })
        })
    }

    function p(e) {
        let {
            children: t,
            transitionState: n,
            ...s
        } = e;
        return (0, i.jsx)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            transitionState: n,
            className: g.oauth2Wrapper,
            ...s,
            children: t
        })
    }
}