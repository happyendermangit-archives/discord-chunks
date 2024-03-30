function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("694179"),
        i = n("518254"),
        a = n("335328"),
        u = n("930949"),
        s = n("665863"),
        l = n("473702"),
        c = n("423284");

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
    var p = (0, c.createSoundForPack)("call_calling", o.default.getSoundpack()),
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }(h, e);
            var t, n, r, m, y, I = (t = h, n = function() {
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

            function h() {
                var e, t, n, r;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, h), e = I.apply(this, arguments), t = f(e), n = "stores", r = new Map().set(i.default, e.handleRingUpdate).set(a.default, e.handleRingUpdate).set(u.default, e.handleRingUpdate).set(s.default, e.handleRingUpdate).set(o.default, e.handleSoundpackUpdate), n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, e
            }
            return r = h, m = [{
                key: "handleSoundpackUpdate",
                value: function() {
                    p.stop(), p = (0, c.createSoundForPack)("call_calling", o.default.getSoundpack())
                }
            }, {
                key: "handleRingUpdate",
                value: function() {
                    var e = i.default.getCalls().filter(function(e) {
                            return e.ringing.length > 0 && s.default.getCurrentClientVoiceChannelId(null) === e.channelId
                        }),
                        t = s.default.getCurrentClientVoiceChannelId(null);
                    null != t && l.default.countVoiceStatesForChannel(t) >= 2 || !(e.length > 0) || a.default.isSoundDisabled("call_calling") || u.default.disableSounds ? p.stop() : p.loop()
                }
            }], d(r.prototype, m), y && d(r, y), h
        }(r.default);
    t.default = new m
}