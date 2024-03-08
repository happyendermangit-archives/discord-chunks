function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("759843"),
        o = n("446674"),
        u = n("77078"),
        d = n("812204"),
        c = n("685665"),
        f = n("428958"),
        p = n("538282"),
        m = n("872173"),
        h = n("945956"),
        x = n("305122"),
        E = n("235004"),
        y = n("534108"),
        g = n("673431");

    function S(e) {
        let {
            guildId: t,
            channel: n,
            containerWidth: a,
            onClose: S,
            onSelect: C,
            analyticsSource: I,
            suppressPlaySound: T,
            shouldShowUpsell: _ = !0,
            gridNotice: v,
            autoWidth: N = !1,
            soundButtonOverlay: A,
            listPadding: O,
            renderHeader: M,
            defaultSoundsOnly: R
        } = e, k = (0, o.useStateFromStores)([E.default], () => E.default.isFetchingSounds() || E.default.isFetchingDefaultSounds()), L = (0, o.useStateFromStores)([h.default], () => h.default.getMediaSessionId()), {
            AnalyticsLocationProvider: b
        } = (0, c.default)(d.default.SOUNDBOARD_POPOUT);
        return (0, f.default)({
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: I,
                guild_id: t,
                media_session_id: L
            }
        }), l.useEffect(() => {
            x.maybeFetchSoundboardSounds(), m.FrecencyUserSettingsActionCreators.loadIfNecessary(), (0, p.setSearchQuery)("")
        }, []), (0, i.jsx)(b, {
            children: (0, i.jsx)("div", {
                className: s(g.picker, {
                    [g.fetching]: k,
                    [g.autoWidth]: N
                }),
                children: k ? (0, i.jsx)(u.Spinner, {}) : (0, i.jsx)(y.default, {
                    guildId: t,
                    channel: n,
                    onClose: S,
                    onSelect: C,
                    containerWidth: a,
                    suppressPlaySound: T,
                    shouldShowUpsell: _,
                    gridNotice: v,
                    soundButtonOverlay: A,
                    listPadding: O,
                    renderHeader: M,
                    defaultSoundsOnly: R
                })
            })
        })
    }
}