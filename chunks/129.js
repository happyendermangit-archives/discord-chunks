function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("383959"),
        u = n("898511"),
        s = n("784184"),
        l = n("649455"),
        c = n("396586"),
        f = n("278982"),
        d = n("251384"),
        _ = n("968574"),
        E = n("545072"),
        p = n("14253"),
        m = n("452700"),
        y = n("201008"),
        I = n("919280");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        var t, n = e.guildId,
            o = e.channel,
            O = e.containerWidth,
            T = e.onClose,
            S = e.onSelect,
            v = e.analyticsSource,
            g = e.suppressPlaySound,
            A = e.shouldShowUpsell,
            b = e.gridNotice,
            N = e.autoWidth,
            R = e.soundButtonOverlay,
            C = e.listPadding,
            P = e.renderHeader,
            D = e.defaultSoundsOnly,
            L = (0, u.useStateFromStores)([m.default], function() {
                return m.default.isFetchingSounds() || m.default.isFetchingDefaultSounds()
            }),
            M = (0, u.useStateFromStores)([E.default], function() {
                return E.default.getMediaSessionId()
            }),
            U = (0, c.default)(l.default.SOUNDBOARD_POPOUT).analyticsLocations;
        return (0, f.default)({
            type: a.ImpressionTypes.POPOUT,
            name: a.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: v,
                guild_id: n,
                media_session_id: M
            }
        }), r.useEffect(function() {
            p.maybeFetchSoundboardSounds(), _.FrecencyUserSettingsActionCreators.loadIfNecessary(), (0, d.setSearchQuery)("")
        }, []), r.createElement(c.AnalyticsLocationProvider, {
            value: U
        }, r.createElement("div", {
            className: i()(I.picker, (h(t = {}, I.fetching, L), h(t, I.autoWidth, void 0 !== N && N), t))
        }, L ? r.createElement(s.Spinner, null) : r.createElement(y.default, {
            guildId: n,
            channel: o,
            onClose: T,
            onSelect: S,
            containerWidth: O,
            suppressPlaySound: g,
            shouldShowUpsell: void 0 === A || A,
            gridNotice: b,
            soundButtonOverlay: R,
            listPadding: C,
            renderHeader: P,
            defaultSoundsOnly: D
        })))
    }
}