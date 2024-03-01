function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("759843"),
        o = n("446674"),
        u = n("77078"),
        d = n("812204"),
        c = n("685665"),
        f = n("428958"),
        m = n("538282"),
        p = n("872173"),
        h = n("945956"),
        E = n("305122"),
        g = n("235004"),
        C = n("534108"),
        S = n("673431");

    function T(e) {
        let {
            guildId: t,
            channel: n,
            containerWidth: a,
            onClose: T,
            onSelect: v,
            analyticsSource: I,
            suppressPlaySound: _,
            shouldShowUpsell: N = !0,
            gridNotice: A,
            autoWidth: x = !1,
            soundButtonOverlay: y,
            listPadding: O,
            renderHeader: R,
            defaultSoundsOnly: M
        } = e, L = (0, o.useStateFromStores)([g.default], () => g.default.isFetchingSounds() || g.default.isFetchingDefaultSounds()), P = (0, o.useStateFromStores)([h.default], () => h.default.getMediaSessionId()), {
            AnalyticsLocationProvider: b
        } = (0, c.default)(d.default.SOUNDBOARD_POPOUT);
        return (0, f.default)({
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: I,
                guild_id: t,
                media_session_id: P
            }
        }), i.useEffect(() => {
            E.maybeFetchSoundboardSounds(), p.FrecencyUserSettingsActionCreators.loadIfNecessary(), (0, m.setSearchQuery)("")
        }, []), (0, l.jsx)(b, {
            children: (0, l.jsx)("div", {
                className: s(S.picker, {
                    [S.fetching]: L,
                    [S.autoWidth]: x
                }),
                children: L ? (0, l.jsx)(u.Spinner, {}) : (0, l.jsx)(C.default, {
                    guildId: t,
                    channel: n,
                    onClose: T,
                    onSelect: v,
                    containerWidth: a,
                    suppressPlaySound: _,
                    shouldShowUpsell: N,
                    gridNotice: A,
                    soundButtonOverlay: y,
                    listPadding: O,
                    renderHeader: R,
                    defaultSoundsOnly: M
                })
            })
        })
    }
}