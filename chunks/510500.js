function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useStickerSuggestionResults: function() {
            return E
        },
        useTextChangeHandler: function() {
            return y
        }
    }), n("222007"), n("424973");
    var i = n("884691"),
        l = n("483366"),
        a = n.n(l),
        s = n("446674"),
        r = n("866353"),
        o = n("467094"),
        u = n("256860"),
        d = n("364685"),
        c = n("697218"),
        f = n("25292"),
        p = n("117362"),
        m = n("171209"),
        h = n("721423");
    let x = (0, p.promiseThrottle)(o.fetchStickerPacks, h.REQUEST_THROTTLE_DURATION_MS),
        E = (e, t, n) => {
            let l = (0, u.useHasSendableSticker)(n),
                a = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
                o = i.useMemo(() => {
                    let i = (0, m.getQueriesFromUserInput)(e);
                    if (t || null == e || "" === e || i.length > h.MAX_NUM_USER_INPUT_WORDS || !l) return [];
                    let s = [],
                        o = [],
                        u = (0, m.removePunctuation)(e),
                        d = u === i[0] ? i : [u, ...i],
                        c = f.default.queryStickers(d, !1);
                    c.forEach(e => {
                        let {
                            sticker: t
                        } = e, i = (0, r.getStickerSendability)(t, a, n), l = {
                            sticker: t,
                            sendability: i
                        };
                        i === r.StickerSendability.SENDABLE ? s.push(l) : i === r.StickerSendability.SENDABLE_WITH_PREMIUM && o.push(l)
                    });
                    let p = [];
                    return s.length > 0 && (p = s.slice(0, h.MAX_NUM_SUGGESTED_STICKERS), 0 !== o.length && (p.length === h.MAX_NUM_SUGGESTED_STICKERS && p.pop(), p.push(o[0]))), p
                }, [e, n, l, t, a]);
            return o
        },
        y = e => {
            let {
                setTextInputValue: t,
                setHasDismissed: n,
                setHasSelection: l,
                setFocusedSuggestionType: s,
                delayBeforeSuggestions: r
            } = e, o = i.useRef(null), u = i.useRef(!1), c = i.useRef(!1), f = i.useMemo(() => a(t, null != r ? r : h.DELAY_BEFORE_SUGGESTIONS_MS), [t, r]), p = async e => {
                var i;
                if (null == e || "" === e) f.cancel(), null == t || t(""), null == n || n(!1), null == l || l(!1), null == s || s(null), o.current = null, u.current = !1;
                else if (!u.current && e.trim() !== (null === (i = o.current) || void 0 === i ? void 0 : i.trim())) {
                    if (o.current = e, (0, m.getQueriesFromUserInput)(e).length > h.MAX_NUM_USER_INPUT_WORDS) {
                        u.current = !0, f.cancel(), t("");
                        return
                    }
                    if (!0 === c.current) return;
                    !d.default.hasLoadedStickerPacks && (c.current = !0, await x(), c.current = !1), f(o.current)
                }
            };
            return {
                handleTextChange: p,
                debouncedSetTextInputValue: f
            }
        }
}