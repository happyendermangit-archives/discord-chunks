function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("67381"),
        u = n("784184"),
        s = n("557184"),
        l = n("118070"),
        c = n("922747"),
        f = n("13075"),
        d = n("389712"),
        _ = n("294463"),
        E = n("624308"),
        p = n("306912"),
        m = n("587996"),
        y = n("412791"),
        I = n("378309"),
        h = n("233126"),
        O = n("209610"),
        T = n("407048"),
        S = n("281767"),
        v = n("941504"),
        g = n("106488");

    function A(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function b(e, t) {
        return r.createElement(E.default, {
            sticker: e,
            isInteracting: t,
            size: 40
        })
    }
    var N = {
        sentinel: T.EMOJI_SENTINEL,
        stores: [d.default],
        matches: function(e, t, n, r, o) {
            return n.length > 1
        },
        queryResults: function(e, t, n, r, o) {
            var i = r.allowStickers ? 0 : 40,
                a = S.MAX_AUTOCOMPLETE_RESULTS + i,
                u = I.default.queryEmojiResults({
                    query: n,
                    channel: e,
                    intention: r.emojiIntention,
                    maxCount: a
                }).emojis,
                l = u.locked,
                d = u.unlocked;
            if ("-" === n[0]) {
                var _ = function(e) {
                    var t;
                    return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n)
                };
                l = l.filter(_), d = d.filter(_)
            }
            var E = [];
            if (r.allowStickers) {
                (0, f.fetchStickerPacks)();
                var p = I.default.queryStickers([n], !0, [e, function(e, t) {
                        return t === c.StickerSendability.SENDABLE
                    }]),
                    m = Math.max(4, 8 - d.length);
                E = p.slice(0, m), "-" === n[0] && (E = p.filter(function(e) {
                    return e.sticker.name === n
                }))
            }
            var y = d.slice(0, a - E.length),
                h = !r.allowStickers && l.length > 0 && y.length < a,
                O = s.default.getCurrentConfig({
                    location: "Emoji Autocomplete"
                }, {
                    autoTrackExposure: h,
                    disable: !h
                }).enabled,
                T = h && O ? l.slice(0, a - y.length) : [],
                v = y.length + T.length;
            return {
                results: {
                    emojis: y,
                    emojisLocked: T,
                    stickers: E
                },
                metadata: {
                    numEmojiResults: v,
                    numLockedEmojiResults: T.length,
                    numStickerResults: E.length
                }
            }
        },
        renderResults: function(e) {
            var t = e.results,
                o = t.emojis,
                s = t.stickers,
                c = t.emojisLocked,
                f = e.selectedIndex,
                d = e.query,
                _ = e.onHover,
                E = e.onClick,
                I = c.length > 0 ? r.createElement(r.Fragment, null, r.createElement(l.default, {
                    glowOpacity: 0,
                    className: g.premiumSectionDivider
                }), r.createElement("div", {
                    className: i()(g.premiumHeader)
                }, r.createElement(y.default, {
                    className: g.premiumIcon,
                    width: 20,
                    height: 20
                }), r.createElement(u.Text, {
                    className: g.premiumText,
                    variant: "text-sm/semibold"
                }, v.default.Messages.UNLOCK_WITH_NITRO))) : null;
            return r.createElement(r.Fragment, null, (0, h.renderAutocompleteGroup)({
                query: d,
                selectedIndex: f,
                autocompletes: o,
                onHover: _,
                onClick: E,
                titleWithQuery: v.default.Messages.EMOJI_MATCHING,
                titleWithoutQuery: v.default.Messages.EMOJI,
                Component: m.default.Emoji,
                getProps: function(e) {
                    return {
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: T.EMOJI_SENTINEL,
                        guild: null != e.guildId ? p.default.getGuild(e.guildId) : null,
                        isLocked: !1
                    }
                },
                getQuery: function(e) {
                    return "".concat(T.EMOJI_SENTINEL).concat(e)
                },
                key: "emoji"
            }), c.length > 0 ? (0, h.renderAutocompleteGroup)({
                query: d,
                selectedIndex: f,
                autocompletes: c,
                onHover: _,
                onClick: function() {
                    var e;
                    (0, a.openModalLazy)((e = function() {
                        var e;
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
                        }(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Promise.all([n.e("99387"), n.e("2770")]).then(n.bind(n, "564388"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return r.createElement(e, t)
                                    }]
                            }
                        })
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) {
                                A(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                A(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    }))
                },
                titleWithQuery: 0 === o.length ? v.default.Messages.EMOJI_MATCHING : null,
                titleWithoutQuery: 0 === o.length ? v.default.Messages.EMOJI : null,
                Component: m.default.Emoji,
                getProps: function(e) {
                    return {
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: T.EMOJI_SENTINEL,
                        guild: null != e.guildId ? p.default.getGuild(e.guildId) : null,
                        isLocked: !0
                    }
                },
                getQuery: function(e) {
                    return "".concat(T.EMOJI_SENTINEL).concat(e)
                },
                key: "emoji-upsell",
                indexOffset: o.length,
                subHeader: I
            }) : null, (o.length > 0 || c.length > 0) && s.length > 0 && r.createElement(m.default.Divider, {
                className: g.emojiStickersDivider
            }), (0, h.renderAutocompleteGroup)({
                query: d,
                selectedIndex: f,
                autocompletes: s,
                onHover: _,
                onClick: E,
                titleWithQuery: v.default.Messages.STICKERS_MATCHING,
                titleWithoutQuery: v.default.Messages.STICKER,
                Component: m.default.Sticker,
                getProps: function(e) {
                    var t = e.comparator,
                        n = e.sticker;
                    return {
                        renderSticker: b,
                        queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                        sticker: n,
                        key: n.id
                    }
                },
                getQuery: function(e) {
                    return e
                },
                key: "stickers",
                indexOffset: o.length + c.length,
                headerClassName: o.length > 0 ? g.stickersHeaderWithEmojiResults : void 0
            }))
        },
        onSelect: function(e) {
            var t = e.results,
                n = t.emojis,
                r = t.emojisLocked,
                o = t.stickers,
                i = e.index,
                a = e.options;
            if (i < n.length) {
                var u = n[i],
                    s = n.length + r.length;
                return a.insertText(function(e) {
                    return "".concat(T.EMOJI_SENTINEL).concat(e.name).concat(T.EMOJI_SENTINEL)
                }(u), function(e) {
                    var t, n = e.animated ? "a" : "";
                    return e.managed || null == e.id ? "".concat(T.EMOJI_SENTINEL).concat(e.name).concat(T.EMOJI_SENTINEL) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
                }(u)), {
                    type: O.AutocompleteSelectionTypes.EMOJI,
                    metadata: {
                        emojiId: u.id,
                        numEmojiResults: s,
                        numStickerResults: o.length,
                        expressionName: u.name,
                        isCustom: null != u.id,
                        isAnimated: u.animated
                    }
                }
            }
            if ((i -= n.length) < r.length) return {
                type: null
            };
            if ((i -= r.length) < o.length) {
                var l = o[i];
                return a.insertText(""), a.sendSticker(l.sticker, _.StickerSelectLocation.AUTOCOMPLETE), {
                    type: O.AutocompleteSelectionTypes.STICKER,
                    metadata: {
                        numEmojiResults: n.length,
                        numStickerResults: o.length,
                        stickerId: l.sticker.id
                    }
                }
            }
            return {
                type: null
            }
        }
    };
    t.default = N
}