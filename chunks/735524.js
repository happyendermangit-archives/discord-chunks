function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldImmediatelyRequestVoicePermissions: function() {
            return T
        }
    });
    var r = n("807471"),
        o = n("967385"),
        i = n("488764"),
        a = n("672933"),
        u = n("621195"),
        s = n("217014"),
        l = n("935741"),
        c = n("335911"),
        f = n("545072"),
        d = n("410045"),
        _ = n("281767"),
        E = n("203151");

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

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
    var h = null;

    function O() {
        o.default.requestPermission(E.NativePermissionTypes.AUDIO).then(function(e) {
            e && (0, d.default)(!0)
        }), c.default.getMode() === _.InputModes.PUSH_TO_TALK && o.default.requestPermission(E.NativePermissionTypes.INPUT_MONITORING)
    }

    function T(e, t) {
        var n;
        return (null === (n = l.default.getChannel(t)) || void 0 === n ? !void 0 : !n.isListenModeCapable()) || i.default.isSpeaker(e, t)
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
        }(c, e);
        var t, n, r, o, i, l = (t = c, n = function() {
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
            }(r) || "function" == typeof r) ? r : p(e)
        });

        function c() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), e = l.apply(this, arguments), t = p(e), n = "actions", r = {
                VOICE_STATE_UPDATES: e.handleVoiceStateUpdates,
                VOICE_CHANNEL_SELECT: e.handleVoiceChannelSelect
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return r = c, o = [{
            key: "handleVoiceChannelSelect",
            value: function(e) {
                null == e.channelId && (h = null)
            }
        }, {
            key: "handleVoiceStateUpdates",
            value: function(e) {
                e.voiceStates.forEach(function(e) {
                    var t, n = e.userId,
                        r = e.channelId;
                    if (null != r && s.default.getId() === n && null != f.default.getRTCConnectionId()) {
                        if (h !== r) {
                            ;
                            if (T(n, r)) {
                                h = r, O();
                                return
                            }
                            t = new u.default(e), (0, a.getAudienceRequestToSpeakState)(t) === a.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && (h = r, O())
                        }
                    }
                })
            }
        }], m(r.prototype, o), i && m(r, i), c
    }(r.default);
    t.default = new S
}