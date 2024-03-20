function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRandomDateShortcut: function() {
            return x
        },
        ComponentTypes: function() {
            return l
        },
        refreshSearchTokens: function() {
            return V
        },
        getFilterAutocompletions: function() {
            return X
        },
        default: function() {
            return z
        }
    }), n("222007"), n("843762");
    var l, a, r = n("448105"),
        u = n.n(r),
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
        g = n("49111"),
        N = n("782340");

    function I() {
        return new Set(c.months().map(e => e.toLowerCase()))
    }

    function y() {
        return new Set(c.weekdays().map(e => e.toLowerCase()))
    }

    function m() {
        let e = new Date().getFullYear();
        return new Set(o.range(2015, e + 1).map(e => e.toString()))
    }

    function M(e, t) {
        return [e, e.clone().add(1, t)]
    }

    function C(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = c().startOf(e).add(t, e);
        return M(n, e)
    }

    function L(e, t, n) {
        let l = c(e, t).local();
        return M(l, n)
    }

    function F() {
        return {
            [N.default.Messages.SEARCH_SHORTCUT_TODAY]: () => C("day"),
            [N.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => C("day", -1),
            [N.default.Messages.SEARCH_SHORTCUT_WEEK]: () => C("week"),
            [N.default.Messages.SEARCH_SHORTCUT_MONTH]: () => C("month"),
            [N.default.Messages.SEARCH_SHORTCUT_YEAR]: () => C("year")
        }
    }
    let v = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
        H = RegExp("\\s*(true|false)", "i");

    function k(e) {
        return "".concat(e, ":")
    }

    function O(e) {
        return RegExp(k(e), "i")
    }

    function w(e) {
        let t;
        let n = e.getMatch(1),
            l = e => null != e ? null == e ? void 0 : e.id : null;
        return null != (t = g.ID_REGEX.test(n) ? n : n === g.ME ? l(h.default.getCurrentUser()) : null != e.getMatch(4) ? l(h.default.findByTag(e.getMatch(4))) : l(h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
    }

    function D(e, t) {
        let n, l;
        let a = e.getFullMatch().trim().toLowerCase(),
            r = F()[a];
        null != r ? [n, l] = r() : I().has(a) ? [n, l] = L(a, "MMMM", "month") : y().has(a) ? [n, l] = L(a, "dddd", "day") : m().has(a) ? [n, l] = L(a, "YYYY", "year") : [n, l] = L(a, g.SEARCH_DATE_FORMAT, "day");
        let u = n.isValid() && l.isValid();
        return !!u && ("before" === t ? (l = n, n = null) : "after" === t && (n = l, l = null), e.setData("start", n), e.setData("end", l), !0)
    }

    function W(e) {
        let t = e.getMatch(1),
            n = f.default.getGuildId(),
            l = E.default.getChannels(n)[E.GUILD_SELECTABLE_CHANNELS_KEY].concat(E.default.getChannels(n)[E.GUILD_VOCAL_CHANNELS_KEY]),
            a = E.default.getTextChannelNameDisambiguations(n),
            r = o.chain(l).map(e => {
                let {
                    channel: t
                } = e;
                return t
            }).find(e => {
                var n, l;
                return t === (null !== (l = null === (n = a[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== l ? l : e.name)
            }).value();
        return null != r && (e.setData("channel", r), !0)
    }

    function U(e) {
        let t = {
            [N.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
            [N.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
            [N.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
            [N.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
            [N.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
            [N.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
            [N.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
        } [e.getMatch(1)];
        return null != t && "" !== t && (e.setData("has", t), !0)
    }

    function b() {
        return [...Array.from(I()), ...Array.from(y()), ...Array.from(m()), ...Object.keys(F())]
    }

    function x() {
        return o.sample(b())
    }

    function G(e, t, n) {
        return P(e, t, b()).map(e => ({
            ...e,
            group: n,
            key: "".concat(n, "-").concat(e.text)
        }))
    }

    function P(e, t, n) {
        let l = e.toLocaleLowerCase();
        return o(n).filter(e => u(l, e.toLocaleLowerCase())).take(t).map(e => ({
            text: e
        })).value()
    }

    function j(e, t) {
        let n, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = _.default.getSearchType(t);
        e = e.split("#")[0];
        let u = {
            query: e,
            limit: l,
            request: a
        };
        switch (r) {
            case g.SearchTypes.GUILD:
                n = R.default.queryGuildUsers({
                    ...u,
                    guildId: t
                });
                break;
            case g.SearchTypes.CHANNEL:
                n = R.default.queryChannelUsers({
                    ...u,
                    channelId: t
                });
                break;
            case g.SearchTypes.DMS:
                n = R.default.queryUsers(e, l, !0, a, () => !0);
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

    function K() {
        return _.default.getSearchType() === g.SearchTypes.GUILD
    }

    function B() {
        return !S.default.hidePersonalInformation
    }
    let Y = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
    (a = l || (l = {})).FILTER = "FILTER", a.ANSWER = "ANSWER";
    let q = {};

    function V() {
        Object.assign(q, function() {
            let e = [N.default.Messages.SEARCH_ANSWER_HAS_LINK, N.default.Messages.SEARCH_ANSWER_HAS_EMBED, N.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, N.default.Messages.SEARCH_ANSWER_HAS_VIDEO, N.default.Messages.SEARCH_ANSWER_HAS_IMAGE, N.default.Messages.SEARCH_ANSWER_HAS_SOUND, N.default.Messages.SEARCH_ANSWER_HAS_STICKER];
            return {
                [g.SearchTokenTypes.FILTER_FROM]: {
                    regex: O(N.default.Messages.SEARCH_FILTER_FROM),
                    componentType: "FILTER",
                    key: k(N.default.Messages.SEARCH_FILTER_FROM),
                    plainText: N.default.Messages.SEARCH_FILTER_FROM,
                    validator: B,
                    getAutocompletions: j
                },
                [g.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                    follows: [g.SearchTokenTypes.FILTER_FROM],
                    regex: Y,
                    validator: w,
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "author_id"
                },
                [g.SearchTokenTypes.FILTER_MENTIONS]: {
                    regex: O(N.default.Messages.SEARCH_FILTER_MENTIONS),
                    componentType: "FILTER",
                    key: k(N.default.Messages.SEARCH_FILTER_MENTIONS),
                    plainText: N.default.Messages.SEARCH_FILTER_MENTIONS,
                    validator: B,
                    getAutocompletions: j
                },
                [g.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                    follows: [g.SearchTokenTypes.FILTER_MENTIONS],
                    regex: Y,
                    validator: w,
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "mentions"
                },
                [g.SearchTokenTypes.FILTER_HAS]: {
                    regex: O(N.default.Messages.SEARCH_FILTER_HAS),
                    componentType: "FILTER",
                    key: k(N.default.Messages.SEARCH_FILTER_HAS),
                    plainText: N.default.Messages.SEARCH_FILTER_HAS,
                    getAutocompletions: (t, n, l) => P(t, l, e)
                },
                [g.SearchTokenTypes.ANSWER_HAS]: {
                    regex: RegExp("(?:\\s*-?(".concat(e.map(e => p.default.escape(e)).join("|"), "))"), "i"),
                    follows: [g.SearchTokenTypes.FILTER_HAS],
                    validator: U,
                    componentType: "ANSWER",
                    queryKey: "has"
                },
                [g.SearchTokenTypes.FILTER_FILE_TYPE]: {
                    regex: O(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                    key: k(N.default.Messages.SEARCH_FILTER_FILE_TYPE),
                    plainText: N.default.Messages.SEARCH_FILTER_FILE_TYPE,
                    componentType: "FILTER"
                },
                [g.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                    regex: /(?:\s*([^\s]+))/,
                    follows: [g.SearchTokenTypes.FILTER_FILE_TYPE],
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "attachment_extensions"
                },
                [g.SearchTokenTypes.FILTER_FILE_NAME]: {
                    regex: O(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                    key: k(N.default.Messages.SEARCH_FILTER_FILE_NAME),
                    plainText: N.default.Messages.SEARCH_FILTER_FILE_NAME,
                    componentType: "FILTER"
                },
                [g.SearchTokenTypes.ANSWER_FILE_NAME]: {
                    regex: /(?:\s*([^\s]+)(?=\s))/,
                    follows: [g.SearchTokenTypes.FILTER_FILE_NAME],
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "attachment_filename"
                },
                [g.SearchTokenTypes.FILTER_BEFORE]: {
                    regex: O(N.default.Messages.SEARCH_FILTER_BEFORE),
                    componentType: "FILTER",
                    key: k(N.default.Messages.SEARCH_FILTER_BEFORE),
                    plainText: N.default.Messages.SEARCH_FILTER_BEFORE,
                    getAutocompletions: (e, t, n) => G(e, n, g.SearchTokenTypes.FILTER_BEFORE)
                },
                [g.SearchTokenTypes.FILTER_ON]: {
                    regex: O("(".concat(N.default.Messages.SEARCH_FILTER_ON, "|").concat(N.default.Messages.SEARCH_FILTER_DURING, ")")),
                    componentType: "FILTER",
                    key: k(N.default.Messages.SEARCH_FILTER_DURING),
                    plainText: N.default.Messages.SEARCH_FILTER_DURING,
                    getAutocompletions: (e, t, n) => G(e, n, g.SearchTokenTypes.FILTER_ON)
                },
                [g.SearchTokenTypes.FILTER_AFTER]: {
                    regex: O(N.default.Messages.SEARCH_FILTER_AFTER),
                    componentType: "FILTER",
                    key: k(N.default.Messages.SEARCH_FILTER_AFTER),
                    plainText: N.default.Messages.SEARCH_FILTER_AFTER,
                    getAutocompletions: (e, t, n) => G(e, n, g.SearchTokenTypes.FILTER_AFTER)
                },
                [g.SearchTokenTypes.ANSWER_BEFORE]: {
                    regex: v,
                    follows: [g.SearchTokenTypes.FILTER_BEFORE],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => D(e, "before")
                },
                [g.SearchTokenTypes.ANSWER_ON]: {
                    regex: v,
                    follows: [g.SearchTokenTypes.FILTER_ON],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => D(e, "on")
                },
                [g.SearchTokenTypes.ANSWER_AFTER]: {
                    regex: v,
                    follows: [g.SearchTokenTypes.FILTER_AFTER],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => D(e, "after")
                },
                [g.SearchTokenTypes.FILTER_IN]: {
                    regex: O(N.default.Messages.SEARCH_FILTER_IN),
                    componentType: "FILTER",
                    key: k(N.default.Messages.SEARCH_FILTER_IN),
                    plainText: N.default.Messages.SEARCH_FILTER_IN,
                    validator: K,
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
                        let a = E.default.getTextChannelNameDisambiguations(t);
                        return o(l).take(n).map(e => {
                            var t, n;
                            return {
                                text: "".concat(null !== (n = null === (t = a[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                                channel: e
                            }
                        }).value()
                    }
                },
                [g.SearchTokenTypes.ANSWER_IN]: {
                    regex: /(?:\s*#?([^ ]+))/i,
                    mutable: !0,
                    follows: [g.SearchTokenTypes.FILTER_IN],
                    componentType: "ANSWER",
                    validator: W,
                    queryKey: "channel_id"
                },
                [g.SearchTokenTypes.FILTER_PINNED]: {
                    regex: O(N.default.Messages.SEARCH_FILTER_PINNED),
                    componentType: "FILTER",
                    key: k(N.default.Messages.SEARCH_FILTER_PINNED),
                    plainText: N.default.Messages.SEARCH_FILTER_PINNED,
                    getAutocompletions: () => [{
                        text: "true"
                    }, {
                        text: "false"
                    }]
                },
                [g.SearchTokenTypes.ANSWER_PINNED]: {
                    regex: H,
                    componentType: "ANSWER",
                    follows: [g.SearchTokenTypes.FILTER_PINNED],
                    queryKey: "pinned",
                    validator: e => {
                        let t = e.getMatch(1);
                        return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0)
                    }
                }
            }
        }())
    }

    function X(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(q).length;
        return o(q).keys().filter(e => g.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != q[e].key).map(e => ({
            token: e,
            text: q[e].key
        })).filter(t => {
            let {
                text: n
            } = t;
            return u(e.toLowerCase(), n)
        }).take(t).value()
    }
    var z = q
}