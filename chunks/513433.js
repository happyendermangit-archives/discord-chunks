function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("242880"),
        o = n("629815"),
        i = n("241174"),
        a = n("217014"),
        u = n("894288"),
        s = n("408974"),
        l = n("488764"),
        c = n("886708");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(I, e);
        var t, n, i, p, m, y = (t = I, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : f(e)
        });

        function I() {
            var e, t, n, o;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, I), e = y.apply(this, arguments), t = f(e), n = "handleVoiceStateUpdates", o = function(t) {
                t.voiceStates.forEach(function(t) {
                    if (null == t.channelId || t.userId !== a.default.getId()) return;
                    if (e.terminate(), r.Storage.get(c.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !1)) return;
                    var n = u.default.getVoiceChannelId();
                    if (null != n) t.channelId === n && l.default.isAudienceMember(t.userId, n) && (r.Storage.set(c.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !0), s.openStageChannelAudienceNoticeModal(n))
                })
            }, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, e
        }
        return i = I, p = [{
            key: "_initialize",
            value: function() {
                o.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
            }
        }, {
            key: "_terminate",
            value: function() {
                o.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
            }
        }], d(i.prototype, p), m && d(i, m), I
    }(i.default);
    t.default = new p
}