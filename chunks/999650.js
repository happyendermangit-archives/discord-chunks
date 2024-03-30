function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComponentTypes: function() {
            return i
        },
        getFilterAutocompletions: function() {
            return X
        },
        getRandomDateShortcut: function() {
            return V
        },
        refreshSearchTokens: function() {
            return z
        }
    }), n("47120"), n("733860");
    var i, r, s = n("658722"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("913527"),
        d = n.n(u),
        _ = n("984933"),
        c = n("699516"),
        E = n("768119"),
        I = n("944486"),
        T = n("914010"),
        f = n("246946"),
        S = n("594174"),
        h = n("483360"),
        A = n("226951"),
        m = n("51144"),
        N = n("981631"),
        O = n("689938");

    function p() {
        return new Set(d().months().map(e => e.toLowerCase()))
    }

    function R() {
        return new Set(d().weekdays().map(e => e.toLowerCase()))
    }

    function C() {
        let e = new Date().getFullYear();
        return new Set(l().range(2015, e + 1).map(e => e.toString()))
    }

    function g(e, t) {
        return [e, e.clone().add(1, t)]
    }

    function L(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return g(d()().startOf(e).add(t, e), e)
    }

    function D(e, t, n) {
        return g(d()(e, t).local(), n)
    }

    function v() {
        return {
            [O.default.Messages.SEARCH_SHORTCUT_TODAY]: () => L("day"),
            [O.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => L("day", -1),
            [O.default.Messages.SEARCH_SHORTCUT_WEEK]: () => L("week"),
            [O.default.Messages.SEARCH_SHORTCUT_MONTH]: () => L("month"),
            [O.default.Messages.SEARCH_SHORTCUT_YEAR]: () => L("year")
        }
    }
    let M = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
        y = RegExp("\\s*(true|false)", "i");

    function P(e) {
        return "".concat(e, ":")
    }

    function U(e) {
        return RegExp(P(e), "i")
    }

    function b(e) {
        let t;
        let n = e.getMatch(1),
            i = e => null != e ? null == e ? void 0 : e.id : null;
        return null != (t = N.ID_REGEX.test(n) ? n : n === N.ME ? i(S.default.getCurrentUser()) : null != e.getMatch(4) ? i(S.default.findByTag(e.getMatch(4))) : i(S.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
    }

    function G(e, t) {
        let n, i;
        let r = e.getFullMatch().trim().toLowerCase(),
            s = v()[r];
        return null != s ? [n, i] = s() : p().has(r) ? [n, i] = D(r, "MMMM", "month") : R().has(r) ? [n, i] = D(r, "dddd", "day") : C().has(r) ? [n, i] = D(r, "YYYY", "year") : [n, i] = D(r, N.SEARCH_DATE_FORMAT, "day"), !!(n.isValid() && i.isValid()) && ("before" === t ? (i = n, n = null) : "after" === t && (n = i, i = null), e.setData("start", n), e.setData("end", i), !0)
    }

    function w(e) {
        let t = e.getMatch(1),
            n = T.default.getGuildId(),
            i = _.default.getChannels(n)[_.GUILD_SELECTABLE_CHANNELS_KEY].concat(_.default.getChannels(n)[_.GUILD_VOCAL_CHANNELS_KEY]),
            r = _.default.getTextChannelNameDisambiguations(n),
            s = l().chain(i).map(e => {
                let {
                    channel: t
                } = e;
                return t
            }).find(e => {
                var n, i;
                return t === (null !== (i = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : e.name)
            }).value();
        return null != s && (e.setData("channel", s), !0)
    }

    function k(e) {
        let t = {
            [O.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
            [O.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
            [O.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
            [O.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
            [O.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
            [O.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
            [O.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
        } [e.getMatch(1)];
        return null != t && "" !== t && (e.setData("has", t), !0)
    }

    function B() {
        return [...Array.from(p()), ...Array.from(R()), ...Array.from(C()), ...Object.keys(v())]
    }

    function V() {
        return l().sample(B())
    }

    function F(e, t, n) {
        return x(e, t, B()).map(e => ({
            ...e,
            group: n,
            key: "".concat(n, "-").concat(e.text)
        }))
    }

    function x(e, t, n) {
        let i = e.toLocaleLowerCase();
        return l()(n).filter(e => a()(i, e.toLocaleLowerCase())).take(t).map(e => ({
            text: e
        })).value()
    }

    function H(e, t) {
        let n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = E.default.getSearchType(t),
            a = {
                query: e = e.split("#")[0],
                limit: i,
                request: r
            };
        switch (s) {
            case N.SearchTypes.GUILD:
                n = h.default.queryGuildUsers({
                    ...a,
                    guildId: t
                });
                break;
            case N.SearchTypes.CHANNEL:
                n = h.default.queryChannelUsers({
                    ...a,
                    channelId: t
                });
                break;
            case N.SearchTypes.DMS:
                n = h.default.queryUsers(e, i, !0, r, () => !0);
                break;
            default:
                return []
        }
        return n.filter(e => {
            let {
                record: t
            } = e;
            return !c.default.isBlocked(t.id)
        }).map(e => {
            let {
                record: t
            } = e;
            return {
                text: m.default.getUserTag(t),
                user: t
            }
        })
    }

    function Y() {
        return E.default.getSearchType() === N.SearchTypes.GUILD
    }

    function j() {
        return !f.default.hidePersonalInformation
    }
    let W = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
    (r = i || (i = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
    let K = {};

    function z() {
        Object.assign(K, function() {
            let e = [O.default.Messages.SEARCH_ANSWER_HAS_LINK, O.default.Messages.SEARCH_ANSWER_HAS_EMBED, O.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, O.default.Messages.SEARCH_ANSWER_HAS_VIDEO, O.default.Messages.SEARCH_ANSWER_HAS_IMAGE, O.default.Messages.SEARCH_ANSWER_HAS_SOUND, O.default.Messages.SEARCH_ANSWER_HAS_STICKER];
            return {
                [N.SearchTokenTypes.FILTER_FROM]: {
                    regex: U(O.default.Messages.SEARCH_FILTER_FROM),
                    componentType: "FILTER",
                    key: P(O.default.Messages.SEARCH_FILTER_FROM),
                    plainText: O.default.Messages.SEARCH_FILTER_FROM,
                    validator: j,
                    getAutocompletions: H
                },
                [N.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                    follows: [N.SearchTokenTypes.FILTER_FROM],
                    regex: W,
                    validator: b,
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "author_id"
                },
                [N.SearchTokenTypes.FILTER_MENTIONS]: {
                    regex: U(O.default.Messages.SEARCH_FILTER_MENTIONS),
                    componentType: "FILTER",
                    key: P(O.default.Messages.SEARCH_FILTER_MENTIONS),
                    plainText: O.default.Messages.SEARCH_FILTER_MENTIONS,
                    validator: j,
                    getAutocompletions: H
                },
                [N.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                    follows: [N.SearchTokenTypes.FILTER_MENTIONS],
                    regex: W,
                    validator: b,
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "mentions"
                },
                [N.SearchTokenTypes.FILTER_HAS]: {
                    regex: U(O.default.Messages.SEARCH_FILTER_HAS),
                    componentType: "FILTER",
                    key: P(O.default.Messages.SEARCH_FILTER_HAS),
                    plainText: O.default.Messages.SEARCH_FILTER_HAS,
                    getAutocompletions: (t, n, i) => x(t, i, e)
                },
                [N.SearchTokenTypes.ANSWER_HAS]: {
                    regex: RegExp("(?:\\s*-?(".concat(e.map(e => A.default.escape(e)).join("|"), "))"), "i"),
                    follows: [N.SearchTokenTypes.FILTER_HAS],
                    validator: k,
                    componentType: "ANSWER",
                    queryKey: "has"
                },
                [N.SearchTokenTypes.FILTER_FILE_TYPE]: {
                    regex: U(O.default.Messages.SEARCH_FILTER_FILE_TYPE),
                    key: P(O.default.Messages.SEARCH_FILTER_FILE_TYPE),
                    plainText: O.default.Messages.SEARCH_FILTER_FILE_TYPE,
                    componentType: "FILTER"
                },
                [N.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                    regex: /(?:\s*([^\s]+))/,
                    follows: [N.SearchTokenTypes.FILTER_FILE_TYPE],
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "attachment_extensions"
                },
                [N.SearchTokenTypes.FILTER_FILE_NAME]: {
                    regex: U(O.default.Messages.SEARCH_FILTER_FILE_NAME),
                    key: P(O.default.Messages.SEARCH_FILTER_FILE_NAME),
                    plainText: O.default.Messages.SEARCH_FILTER_FILE_NAME,
                    componentType: "FILTER"
                },
                [N.SearchTokenTypes.ANSWER_FILE_NAME]: {
                    regex: /(?:\s*([^\s]+)(?=\s))/,
                    follows: [N.SearchTokenTypes.FILTER_FILE_NAME],
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "attachment_filename"
                },
                [N.SearchTokenTypes.FILTER_BEFORE]: {
                    regex: U(O.default.Messages.SEARCH_FILTER_BEFORE),
                    componentType: "FILTER",
                    key: P(O.default.Messages.SEARCH_FILTER_BEFORE),
                    plainText: O.default.Messages.SEARCH_FILTER_BEFORE,
                    getAutocompletions: (e, t, n) => F(e, n, N.SearchTokenTypes.FILTER_BEFORE)
                },
                [N.SearchTokenTypes.FILTER_ON]: {
                    regex: U("(".concat(O.default.Messages.SEARCH_FILTER_ON, "|").concat(O.default.Messages.SEARCH_FILTER_DURING, ")")),
                    componentType: "FILTER",
                    key: P(O.default.Messages.SEARCH_FILTER_DURING),
                    plainText: O.default.Messages.SEARCH_FILTER_DURING,
                    getAutocompletions: (e, t, n) => F(e, n, N.SearchTokenTypes.FILTER_ON)
                },
                [N.SearchTokenTypes.FILTER_AFTER]: {
                    regex: U(O.default.Messages.SEARCH_FILTER_AFTER),
                    componentType: "FILTER",
                    key: P(O.default.Messages.SEARCH_FILTER_AFTER),
                    plainText: O.default.Messages.SEARCH_FILTER_AFTER,
                    getAutocompletions: (e, t, n) => F(e, n, N.SearchTokenTypes.FILTER_AFTER)
                },
                [N.SearchTokenTypes.ANSWER_BEFORE]: {
                    regex: M,
                    follows: [N.SearchTokenTypes.FILTER_BEFORE],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => G(e, "before")
                },
                [N.SearchTokenTypes.ANSWER_ON]: {
                    regex: M,
                    follows: [N.SearchTokenTypes.FILTER_ON],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => G(e, "on")
                },
                [N.SearchTokenTypes.ANSWER_AFTER]: {
                    regex: M,
                    follows: [N.SearchTokenTypes.FILTER_AFTER],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => G(e, "after")
                },
                [N.SearchTokenTypes.FILTER_IN]: {
                    regex: U(O.default.Messages.SEARCH_FILTER_IN),
                    componentType: "FILTER",
                    key: P(O.default.Messages.SEARCH_FILTER_IN),
                    plainText: O.default.Messages.SEARCH_FILTER_IN,
                    validator: Y,
                    getAutocompletions(e, t, n) {
                        "#" === e[0] && (e = e.substring(1));
                        let i = h.default.queryChannels({
                            query: e,
                            type: _.GUILD_SELECTABLE_CHANNELS_KEY,
                            guildId: t,
                            limit: 1 / 0
                        }).concat(h.default.queryChannels({
                            query: e,
                            type: _.GUILD_VOCAL_CHANNELS_KEY,
                            guildId: t,
                            limit: 1 / 0
                        })).map(e => {
                            let {
                                record: t
                            } = e;
                            return t
                        }).filter(e => !e.isThread());
                        if ("" === e.trim()) {
                            let e = I.default.getChannelId(t),
                                n = i.find(t => t.id === e);
                            null != n && (i.splice(i.indexOf(n), 1), i.unshift(n))
                        }
                        let r = _.default.getTextChannelNameDisambiguations(t);
                        return l()(i).take(n).map(e => {
                            var t, n;
                            return {
                                text: "".concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                                channel: e
                            }
                        }).value()
                    }
                },
                [N.SearchTokenTypes.ANSWER_IN]: {
                    regex: /(?:\s*#?([^ ]+))/i,
                    mutable: !0,
                    follows: [N.SearchTokenTypes.FILTER_IN],
                    componentType: "ANSWER",
                    validator: w,
                    queryKey: "channel_id"
                },
                [N.SearchTokenTypes.FILTER_PINNED]: {
                    regex: U(O.default.Messages.SEARCH_FILTER_PINNED),
                    componentType: "FILTER",
                    key: P(O.default.Messages.SEARCH_FILTER_PINNED),
                    plainText: O.default.Messages.SEARCH_FILTER_PINNED,
                    getAutocompletions: () => [{
                        text: "true"
                    }, {
                        text: "false"
                    }]
                },
                [N.SearchTokenTypes.ANSWER_PINNED]: {
                    regex: y,
                    componentType: "ANSWER",
                    follows: [N.SearchTokenTypes.FILTER_PINNED],
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(K).length;
        return l()(K).keys().filter(e => N.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != K[e].key).map(e => ({
            token: e,
            text: K[e].key
        })).filter(t => {
            let {
                text: n
            } = t;
            return a()(e.toLowerCase(), n)
        }).take(t).value()
    }
    t.default = K
}