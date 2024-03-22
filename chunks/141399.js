function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("37983"),
        i = n("884691"),
        a = n("414456"),
        l = n.n(a),
        s = n("459334"),
        o = n("446674"),
        u = n("850068"),
        c = n("446488"),
        d = n("921941"),
        f = n("871948"),
        m = n("646718"),
        _ = n("52904"),
        E = n("782340"),
        I = n("46901");
    let T = [m.PremiumUpsellTypes.STREAM_QUALITY_UPSELL];

    function p(e) {
        let {
            premiumUpsellType: t,
            className: n
        } = e, a = (0, o.useStateFromStores)([c.default], () => c.default.affinities), p = a.length > 0 && T.includes(t), S = d.default.useExperiment({
            location: "HD Streaming Upsell"
        }, {
            autoTrackExposure: p,
            disable: !p
        }).enabled, P = (0, o.useStateFromStores)([c.default], () => c.default.hasFetched);
        i.useEffect(() => {
            !P && u.getNitroAffinity()
        }, [P]);
        let R = a.map((e, t) => (0, r.jsx)(f.AvatarWrapper, {
            affinity: e,
            applyMask: t !== a.length - 1,
            size: _.AvatarSizes.SIZE_20
        }, e.id));
        return S ? (0, r.jsxs)("div", {
            className: l(I.container, n),
            children: [(0, r.jsx)("div", {
                className: I.iconContainer,
                children: R
            }), (0, r.jsx)("div", {
                className: I.textContainer,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    children: (() => {
                        if (t === m.PremiumUpsellTypes.STREAM_QUALITY_UPSELL) return E.default.Messages.STREAM_PREMIUM_AFFINITY_UPSELL.format({
                            numFriends: a.length
                        });
                        return null
                    })()
                })
            })]
        }) : null
    }
}