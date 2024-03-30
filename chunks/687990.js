function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("535386"),
        a = n("571970"),
        u = n("85517");

    function s(e) {
        var t = e.user,
            n = e.guildId,
            s = e.size,
            l = e.showPending,
            c = void 0 !== l && l,
            f = e.showTryItOut,
            d = e.animateOnHover,
            _ = void 0 !== d && d,
            E = e.avatarDecorationOverride,
            p = e.avatarOverride,
            m = (0, u.useAnimatedAvatarSrc)({
                user: t,
                guildId: n,
                size: (0, o.getAvatarSize)(s),
                showPending: c,
                animateOnHover: _,
                avatarOverride: p
            }),
            y = m.avatarSrc,
            I = m.isAvatarAnimating,
            h = m.eventHandlers,
            O = (0, a.default)({
                user: t,
                guildId: null != n ? n : void 0,
                size: (0, i.getDecorationSizeForAvatarSize)(s),
                showPending: c,
                animateOnHover: _,
                avatarDecorationOverride: E,
                showTryItOut: void 0 !== f && f
            }),
            T = O.avatarPlaceholderSrc,
            S = O.avatarDecorationSrc,
            v = O.eventHandlers;
        return {
            avatarPlaceholderSrc: T,
            avatarDecorationSrc: S,
            avatarSrc: y,
            isAnimating: I,
            eventHandlers: {
                onMouseEnter: r.useCallback(function() {
                    h.onMouseEnter(), v.onMouseEnter()
                }, [h, v]),
                onMouseLeave: r.useCallback(function() {
                    h.onMouseLeave(), v.onMouseLeave()
                }, [h, v])
            }
        }
    }
}