function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("642234"),
        u = n("705014");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = {
            soundpack: u.Soundpacks.CLASSIC
        },
        _ = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(_, e);
            var t, n, r, o, i, l = (t = _, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = c(t);
                if (n) {
                    var a = c(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function _() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, _), l.apply(this, arguments)
            }
            return r = _, o = [{
                key: "initialize",
                value: function(e) {
                    var t = this;
                    a.default.subscribe({
                        location: "1"
                    }, function() {
                        return t.emitChange()
                    }), null != e && (d = e)
                }
            }, {
                key: "getState",
                value: function() {
                    return d
                }
            }, {
                key: "getSoundpack",
                value: function() {
                    var e;
                    return a.default.getCurrentConfig({
                        location: "37bac2_1"
                    }, {
                        autoTrackExposure: !1
                    }).allowAprilFoolsSoundpack && (e = d.soundpack, Object.values(u.Soundpacks).includes(e)) ? d.soundpack : u.Soundpacks.CLASSIC
                }
            }], s(r.prototype, o), i && s(r, i), _
        }(o.default.PersistedStore);
    l(_, "displayName", "SoundpackStore"), l(_, "persistKey", "SoundpackStore"), t.default = new _(i.default, {
        SET_SOUNDPACK: function(e) {
            d = {
                soundpack: e.soundpack
            }
        }
    })
}