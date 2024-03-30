function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("585949"),
        i = n("807471"),
        a = n("163291"),
        u = n("909080"),
        s = n("335911"),
        l = n("894288"),
        c = n("63116"),
        f = n("281767");

    function d(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
        }(h, e);
        var t, n, i, m, y, I = (t = h, n = function() {
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

        function h() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h), e = I.apply(this, arguments), t = d(e), n = "actions", r = {
                GUILD_CREATE: e.handleGuildCreate,
                CHANNEL_CREATE: e.handleChannelCreate,
                LOGOUT: e.handleLogout
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return i = h, m = [{
            key: "handleGuildCreate",
            value: function(e) {
                var t = e.guild,
                    n = l.default.getChannelId(f.ME),
                    r = l.default.getVoiceChannelId();
                t.id === n && (0, u.transitionToGuild)(t.id), t.id === r && !1 !== t.unavailable && null == r && o.default.selectVoiceChannel((0, l.findFirstVoiceChannelId)(t.id))
            }
        }, {
            key: "handleChannelCreate",
            value: function(e) {
                var t = e.channel;
                if (t.type === f.ChannelTypes.GROUP_DM) {
                    var n = t.originChannelId,
                        r = l.default.getChannelId(f.NULL_STRING_GUILD_ID);
                    null == c.default.getGuildId() && null != n && n === r && (0, a.transitionTo)(f.Routes.CHANNEL(f.ME, t.id)), null != n && n === l.default.getVoiceChannelId() && o.default.selectVoiceChannel(t.id, s.default.isVideoEnabled())
                }
            }
        }, {
            key: "handleLogout",
            value: function() {
                r.default.dispatch({
                    type: "VOICE_CHANNEL_SELECT",
                    channelId: null,
                    guildId: null,
                    video: !1,
                    currentVoiceChannelId: null
                })
            }
        }], _(i.prototype, m), y && _(i, y), h
    }(i.default);
    t.default = new m
}