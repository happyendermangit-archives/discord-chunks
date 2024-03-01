function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePlatformAllowed: function() {
            return g
        },
        usePlatforms: function() {
            return C
        },
        useLegacyPlatformType: function() {
            return S
        }
    }), n("222007");
    var l = n("884691"),
        i = n("917351"),
        a = n.n(i),
        s = n("446674"),
        r = n("376556"),
        o = n("695702"),
        u = n("47319"),
        d = n("697218"),
        c = n("718517"),
        f = n("49111"),
        m = n("894282");
    let p = {
            [f.PlatformTypes.INSTAGRAM]: ["1036753656588017764"]
        },
        h = new Map([
            [f.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
        ]),
        E = 30 * c.default.Millis.DAY;

    function g(e) {
        let {
            forUserProfile: t
        } = e, n = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser()), l = o.PlayStationVoiceExperiment.useExperiment({
            location: "f2f7ef_1"
        }, {
            autoTrackExposure: !1
        }).allowPlayStationStaging;
        return e => {
            var i;
            return e.type === f.PlatformTypes.PLAYSTATION_STAGING ? l : !!(void 0 !== n && (null === (i = p[e.type]) || void 0 === i ? void 0 : i.includes(n.id))) || !!t || e.enabled
        }
    }

    function C() {
        let e = (0, s.useStateFromStores)([u.default], () => u.default.getAccounts()),
            t = g({
                forUserProfile: !1
            }),
            n = l.useMemo(() => {
                let t = new Set;
                return e.forEach(e => t.add(e.type)), t
            }, [e]);
        return a.sortBy(r.default.filter(t), [e => {
            var t;
            return !(h.has(e.type) && Date.now() < (null !== (t = h.get(e.type)) && void 0 !== t ? t : 0) + E)
        }, e => n.has(e.type), e => e.hasMetadata, e => !f.ACTIVITY_PLATFORM_TYPES.has(e.type), e => e.name])
    }

    function S(e) {
        let [t, n] = l.useState(!1);

        function i(e) {
            let {
                key: t
            } = e;
            t === m.KeyboardKeysUpdated.SHIFT && n(!0)
        }

        function a(e) {
            let {
                key: t
            } = e;
            t === m.KeyboardKeysUpdated.SHIFT && n(!1)
        }
        return (l.useEffect(() => (window.addEventListener("keydown", i), window.addEventListener("keyup", a), () => {
            window.removeEventListener("keydown", i), window.removeEventListener("keyup", a)
        }), []), t && e === f.PlatformTypes.TWITTER) ? f.PlatformTypes.TWITTER_LEGACY : e
    }
}