function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useLegacyPlatformType: function() {
            return m
        },
        usePlatformAllowed: function() {
            return A
        },
        usePlatforms: function() {
            return h
        }
    }), n("47120");
    var i = n("470079"),
        r = n("392711"),
        s = n.n(r),
        a = n("442837"),
        o = n("726542"),
        l = n("487576"),
        u = n("553795"),
        d = n("594174"),
        _ = n("70956"),
        c = n("930090"),
        E = n("981631"),
        I = n("420212");
    let T = {
            [E.PlatformTypes.INSTAGRAM]: ["1036753656588017764"]
        },
        f = new Map([
            [E.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
        ]),
        S = 30 * _.default.Millis.DAY;

    function A(e) {
        let {
            forUserProfile: t
        } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentUser()), i = l.PlayStationVoiceExperiment.useExperiment({
            location: "f2f7ef_1"
        }, {
            autoTrackExposure: !1
        }).allowPlayStationStaging, {
            enabled: r
        } = c.AmazonMusicConnectionExperiment.useExperiment({
            location: "ConnectionsHooks"
        });
        return e => {
            var s;
            return e.type === E.PlatformTypes.PLAYSTATION_STAGING ? i : e.type === E.PlatformTypes.AMAZON_MUSIC ? r : !!(void 0 !== n && (null === (s = T[e.type]) || void 0 === s ? void 0 : s.includes(n.id))) || !!t || e.enabled
        }
    }

    function h() {
        let e = (0, a.useStateFromStores)([u.default], () => u.default.getAccounts()),
            t = A({
                forUserProfile: !1
            }),
            n = i.useMemo(() => {
                let t = new Set;
                return e.forEach(e => t.add(e.type)), t
            }, [e]);
        return s().sortBy(o.default.filter(t), [e => {
            var t;
            return !(f.has(e.type) && Date.now() < (null !== (t = f.get(e.type)) && void 0 !== t ? t : 0) + S)
        }, e => n.has(e.type), e => e.hasMetadata, e => !E.ACTIVITY_PLATFORM_TYPES.has(e.type), e => e.name])
    }

    function m(e) {
        let [t, n] = i.useState(!1);

        function r(e) {
            let {
                key: t
            } = e;
            t === I.KeyboardKeysUpdated.SHIFT && n(!0)
        }

        function s(e) {
            let {
                key: t
            } = e;
            t === I.KeyboardKeysUpdated.SHIFT && n(!1)
        }
        return (i.useEffect(() => (window.addEventListener("keydown", r), window.addEventListener("keyup", s), () => {
            window.removeEventListener("keydown", r), window.removeEventListener("keyup", s)
        }), []), t && e === E.PlatformTypes.TWITTER) ? E.PlatformTypes.TWITTER_LEGACY : e
    }
}