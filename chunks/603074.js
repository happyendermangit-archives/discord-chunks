function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("990547"),
        l = n("442837"),
        u = n("481060"),
        d = n("100527"),
        _ = n("906732"),
        c = n("213609"),
        E = n("28546"),
        I = n("675478"),
        T = n("19780"),
        f = n("208049"),
        S = n("763296"),
        h = n("526617"),
        A = n("592296");

    function m(e) {
        let {
            guildId: t,
            channel: n,
            containerWidth: a,
            onClose: m,
            onSelect: N,
            analyticsSource: p,
            suppressPlaySound: O,
            shouldShowUpsell: R = !0,
            gridNotice: C,
            autoWidth: g = !1,
            soundButtonOverlay: L,
            listPadding: v,
            renderHeader: D,
            defaultSoundsOnly: M
        } = e, y = (0, l.useStateFromStores)([S.default], () => S.default.isFetchingSounds() || S.default.isFetchingDefaultSounds()), P = (0, l.useStateFromStores)([T.default], () => T.default.getMediaSessionId()), {
            analyticsLocations: U
        } = (0, _.default)(d.default.SOUNDBOARD_POPOUT);
        return (0, c.default)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: p,
                guild_id: t,
                media_session_id: P
            }
        }), r.useEffect(() => {
            f.maybeFetchSoundboardSounds(), I.FrecencyUserSettingsActionCreators.loadIfNecessary(), (0, E.setSearchQuery)("")
        }, []), (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: U,
            children: (0, i.jsx)(u.Dialog, {
                className: s()(A.picker, {
                    [A.fetching]: y,
                    [A.autoWidth]: g
                }),
                children: y ? (0, i.jsx)(u.Spinner, {}) : (0, i.jsx)(h.default, {
                    guildId: t,
                    channel: n,
                    onClose: m,
                    onSelect: N,
                    containerWidth: a,
                    suppressPlaySound: O,
                    shouldShowUpsell: R,
                    gridNotice: C,
                    soundButtonOverlay: L,
                    listPadding: v,
                    renderHeader: D,
                    defaultSoundsOnly: M
                })
            })
        })
    }
}