function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("242880"),
        u = n("807471"),
        s = n("417529"),
        l = n("464105"),
        c = n("545072"),
        f = n("312368");

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

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                E(e, t, n[t])
            })
        }
        return e
    }

    function y(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = {
            chance: .2,
            cooldown: 864e5
        },
        O = (E(r = {}, f.FeedbackType.VOICE, y(m({}, h), {
            hotspot: s.HotspotLocations.VOICE_CALL_FEEDBACK,
            storageKey: "lastVoiceFeedback",
            eligibilityChecks: [function(e) {
                return !c.default.getWasEverRtcConnected() || c.default.getWasEverMultiParticipant()
            }]
        })), E(r, f.FeedbackType.STREAM, y(m({}, h), {
            hotspot: s.HotspotLocations.REPORT_PROBLEM_POST_STREAM,
            storageKey: "lastStreamFeedback"
        })), E(r, f.FeedbackType.VIDEO_BACKGROUND, y(m({}, h), {
            hotspot: s.HotspotLocations.VIDEO_BACKGROUND_FEEDBACK,
            storageKey: "lastVideoBackgroundFeedback"
        })), E(r, f.FeedbackType.ACTIVITY, {
            cooldown: 0,
            chance: .5,
            hotspot: s.HotspotLocations.POST_ACTIVITY_FEEDBACK,
            storageKey: "lastActivityFeedback"
        }), E(r, f.FeedbackType.IN_APP_REPORTS, {
            cooldown: 1728e5,
            chance: .5,
            hotspot: s.HotspotLocations.IN_APP_REPORTS_FEEDBACK,
            storageKey: "inAppReportsFeedback"
        }), r);

    function T(e) {
        return l.default.hasHotspot(e.hotspot)
    }

    function S(e) {
        return Math.random() < e.chance
    }

    function v(e) {
        if (null != e.storageKey) {
            var t = a.Storage.get(e.storageKey);
            if (null != t && Date.now() - t < e.cooldown) return !1
        }
        return !0
    }
    var g = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
        }(l, e);
        var t, n, r, o, u, s = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : d(e)
        });

        function l() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), e = s.apply(this, arguments), E(d(e), "feedbackTypeToShow", null), E(d(e), "showFeedbackModalDebounced", i().debounce(function(t) {
                if (null != e.feedbackTypeToShow) {
                    var n;
                    null != (n = O[e.feedbackTypeToShow]).storageKey && a.Storage.set(n.storageKey, Date.now()), e.feedbackTypeToShow = null, t()
                }
            }, 200)), e
        }
        return r = l, o = [{
            key: "possiblyShowFeedbackModal",
            value: function(e, t) {
                (function(e) {
                    if (__OVERLAY__) return !1;
                    var t, n = O[e],
                        r = null !== (t = n.eligibilityChecks) && void 0 !== t ? t : [];
                    return [v, S, T].every(function(e) {
                        return e(n)
                    }) && r.every(function(e) {
                        return e(n)
                    })
                })(e) && (null == this.feedbackTypeToShow || !(f.FeedbackTypePrecedence[this.feedbackTypeToShow] < f.FeedbackTypePrecedence[e])) && (this.feedbackTypeToShow = e, this.showFeedbackModalDebounced(t))
            }
        }], _(r.prototype, o), u && _(r, u), l
    }(u.default)
}