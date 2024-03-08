function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePlatformAllowed: function() {
            return E
        },
        usePlatforms: function() {
            return y
        },
        useLegacyPlatformType: function() {
            return g
        }
    }), n("222007");
    var i = n("884691"),
        l = n("917351"),
        a = n.n(l),
        s = n("446674"),
        r = n("376556"),
        o = n("695702"),
        u = n("47319"),
        d = n("697218"),
        c = n("718517"),
        f = n("49111"),
        p = n("894282");
    let m = {
            [f.PlatformTypes.INSTAGRAM]: ["1036753656588017764"]
        },
        h = new Map([
            [f.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
        ]),
        x = 30 * c.default.Millis.DAY;

    function E(e) {
        let {
            forUserProfile: t
        } = e, n = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser()), i = o.PlayStationVoiceExperiment.useExperiment({
            location: "f2f7ef_1"
        }, {
            autoTrackExposure: !1
        }).allowPlayStationStaging;
        return e => {
            var l;
            return e.type === f.PlatformTypes.PLAYSTATION_STAGING ? i : !!(void 0 !== n && (null === (l = m[e.type]) || void 0 === l ? void 0 : l.includes(n.id))) || !!t || e.enabled
        }
    }

    function y() {
        let e = (0, s.useStateFromStores)([u.default], () => u.default.getAccounts()),
            t = E({
                forUserProfile: !1
            }),
            n = i.useMemo(() => {
                let t = new Set;
                return e.forEach(e => t.add(e.type)), t
            }, [e]);
        return a.sortBy(r.default.filter(t), [e => {
            var t;
            return !(h.has(e.type) && Date.now() < (null !== (t = h.get(e.type)) && void 0 !== t ? t : 0) + x)
        }, e => n.has(e.type), e => e.hasMetadata, e => !f.ACTIVITY_PLATFORM_TYPES.has(e.type), e => e.name])
    }

    function g(e) {
        let [t, n] = i.useState(!1);

        function l(e) {
            let {
                key: t
            } = e;
            t === p.KeyboardKeysUpdated.SHIFT && n(!0)
        }

        function a(e) {
            let {
                key: t
            } = e;
            t === p.KeyboardKeysUpdated.SHIFT && n(!1)
        }
        return (i.useEffect(() => (window.addEventListener("keydown", l), window.addEventListener("keyup", a), () => {
            window.removeEventListener("keydown", l), window.removeEventListener("keyup", a)
        }), []), t && e === f.PlatformTypes.TWITTER) ? f.PlatformTypes.TWITTER_LEGACY : e
    }
}