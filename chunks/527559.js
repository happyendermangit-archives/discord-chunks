function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("217014"),
        i = n("935741"),
        a = n("29884"),
        u = n("665863"),
        s = n("247426"),
        l = n("33580"),
        c = n("979821"),
        f = n("281767");

    function d(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(m, e);
        var t, n, r = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : d(e)
        });

        function m() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), e = r.apply(this, arguments), _(d(e), "previousVoiceChannelId", void 0), _(d(e), "actions", {
                VOICE_CHANNEL_SELECT: function(t) {
                    return e.handleVoiceChannelSelect(t)
                },
                GUILD_MEMBER_UPDATE: function(t) {
                    return e.handleGuildMemberUpdate(t)
                },
                LOGOUT: function() {
                    return e.handleLogout()
                }
            }), _(d(e), "handleVoiceChannelSelect", function(t) {
                var n = t.channelId,
                    r = t.guildId,
                    o = l.HangStatusExperiment.getCurrentConfig({
                        guildId: null != r ? r : f.EMPTY_STRING_SNOWFLAKE_ID,
                        location: "HangStatusManager"
                    }, {
                        autoTrackExposure: !0
                    }),
                    u = o.enableHangStatus,
                    d = o.setDefaultStatus;
                if (null == r && null == n) {
                    e.handleDisconnectFromVoiceChannel(), e.previousVoiceChannelId = n;
                    return
                }
                if (!u || n === e.previousVoiceChannelId) return;
                if (e.previousVoiceChannelId = n, null == r || null == n) return;
                var _ = i.default.getChannel(n);
                if (null != _ && _.type === f.ChannelTypes.GUILD_VOICE && !!a.default.can(f.Permissions.SET_VOICE_CHANNEL_STATUS, _)) {
                    if (null == c.default.getCurrentHangStatus()) {
                        var E = c.default.getCurrentDefaultStatus();
                        if ((null == E ? void 0 : E.expiresAt) != null && (null == E ? void 0 : E.expiresAt) >= Date.now()) {
                            if (E.status === f.HangStatusTypes.CUSTOM && null != E.customHangStatus) {
                                var p = E.customHangStatus,
                                    m = p.status,
                                    y = p.emoji;
                                (0, s.updateCustomHangStatus)(m, y);
                                return
                            }
                            if (null == E.status) return;
                            else {
                                (0, s.updateHangStatus)(E.status);
                                return
                            }
                        }
                        d && (0, s.updateHangStatus)(f.HangStatusTypes.CHILLING)
                    }
                }
            }), _(d(e), "handleGuildMemberUpdate", function(e) {
                var t = e.user,
                    n = e.guildId;
                if (t.id !== o.default.getId()) return;
                var r = u.default.getCurrentClientVoiceChannelId(n);
                if (null != r) {
                    if (null != c.default.getCurrentHangStatus()) {
                        var l = i.default.getChannel(r);
                        !a.default.can(f.Permissions.SET_VOICE_CHANNEL_STATUS, l) && (0, s.clearHangStatus)()
                    }
                }
            }), _(d(e), "handleDisconnectFromVoiceChannel", function() {
                (0, s.clearHangStatus)()
            }), _(d(e), "handleLogout", function() {
                e.handleDisconnectFromVoiceChannel()
            }), e
        }
        return m
    }(r.default);
    t.default = new m
}