function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("217014"),
        c = n("935741"),
        f = n("335911"),
        d = n("29884"),
        _ = n("545072"),
        E = n("665863"),
        p = n("281767");

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = !0,
        O = !0;

    function T() {
        var e, t = _.default.getChannelId();
        if (null == t) e = !0;
        else {
            var n, r = c.default.getChannel(t),
                o = E.default.getVoiceState(null == r ? void 0 : r.getGuildId(), l.default.getId());
            e = f.default.getMode() !== p.InputModes.VOICE_ACTIVITY || null == r || r.isPrivate() || r.isGuildStageVoice() || d.default.can(p.Permissions.USE_VAD, r) || null == (n = o) || !!n.suppress || null != n.requestToSpeakTimestamp || !1
        }
        if (h === e) return !1;
        O = e, h = e, s.default.dispatch({
            type: "SET_VAD_PERMISSION",
            hasPermission: h
        })
    }
    var S = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
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
            var e, r, o, i = y(t);
            if (n) {
                var a = y(this).constructor;
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
                this.waitFor(d.default, f.default, _.default, E.default)
            }
        }, {
            key: "shouldShowWarning",
            value: function() {
                return !O
            }
        }, {
            key: "canUseVoiceActivity",
            value: function() {
                return h
            }
        }], m(r.prototype, o), i && m(r, i), u
    }(u.default.Store);
    i = "PermissionVADStore", (o = "displayName") in(r = S) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new S(s.default, {
        RTC_CONNECTION_STATE: T,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: T,
        AUDIO_SET_MODE: T,
        CHANNEL_UPDATES: T,
        THREAD_UPDATE: T,
        GUILD_ROLE_UPDATE: T,
        GUILD_MEMBER_UPDATE: T,
        IMPERSONATE_UPDATE: T,
        IMPERSONATE_STOP: T,
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.some(function(e) {
                return e.userId === l.default.getId() && T()
            })
        },
        AUDIO_TOGGLE_SELF_MUTE: function() {
            O = h
        },
        PERMISSION_CLEAR_VAD_WARNING: function() {
            O = !0
        }
    })
}