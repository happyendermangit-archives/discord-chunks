function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("793030"),
        l = n("442837"),
        u = n("355467"),
        d = n("357355"),
        _ = n("923876"),
        c = n("422034"),
        E = n("474936"),
        I = n("182294"),
        T = n("689938"),
        f = n("600541");
    let S = [E.PremiumUpsellTypes.STREAM_QUALITY_UPSELL];

    function h(e) {
        let {
            premiumUpsellType: t,
            className: n,
            forceShow: s = !1
        } = e, h = (0, l.useStateFromStores)([d.default], () => d.default.affinities), A = h.length > 0 && S.includes(t), m = _.default.useExperiment({
            location: "HD Streaming Upsell"
        }, {
            autoTrackExposure: A,
            disable: !A || s
        }).enabled || s && A, N = (0, l.useStateFromStores)([d.default], () => d.default.hasFetched);
        r.useEffect(() => {
            !N && u.getNitroAffinity()
        }, [N]);
        let p = h.map((e, t) => (0, i.jsx)(c.AvatarWrapper, {
            affinity: e,
            applyMask: t !== h.length - 1,
            size: I.AvatarSizes.SIZE_20
        }, e.id));
        return m ? (0, i.jsxs)("div", {
            className: a()(f.container, n),
            children: [(0, i.jsx)("div", {
                className: f.iconContainer,
                children: p
            }), (0, i.jsx)("div", {
                className: f.textContainer,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    children: (() => {
                        if (t === E.PremiumUpsellTypes.STREAM_QUALITY_UPSELL) return T.default.Messages.STREAM_PREMIUM_AFFINITY_UPSELL.format({
                            numFriends: h.length
                        });
                        return null
                    })()
                })
            })]
        }) : null
    }
}