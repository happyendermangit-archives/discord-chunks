function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var r = n("470079"),
        o = n("348327"),
        i = n.n(o),
        a = n("97613"),
        u = n.n(a),
        s = n("383959"),
        l = n("629815"),
        c = n("935741"),
        f = n("894288"),
        d = n("63116"),
        _ = n("870331"),
        E = n("140817"),
        p = n("614354");

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }
    var y = (0, s.trackMaker)({
        analyticEventConfigs: _.AnalyticEventConfigs,
        dispatcher: l.default,
        TRACK_ACTION_NAME: "TRACK"
    });

    function I(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                disableTrack: !1,
                trackOnInitialLoad: !1
            },
            n = arguments.length > 2 ? arguments[2] : void 0,
            o = r.useRef(),
            a = r.useRef();
        r.useEffect(function() {
            var r = !i()(o.current, e);
            r && (o.current = e);
            var l = !i()(a.current, n);
            if (l && (a.current = n), r || l) {
                var I, h, O = (I = m({}, e), h = (h = {
                    sequenceId: u()("impression_")
                }, h), Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(h)).forEach(function(e) {
                    Object.defineProperty(I, e, Object.getOwnPropertyDescriptor(h, e))
                }), I);
                return ! function(e) {
                        var t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = e.name,
                            i = e.type,
                            a = e.properties;
                        if (!(e.type === s.ImpressionTypes.MODAL && null == e.name && (0, p.getImpressionStack)().some(function(e) {
                                var t;
                                return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                            }))) {
                            (0, p.setCurrentImpression)(e);
                            var u = null !== (t = null == a ? void 0 : a.guild_id) && void 0 !== t ? t : d.default.getGuildId(),
                                l = null !== (n = null == a ? void 0 : a.channel_id) && void 0 !== n ? n : f.default.getChannelId(u),
                                I = (0, _.expandEventProperties)(m({
                                    impression_type: i,
                                    location: (0, p.getLocation)()
                                }, (0, E.collectGuildAnalyticsMetadata)(u), (0, E.collectChannelAnalyticsMetadata)(c.default.getChannel(l)), a));
                            if (r) {
                                (0, p.setDebugTrackedData)(null, null);
                                return
                            }
                            null != o && null != i && ((0, _.debugLogEvent)(o, I), y(o, I)), (0, p.setDebugTrackedData)(o, I)
                        }
                    }(O, t.disableTrack),
                    function() {
                        null != O && (0, p.cleanupImpression)(O)
                    }
            }
        }, t.trackOnInitialLoad ? [] : void 0)
    }
}