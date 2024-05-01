function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("470079"),
        r = n("348327"),
        s = n.n(r),
        a = n("97613"),
        o = n.n(a),
        l = n("990547"),
        u = n("570140"),
        d = n("592125"),
        _ = n("944486"),
        c = n("914010"),
        E = n("626135"),
        I = n("367907"),
        T = n("565384");
    let f = (0, l.trackMaker)({
        analyticEventConfigs: E.AnalyticEventConfigs,
        dispatcher: u.default,
        TRACK_ACTION_NAME: "TRACK"
    });

    function S(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                disableTrack: !1,
                trackOnInitialLoad: !1
            },
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = i.useRef(),
            a = i.useRef();
        i.useEffect(() => {
            let i = !s()(r.current, e);
            i && (r.current = e);
            let u = !s()(a.current, n);
            if (u && (a.current = n), !i && !u) return;
            let S = {
                ...e,
                sequenceId: o()("impression_")
            };
            return ! function(e) {
                var t, n;
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        name: r,
                        type: s,
                        properties: a
                    } = e;
                if (e.type === l.ImpressionTypes.MODAL && null == e.name && (0, T.getImpressionStack)().some(e => {
                        var t;
                        return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                    })) return;
                (0, T.setCurrentImpression)(e);
                let o = null !== (t = null == a ? void 0 : a.guild_id) && void 0 !== t ? t : c.default.getGuildId(),
                    u = null !== (n = null == a ? void 0 : a.channel_id) && void 0 !== n ? n : _.default.getChannelId(o),
                    S = (0, E.expandEventProperties)({
                        impression_type: s,
                        location: (0, T.getLocation)(),
                        ...(0, I.collectGuildAnalyticsMetadata)(o),
                        ...(0, I.collectChannelAnalyticsMetadata)(d.default.getChannel(u)),
                        ...a
                    });
                if (i) {
                    (0, T.setDebugTrackedData)(null, null);
                    return
                }
                null != r && null != s && ((0, E.debugLogEvent)(r, S), f(r, S)), (0, T.setDebugTrackedData)(r, S)
            }(S, t.disableTrack), () => {
                null != S && (0, T.cleanupImpression)(S)
            }
        }, t.trackOnInitialLoad ? [] : void 0)
    }
}