function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("884691"),
        i = n("77078"),
        l = n("606292"),
        a = n("688318"),
        s = n("19287");

    function o(e) {
        let {
            user: t,
            guildId: n,
            size: o,
            showPending: u = !1,
            showTryItOut: c = !1,
            animateOnHover: d = !1,
            avatarDecorationOverride: f,
            avatarOverride: m
        } = e, {
            avatarSrc: _,
            isAvatarAnimating: E,
            eventHandlers: I
        } = (0, s.useAnimatedAvatarSrc)({
            user: t,
            guildId: n,
            size: (0, i.getAvatarSize)(o),
            showPending: u,
            animateOnHover: d,
            avatarOverride: m
        }), {
            avatarPlaceholderSrc: T,
            avatarDecorationSrc: C,
            eventHandlers: p
        } = (0, a.default)({
            user: t,
            guildId: null != n ? n : void 0,
            size: (0, l.getDecorationSizeForAvatarSize)(o),
            showPending: u,
            animateOnHover: d,
            avatarDecorationOverride: f,
            showTryItOut: c
        }), S = r.useCallback(() => {
            I.onMouseEnter(), p.onMouseEnter()
        }, [I, p]), P = r.useCallback(() => {
            I.onMouseLeave(), p.onMouseLeave()
        }, [I, p]);
        return {
            avatarPlaceholderSrc: T,
            avatarDecorationSrc: C,
            avatarSrc: _,
            isAnimating: E,
            eventHandlers: {
                onMouseEnter: S,
                onMouseLeave: P
            }
        }
    }
}