function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("693744"),
        u = n("898511"),
        s = n("950175"),
        l = n("414012"),
        c = n("705158"),
        f = n("224560"),
        d = n("868615"),
        _ = n("962839"),
        E = n("941504"),
        p = n("740106"),
        m = [d.PremiumUpsellTypes.STREAM_QUALITY_UPSELL];

    function y(e) {
        var t = e.premiumUpsellType,
            n = e.className,
            o = (0, u.useStateFromStores)([l.default], function() {
                return l.default.affinities
            }),
            y = o.length > 0 && m.includes(t),
            I = c.default.useExperiment({
                location: "HD Streaming Upsell"
            }, {
                autoTrackExposure: y,
                disable: !y
            }).enabled,
            h = (0, u.useStateFromStores)([l.default], function() {
                return l.default.hasFetched
            });
        r.useEffect(function() {
            !h && s.getNitroAffinity()
        }, [h]);
        var O = o.map(function(e, t) {
            return r.createElement(f.AvatarWrapper, {
                key: e.id,
                affinity: e,
                applyMask: t !== o.length - 1,
                size: _.AvatarSizes.SIZE_20
            })
        });
        return I ? r.createElement("div", {
            className: i()(p.container, n)
        }, r.createElement("div", {
            className: p.iconContainer
        }, O), r.createElement("div", {
            className: p.textContainer
        }, r.createElement(a.Text, {
            variant: "text-sm/medium"
        }, function() {
            if (t === d.PremiumUpsellTypes.STREAM_QUALITY_UPSELL) return E.default.Messages.STREAM_PREMIUM_AFFINITY_UPSELL.format({
                numFriends: o.length
            });
            return null
        }()))) : null
    }
}