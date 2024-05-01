function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("470079"),
        r = n("481060"),
        a = n("1585"),
        s = n("125988"),
        o = n("252532");

    function l(e) {
        let {
            user: t,
            guildId: n,
            size: l,
            showPending: u = !1,
            showTryItOut: d = !1,
            animateOnHover: _ = !1,
            avatarDecorationOverride: c,
            avatarOverride: E
        } = e, {
            avatarSrc: I,
            isAvatarAnimating: T,
            eventHandlers: f
        } = (0, o.useAnimatedAvatarSrc)({
            user: t,
            guildId: n,
            size: (0, r.getAvatarSize)(l),
            showPending: u,
            animateOnHover: _,
            avatarOverride: E
        }), {
            avatarPlaceholderSrc: S,
            avatarDecorationSrc: h,
            eventHandlers: A
        } = (0, s.default)({
            user: t,
            guildId: null != n ? n : void 0,
            size: (0, a.getDecorationSizeForAvatarSize)(l),
            showPending: u,
            animateOnHover: _,
            avatarDecorationOverride: c,
            showTryItOut: d
        }), m = i.useCallback(() => {
            f.onMouseEnter(), A.onMouseEnter()
        }, [f, A]);
        return {
            avatarPlaceholderSrc: S,
            avatarDecorationSrc: h,
            avatarSrc: I,
            isAnimating: T,
            eventHandlers: {
                onMouseEnter: m,
                onMouseLeave: i.useCallback(() => {
                    f.onMouseLeave(), A.onMouseLeave()
                }, [f, A])
            }
        }
    }
}