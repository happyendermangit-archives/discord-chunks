function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("348327"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("935741"),
        d = n("306912"),
        _ = n("545072"),
        E = n("894288"),
        p = n("359017"),
        m = n("711334"),
        y = n("991160"),
        I = n("705064"),
        h = n("487181"),
        O = n("673270"),
        T = n("886708"),
        S = n("281767");

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function A(e, t) {
        return (A = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var b = null;

    function N() {
        var e = function() {
            var e, t, n, r, o, i, a, u = E.default.getVoiceChannelId();
            if (null == u) return null;
            var s = h.default.getStageInstanceByChannel(u);
            if (null == s) return null;
            var l = f.default.getChannel(u);
            if (null == l || !p.canEveryone(S.Permissions.VIEW_CHANNEL, l)) return null;
            var c = d.default.getGuild(l.getGuildId());
            if (null == c || !c.hasFeature(S.GuildFeatures.DISCOVERABLE)) return null;
            var _ = (0, I.packStageChannelPartyId)(l, s),
                v = (null == b ? void 0 : null === (e = b.party) || void 0 === e ? void 0 : e.id) === _ ? b : null,
                g = m.default.getMutableParticipants(l.id, y.StageChannelParticipantNamedIndex.SPEAKER),
                A = g.filter(function(e) {
                    return e.type === y.StageChannelParticipantTypes.STREAM
                }).length,
                N = g.length - A,
                R = m.default.getParticipantCount(u) - A,
                C = (null == v ? void 0 : null === (t = v.party) || void 0 === t ? void 0 : t.size) != null ? v.party.size[1] : 0;
            return {
                application_id: T.STAGE_APPLICATION_ID,
                name: null !== (o = null !== (r = s.topic) && void 0 !== r ? r : l.topic) && void 0 !== o ? o : l.name,
                type: (0, O.getStageHasMedia)(l.id) ? S.ActivityTypes.WATCHING : S.ActivityTypes.LISTENING,
                timestamps: {
                    start: null !== (i = null == v ? void 0 : null === (n = v.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== i ? i : new Date().getTime()
                },
                assets: {
                    small_image: null !== (a = c.icon) && void 0 !== a ? a : void 0,
                    small_text: c.name
                },
                party: {
                    id: _,
                    size: [N, Math.max(R, C)]
                }
            }
        }();
        return !s()(e, b) && (b = e, !0)
    }
    var R = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && A(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = g(t);
            if (n) {
                var a = g(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(f.default, E.default, h.default, _.default)
            }
        }, {
            key: "getActivity",
            value: function() {
                return b
            }
        }], v(r.prototype, o), i && v(r, i), u
    }(l.default.Store);
    i = "StageChannelSelfRichPresenceStore", (o = "displayName") in(r = R) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new R(c.default, {
        CONNECTION_OPEN: N,
        STAGE_INSTANCE_CREATE: N,
        STAGE_INSTANCE_UPDATE: N,
        STAGE_INSTANCE_DELETE: N,
        VOICE_CHANNEL_SELECT: N,
        RTC_CONNECTION_STATE: function(e) {
            var t, n, r, o = e.state,
                i = null !== (r = null == b ? void 0 : null === (n = b.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== r ? r : 0;
            return o === S.RTCConnectionStates.RTC_CONNECTED && !(i > 0) && N()
        },
        VOICE_STATE_UPDATES: function(e) {
            var t = e.voiceStates;
            if (null != b) {
                var n = (0, I.unpackStageChannelParty)(b);
                null != n && null != t.find(function(e) {
                    return e.channelId === n.channelId
                }) && N()
            }
        }
    })
}