function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useStickerSuggestionResults: function() {
            return h
        },
        useTextChangeHandler: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("954955"),
        i = n.n(o),
        a = n("898511"),
        u = n("922747"),
        s = n("13075"),
        l = n("295030"),
        c = n("389712"),
        f = n("208454"),
        d = n("378309"),
        _ = n("943959"),
        E = n("284404"),
        p = n("241261");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var I = (0, _.promiseThrottle)(s.fetchStickerPacks, p.REQUEST_THROTTLE_DURATION_MS),
        h = function(e, t, n) {
            var o = (0, l.useHasSendableSticker)(n),
                i = (0, a.useStateFromStores)([f.default], function() {
                    return f.default.getCurrentUser()
                });
            return r.useMemo(function() {
                var r, a = (0, E.getQueriesFromUserInput)(e);
                if (t || null == e || "" === e || a.length > p.MAX_NUM_USER_INPUT_WORDS || !o) return [];
                var s = [],
                    l = [],
                    c = (0, E.removePunctuation)(e);
                var f = c === a[0] ? a : [c].concat(function(e) {
                    if (Array.isArray(e)) return m(e)
                }(r = a) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(r) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return m(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                    }
                }(r) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }());
                d.default.queryStickers(f, !1).forEach(function(e) {
                    var t = e.sticker,
                        r = (0, u.getStickerSendability)(t, i, n),
                        o = {
                            sticker: t,
                            sendability: r
                        };
                    r === u.StickerSendability.SENDABLE ? s.push(o) : r === u.StickerSendability.SENDABLE_WITH_PREMIUM && l.push(o)
                });
                var _ = [];
                return s.length > 0 && (_ = s.slice(0, p.MAX_NUM_SUGGESTED_STICKERS), 0 !== l.length && (_.length === p.MAX_NUM_SUGGESTED_STICKERS && _.pop(), _.push(l[0]))), _
            }, [e, n, o, t, i])
        },
        O = function(e) {
            var t, n, o = e.setTextInputValue,
                a = e.setHasDismissed,
                u = e.setHasSelection,
                s = e.setFocusedSuggestionType,
                l = e.delayBeforeSuggestions,
                f = r.useRef(null),
                d = r.useRef(!1),
                _ = r.useRef(!1),
                m = r.useMemo(function() {
                    return i()(o, null != l ? l : p.DELAY_BEFORE_SUGGESTIONS_MS)
                }, [o, l]);
            return {
                handleTextChange: (n = (t = function(e) {
                    var t;
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!(null == e || "" === e)) return [3, 1];
                                return m.cancel(), null == o || o(""), null == a || a(!1), null == u || u(!1), null == s || s(null), f.current = null, d.current = !1, [3, 4];
                            case 1:
                                if (!(!d.current && e.trim() !== (null === (t = f.current) || void 0 === t ? void 0 : t.trim()))) return [3, 4];
                                if (f.current = e, (0, E.getQueriesFromUserInput)(e).length > p.MAX_NUM_USER_INPUT_WORDS) return d.current = !0, m.cancel(), o(""), [2];
                                if (!0 === _.current) return [2];
                                if (c.default.hasLoadedStickerPacks) return [3, 3];
                                return _.current = !0, [4, I()];
                            case 2:
                                n.sent(), _.current = !1, n.label = 3;
                            case 3:
                                m(f.current), n.label = 4;
                            case 4:
                                return [2]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            y(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            y(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }), function(e) {
                    return n.apply(this, arguments)
                }),
                debouncedSetTextInputValue: m
            }
        }
}