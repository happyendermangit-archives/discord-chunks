function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l = n("392711"),
        c = n.n(l),
        f = n("898511"),
        d = n("629815"),
        _ = n("390579"),
        E = n("736381"),
        p = n("73013"),
        m = n("217014"),
        y = n("335911"),
        I = n("380019"),
        h = n("656462");

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function g(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return O(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function A() {
        var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (null == a) r = null;
        else {
            r = _.default.getSelectedParticipantId(a);
            var t = p.default.getLastActiveStream(),
                n = null != r ? _.default.getParticipant(a, r) : null;
            if (((null == n ? void 0 : n.type) === h.ParticipantTypes.ACTIVITY || (null == n ? void 0 : n.type) === h.ParticipantTypes.USER && !(null === (o = n.voiceState) || void 0 === o ? void 0 : o.selfVideo)) && (r = null), null != t && null == r && (r = null === (i = _.default.getParticipant(a, (0, E.encodeStreamKey)(t))) || void 0 === i ? void 0 : i.id), null == r) {
                var r, o, i, s, l, f, d = m.default.getId(),
                    O = c()(_.default.getVideoParticipants(a)).filter(function(e) {
                        return e.type === h.ParticipantTypes.USER && e.user.id !== d && !y.default.isLocalVideoDisabled(e.user.id)
                    }),
                    T = Date.now();
                null == (r = null === (s = O.map(function(e) {
                    return [e.user.id, I.default.getSpeakingDuration(e.user.id, T)]
                }).filter(function(e) {
                    var t = g(e, 2);
                    return 0 !== (t[0], t[1])
                }).maxBy(function(e) {
                    var t = g(e, 2);
                    return -(t[0], t[1])
                })) || void 0 === s ? void 0 : s[0]) && (r = null != u ? u : null === (f = O.first()) || void 0 === f ? void 0 : null === (l = f.user) || void 0 === l ? void 0 : l.id)
            }
        }
        u !== r && (u = r, e && C.emitChange())
    }
    var b = c().debounce(A, 300);

    function N() {
        return b(), !1
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
            }), t && v(e, t)
        }(l, e);
        var t, n, r, o, i, s = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = S(t);
            if (n) {
                var a = S(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), s.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(_.default, m.default, I.default, p.default, y.default), this.syncWith([_.default, p.default], N)
            }
        }, {
            key: "getSpeaker",
            value: function(e) {
                return a !== e && (a = e, A(!1)), null != u ? u : m.default.getId()
            }
        }], T(r.prototype, o), i && T(r, i), l
    }(f.default.Store);
    i = "VideoSpeakerStore", (o = "displayName") in(r = R) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i;
    var C = new R(d.default, {
        AUDIO_SET_LOCAL_VIDEO_DISABLED: N
    });
    t.default = C
}