function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("998880"),
        s = n("416801"),
        l = n("931093");

    function c(e) {
        var t = e.userBio,
            n = e.className,
            o = e.animateOnHover,
            c = e.isHovering,
            f = e.lineClamp,
            d = r.useMemo(function() {
                return (0, u.parseBioReact)(t)
            }, [t]);
        return r.createElement("div", {
            className: i()(n, l.markup)
        }, r.createElement(a.Text, {
            variant: "text-sm/normal",
            lineClamp: void 0 === f ? 6 : f
        }, r.createElement(s.MessagesInteractionContext.Provider, {
            value: {
                disableAnimations: void 0 !== o && o && !(void 0 !== c && c),
                disableInteractions: !1
            }
        }, d)))
    }
}