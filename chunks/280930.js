function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useStickerSuggestionResults: function() {
            return S
        },
        useTextChangeHandler: function() {
            return h
        }
    }), n("47120"), n("653041");
    var i = n("470079"),
        r = n("954955"),
        a = n.n(r),
        s = n("442837"),
        o = n("285651"),
        l = n("268350"),
        u = n("453070"),
        d = n("926491"),
        _ = n("594174"),
        c = n("483360"),
        E = n("251625"),
        I = n("606301"),
        T = n("549058");
    let f = (0, E.promiseThrottle)(l.fetchStickerPacks, T.REQUEST_THROTTLE_DURATION_MS),
        S = (e, t, n) => {
            let r = (0, u.useHasSendableSticker)(n),
                a = (0, s.useStateFromStores)([_.default], () => _.default.getCurrentUser());
            return i.useMemo(() => {
                let i = (0, I.getQueriesFromUserInput)(e);
                if (t || null == e || "" === e || i.length > T.MAX_NUM_USER_INPUT_WORDS || !r) return [];
                let s = [],
                    l = [],
                    u = (0, I.removePunctuation)(e),
                    d = u === i[0] ? i : [u, ...i];
                c.default.queryStickers(d, !1).forEach(e => {
                    let {
                        sticker: t
                    } = e, i = (0, o.getStickerSendability)(t, a, n), r = {
                        sticker: t,
                        sendability: i
                    };
                    i === o.StickerSendability.SENDABLE ? s.push(r) : i === o.StickerSendability.SENDABLE_WITH_PREMIUM && l.push(r)
                });
                let _ = [];
                return s.length > 0 && (_ = s.slice(0, T.MAX_NUM_SUGGESTED_STICKERS), 0 !== l.length && (_.length === T.MAX_NUM_SUGGESTED_STICKERS && _.pop(), _.push(l[0]))), _
            }, [e, n, r, t, a])
        },
        h = e => {
            let {
                setTextInputValue: t,
                setHasDismissed: n,
                setHasSelection: r,
                setFocusedSuggestionType: s,
                delayBeforeSuggestions: o
            } = e, l = i.useRef(null), u = i.useRef(!1), _ = i.useRef(!1), c = i.useMemo(() => a()(t, null != o ? o : T.DELAY_BEFORE_SUGGESTIONS_MS), [t, o]);
            return {
                handleTextChange: async e => {
                    var i;
                    if (null == e || "" === e) c.cancel(), null == t || t(""), null == n || n(!1), null == r || r(!1), null == s || s(null), l.current = null, u.current = !1;
                    else if (!u.current && e.trim() !== (null === (i = l.current) || void 0 === i ? void 0 : i.trim())) {
                        if (l.current = e, (0, I.getQueriesFromUserInput)(e).length > T.MAX_NUM_USER_INPUT_WORDS) {
                            u.current = !0, c.cancel(), t("");
                            return
                        }
                        if (!0 === _.current) return;
                        !d.default.hasLoadedStickerPacks && (_.current = !0, await f(), _.current = !1), c(l.current)
                    }
                },
                debouncedSetTextInputValue: c
            }
        }
}