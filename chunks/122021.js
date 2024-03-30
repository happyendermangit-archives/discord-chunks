function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useLegacyPlatformType: function() {
            return A
        },
        usePlatformAllowed: function() {
            return S
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
        c = n("981631"),
        E = n("420212");
    let I = {
            [c.PlatformTypes.INSTAGRAM]: ["1036753656588017764"]
        },
        T = new Map([
            [c.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
        ]),
        f = 30 * _.default.Millis.DAY;

    function S(e) {
        let {
            forUserProfile: t
        } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentUser()), i = l.PlayStationVoiceExperiment.useExperiment({
            location: "f2f7ef_1"
        }, {
            autoTrackExposure: !1
        }).allowPlayStationStaging;
        return e => {
            var r;
            return e.type === c.PlatformTypes.PLAYSTATION_STAGING ? i : !!(void 0 !== n && (null === (r = I[e.type]) || void 0 === r ? void 0 : r.includes(n.id))) || !!t || e.enabled
        }
    }

    function h() {
        let e = (0, a.useStateFromStores)([u.default], () => u.default.getAccounts()),
            t = S({
                forUserProfile: !1
            }),
            n = i.useMemo(() => {
                let t = new Set;
                return e.forEach(e => t.add(e.type)), t
            }, [e]);
        return s().sortBy(o.default.filter(t), [e => {
            var t;
            return !(T.has(e.type) && Date.now() < (null !== (t = T.get(e.type)) && void 0 !== t ? t : 0) + f)
        }, e => n.has(e.type), e => e.hasMetadata, e => !c.ACTIVITY_PLATFORM_TYPES.has(e.type), e => e.name])
    }

    function A(e) {
        let [t, n] = i.useState(!1);

        function r(e) {
            let {
                key: t
            } = e;
            t === E.KeyboardKeysUpdated.SHIFT && n(!0)
        }

        function s(e) {
            let {
                key: t
            } = e;
            t === E.KeyboardKeysUpdated.SHIFT && n(!1)
        }
        return (i.useEffect(() => (window.addEventListener("keydown", r), window.addEventListener("keyup", s), () => {
            window.removeEventListener("keydown", r), window.removeEventListener("keyup", s)
        }), []), t && e === c.PlatformTypes.TWITTER) ? c.PlatformTypes.TWITTER_LEGACY : e
    }
}