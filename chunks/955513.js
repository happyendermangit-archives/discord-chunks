function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRandomDateShortcut: function() {
            return b
        },
        ComponentTypes: function() {
            return l
        },
        refreshSearchTokens: function() {
            return Z
        },
        getFilterAutocompletions: function() {
            return z
        },
        default: function() {
            return q
        }
    }), n("222007"), n("843762");
    var l, r, a = n("448105"),
        u = n.n(a),
        s = n("917351"),
        o = n.n(s),
        i = n("866227"),
        c = n.n(i),
        E = n("923959"),
        d = n("27618"),
        _ = n("744983"),
        T = n("18494"),
        f = n("162771"),
        S = n("102985"),
        h = n("697218"),
        R = n("25292"),
        p = n("655518"),
        A = n("158998"),
        I = n("49111"),
        g = n("782340");

    function N() {
        return new Set(c.months().map(e => e.toLowerCase()))
    }

    function M() {
        return new Set(c.weekdays().map(e => e.toLowerCase()))
    }

    function y() {
        let e = new Date().getFullYear();
        return new Set(o.range(2015, e + 1).map(e => e.toString()))
    }

    function m(e, t) {
        return [e, e.clone().add(1, t)]
    }

    function C(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = c().startOf(e).add(t, e);
        return m(n, e)
    }

    function L(e, t, n) {
        let l = c(e, t).local();
        return m(l, n)
    }

    function F() {
        return {
            [g.default.Messages.SEARCH_SHORTCUT_TODAY]: () => C("day"),
            [g.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => C("day", -1),
            [g.default.Messages.SEARCH_SHORTCUT_WEEK]: () => C("week"),
            [g.default.Messages.SEARCH_SHORTCUT_MONTH]: () => C("month"),
            [g.default.Messages.SEARCH_SHORTCUT_YEAR]: () => C("year")
        }
    }
    let v = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
        H = RegExp("\\s*(true|false)", "i");

    function O(e) {
        return "".concat(e, ":")
    }

    function k(e) {
        return RegExp(O(e), "i")
    }

    function w(e) {
        let t;
        let n = e.getMatch(1),
            l = e => null != e ? null == e ? void 0 : e.id : null;
        return null != (t = I.ID_REGEX.test(n) ? n : n === I.ME ? l(h.default.getCurrentUser()) : null != e.getMatch(4) ? l(h.default.findByTag(e.getMatch(4))) : l(h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
    }

    function D(e, t) {
        let n, l;
        let r = e.getFullMatch().trim().toLowerCase(),
            a = F()[r];
        null != a ? [n, l] = a() : N().has(r) ? [n, l] = L(r, "MMMM", "month") : M().has(r) ? [n, l] = L(r, "dddd", "day") : y().has(r) ? [n, l] = L(r, "YYYY", "year") : [n, l] = L(r, I.SEARCH_DATE_FORMAT, "day");
        let u = n.isValid() && l.isValid();
        return !!u && ("before" === t ? (l = n, n = null) : "after" === t && (n = l, l = null), e.setData("start", n), e.setData("end", l), !0)
    }

    function U(e) {
        let t = e.getMatch(1),
            n = f.default.getGuildId(),
            l = E.default.getChannels(n)[E.GUILD_SELECTABLE_CHANNELS_KEY].concat(E.default.getChannels(n)[E.GUILD_VOCAL_CHANNELS_KEY]),
            r = E.default.getTextChannelNameDisambiguations(n),
            a = o.chain(l).map(e => {
                let {
                    channel: t
                } = e;
                return t
            }).find(e => {
                var n, l;
                return t === (null !== (l = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== l ? l : e.name)
            }).value();
        return null != a && (e.setData("channel", a), !0)
    }

    function W(e) {
        let t = {
            [g.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
            [g.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
            [g.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
            [g.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
            [g.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
            [g.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
            [g.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
        } [e.getMatch(1)];
        return null != t && "" !== t && (e.setData("has", t), !0)
    }

    function x() {
        return [...Array.from(N()), ...Array.from(M()), ...Array.from(y()), ...Object.keys(F())]
    }

    function b() {
        return o.sample(x())
    }

    function P(e, t, n) {
        return G(e, t, x()).map(e => ({
            ...e,
            group: n,
            key: "".concat(n, "-").concat(e.text)
        }))
    }

    function G(e, t, n) {
        let l = e.toLocaleLowerCase();
        return o(n).filter(e => u(l, e.toLocaleLowerCase())).take(t).map(e => ({
            text: e
        })).value()
    }

    function Y(e, t) {
        let n, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = _.default.getSearchType(t);
        e = e.split("#")[0];
        let u = {
            query: e,
            limit: l,
            request: r
        };
        switch (a) {
            case I.SearchTypes.GUILD:
                n = R.default.queryGuildUsers({
                    ...u,
                    guildId: t
                });
                break;
            case I.SearchTypes.CHANNEL:
                n = R.default.queryChannelUsers({
                    ...u,
                    channelId: t
                });
                break;
            case I.SearchTypes.DMS:
                n = R.default.queryUsers(e, l, !0, r, () => !0);
                break;
            default:
                return []
        }
        return n.filter(e => {
            let {
                record: t
            } = e;
            return !d.default.isBlocked(t.id)
        }).map(e => {
            let {
                record: t
            } = e;
            return {
                text: A.default.getUserTag(t),
                user: t
            }
        })
    }

    function B() {
        return _.default.getSearchType() === I.SearchTypes.GUILD
    }

    function j() {
        return !S.default.hidePersonalInformation
    }
    let V = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
    (r = l || (l = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
    let K = {};

    function Z() {
        Object.assign(K, function() {
            let e = [g.default.Messages.SEARCH_ANSWER_HAS_LINK, g.default.Messages.SEARCH_ANSWER_HAS_EMBED, g.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, g.default.Messages.SEARCH_ANSWER_HAS_VIDEO, g.default.Messages.SEARCH_ANSWER_HAS_IMAGE, g.default.Messages.SEARCH_ANSWER_HAS_SOUND, g.default.Messages.SEARCH_ANSWER_HAS_STICKER];
            return {
                [I.SearchTokenTypes.FILTER_FROM]: {
                    regex: k(g.default.Messages.SEARCH_FILTER_FROM),
                    componentType: "FILTER",
                    key: O(g.default.Messages.SEARCH_FILTER_FROM),
                    plainText: g.default.Messages.SEARCH_FILTER_FROM,
                    validator: j,
                    getAutocompletions: Y
                },
                [I.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                    follows: [I.SearchTokenTypes.FILTER_FROM],
                    regex: V,
                    validator: w,
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "author_id"
                },
                [I.SearchTokenTypes.FILTER_MENTIONS]: {
                    regex: k(g.default.Messages.SEARCH_FILTER_MENTIONS),
                    componentType: "FILTER",
                    key: O(g.default.Messages.SEARCH_FILTER_MENTIONS),
                    plainText: g.default.Messages.SEARCH_FILTER_MENTIONS,
                    validator: j,
                    getAutocompletions: Y
                },
                [I.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                    follows: [I.SearchTokenTypes.FILTER_MENTIONS],
                    regex: V,
                    validator: w,
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "mentions"
                },
                [I.SearchTokenTypes.FILTER_HAS]: {
                    regex: k(g.default.Messages.SEARCH_FILTER_HAS),
                    componentType: "FILTER",
                    key: O(g.default.Messages.SEARCH_FILTER_HAS),
                    plainText: g.default.Messages.SEARCH_FILTER_HAS,
                    getAutocompletions: (t, n, l) => G(t, l, e)
                },
                [I.SearchTokenTypes.ANSWER_HAS]: {
                    regex: RegExp("(?:\\s*-?(".concat(e.map(e => p.default.escape(e)).join("|"), "))"), "i"),
                    follows: [I.SearchTokenTypes.FILTER_HAS],
                    validator: W,
                    componentType: "ANSWER",
                    queryKey: "has"
                },
                [I.SearchTokenTypes.FILTER_FILE_TYPE]: {
                    regex: k(g.default.Messages.SEARCH_FILTER_FILE_TYPE),
                    key: O(g.default.Messages.SEARCH_FILTER_FILE_TYPE),
                    plainText: g.default.Messages.SEARCH_FILTER_FILE_TYPE,
                    componentType: "FILTER"
                },
                [I.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                    regex: /(?:\s*([^\s]+))/,
                    follows: [I.SearchTokenTypes.FILTER_FILE_TYPE],
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "attachment_extensions"
                },
                [I.SearchTokenTypes.FILTER_FILE_NAME]: {
                    regex: k(g.default.Messages.SEARCH_FILTER_FILE_NAME),
                    key: O(g.default.Messages.SEARCH_FILTER_FILE_NAME),
                    plainText: g.default.Messages.SEARCH_FILTER_FILE_NAME,
                    componentType: "FILTER"
                },
                [I.SearchTokenTypes.ANSWER_FILE_NAME]: {
                    regex: /(?:\s*([^\s]+)(?=\s))/,
                    follows: [I.SearchTokenTypes.FILTER_FILE_NAME],
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "attachment_filename"
                },
                [I.SearchTokenTypes.FILTER_BEFORE]: {
                    regex: k(g.default.Messages.SEARCH_FILTER_BEFORE),
                    componentType: "FILTER",
                    key: O(g.default.Messages.SEARCH_FILTER_BEFORE),
                    plainText: g.default.Messages.SEARCH_FILTER_BEFORE,
                    getAutocompletions: (e, t, n) => P(e, n, I.SearchTokenTypes.FILTER_BEFORE)
                },
                [I.SearchTokenTypes.FILTER_ON]: {
                    regex: k("(".concat(g.default.Messages.SEARCH_FILTER_ON, "|").concat(g.default.Messages.SEARCH_FILTER_DURING, ")")),
                    componentType: "FILTER",
                    key: O(g.default.Messages.SEARCH_FILTER_DURING),
                    plainText: g.default.Messages.SEARCH_FILTER_DURING,
                    getAutocompletions: (e, t, n) => P(e, n, I.SearchTokenTypes.FILTER_ON)
                },
                [I.SearchTokenTypes.FILTER_AFTER]: {
                    regex: k(g.default.Messages.SEARCH_FILTER_AFTER),
                    componentType: "FILTER",
                    key: O(g.default.Messages.SEARCH_FILTER_AFTER),
                    plainText: g.default.Messages.SEARCH_FILTER_AFTER,
                    getAutocompletions: (e, t, n) => P(e, n, I.SearchTokenTypes.FILTER_AFTER)
                },
                [I.SearchTokenTypes.ANSWER_BEFORE]: {
                    regex: v,
                    follows: [I.SearchTokenTypes.FILTER_BEFORE],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => D(e, "before")
                },
                [I.SearchTokenTypes.ANSWER_ON]: {
                    regex: v,
                    follows: [I.SearchTokenTypes.FILTER_ON],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => D(e, "on")
                },
                [I.SearchTokenTypes.ANSWER_AFTER]: {
                    regex: v,
                    follows: [I.SearchTokenTypes.FILTER_AFTER],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => D(e, "after")
                },
                [I.SearchTokenTypes.FILTER_IN]: {
                    regex: k(g.default.Messages.SEARCH_FILTER_IN),
                    componentType: "FILTER",
                    key: O(g.default.Messages.SEARCH_FILTER_IN),
                    plainText: g.default.Messages.SEARCH_FILTER_IN,
                    validator: B,
                    getAutocompletions(e, t, n) {
                        "#" === e[0] && (e = e.substring(1));
                        let l = R.default.queryChannels({
                            query: e,
                            type: E.GUILD_SELECTABLE_CHANNELS_KEY,
                            guildId: t,
                            limit: 1 / 0
                        }).concat(R.default.queryChannels({
                            query: e,
                            type: E.GUILD_VOCAL_CHANNELS_KEY,
                            guildId: t,
                            limit: 1 / 0
                        })).map(e => {
                            let {
                                record: t
                            } = e;
                            return t
                        }).filter(e => !e.isThread());
                        if ("" === e.trim()) {
                            let e = T.default.getChannelId(t),
                                n = l.find(t => t.id === e);
                            null != n && (l.splice(l.indexOf(n), 1), l.unshift(n))
                        }
                        let r = E.default.getTextChannelNameDisambiguations(t);
                        return o(l).take(n).map(e => {
                            var t, n;
                            return {
                                text: "".concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                                channel: e
                            }
                        }).value()
                    }
                },
                [I.SearchTokenTypes.ANSWER_IN]: {
                    regex: /(?:\s*#?([^ ]+))/i,
                    mutable: !0,
                    follows: [I.SearchTokenTypes.FILTER_IN],
                    componentType: "ANSWER",
                    validator: U,
                    queryKey: "channel_id"
                },
                [I.SearchTokenTypes.FILTER_PINNED]: {
                    regex: k(g.default.Messages.SEARCH_FILTER_PINNED),
                    componentType: "FILTER",
                    key: O(g.default.Messages.SEARCH_FILTER_PINNED),
                    plainText: g.default.Messages.SEARCH_FILTER_PINNED,
                    getAutocompletions: () => [{
                        text: "true"
                    }, {
                        text: "false"
                    }]
                },
                [I.SearchTokenTypes.ANSWER_PINNED]: {
                    regex: H,
                    componentType: "ANSWER",
                    follows: [I.SearchTokenTypes.FILTER_PINNED],
                    queryKey: "pinned",
                    validator: e => {
                        let t = e.getMatch(1);
                        return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0)
                    }
                }
            }
        }())
    }

    function z(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(K).length;
        return o(K).keys().filter(e => I.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != K[e].key).map(e => ({
            token: e,
            text: K[e].key
        })).filter(t => {
            let {
                text: n
            } = t;
            return u(e.toLowerCase(), n)
        }).take(t).value()
    }
    var q = K
}