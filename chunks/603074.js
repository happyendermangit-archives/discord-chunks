function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
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
        A = n("526617"),
        h = n("919280");

    function m(e) {
        let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: m,
            onSelect: N,
            analyticsSource: O,
            suppressPlaySound: p,
            shouldShowUpsell: R = !0,
            gridNotice: C,
            autoWidth: g = !1,
            soundButtonOverlay: L,
            listPadding: D,
            renderHeader: v,
            defaultSoundsOnly: M
        } = e, y = (0, l.useStateFromStores)([S.default], () => S.default.isFetchingSounds() || S.default.isFetchingDefaultSounds()), P = (0, l.useStateFromStores)([T.default], () => T.default.getMediaSessionId()), {
            analyticsLocations: U
        } = (0, _.default)(d.default.SOUNDBOARD_POPOUT);
        return (0, c.default)({
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: O,
                guild_id: t,
                media_session_id: P
            }
        }), r.useEffect(() => {
            f.maybeFetchSoundboardSounds(), I.FrecencyUserSettingsActionCreators.loadIfNecessary(), (0, E.setSearchQuery)("")
        }, []), (0, i.jsx)(_.AnalyticsLocationProvider, {
            value: U,
            children: (0, i.jsx)(u.Dialog, {
                className: a()(h.picker, {
                    [h.fetching]: y,
                    [h.autoWidth]: g
                }),
                children: y ? (0, i.jsx)(u.Spinner, {}) : (0, i.jsx)(A.default, {
                    guildId: t,
                    channel: n,
                    onClose: m,
                    onSelect: N,
                    containerWidth: s,
                    suppressPlaySound: p,
                    shouldShowUpsell: R,
                    gridNotice: C,
                    soundButtonOverlay: L,
                    listPadding: D,
                    renderHeader: v,
                    defaultSoundsOnly: M
                })
            })
        })
    }
}