function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a = n("735250"),
        o = n("470079"),
        l = n("120356"),
        u = n.n(l),
        d = n("481060"),
        _ = n("285952"),
        c = n("550118");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = i || (i = {})).SINGLE_AVATAR = "1", s.MULTIPLE_AVATAR = "2";
    let I = {
        [d.AvatarSizes.SIZE_32]: c.avatarSmall,
        [d.AvatarSizes.SIZE_40]: c.avatarLarge
    };
    class T extends(r = o.Component) {
        render() {
            let {
                type: e,
                avatarSize: t,
                className: n
            } = this.props;
            return "2" === e ? (0, a.jsxs)("div", {
                className: u()(c.multiplePlaceholder, n),
                children: [(0, a.jsxs)(_.default, {
                    children: [(0, a.jsx)("div", {
                        className: u()(c.placeholderAvatar, I[t], c.avatarMasked)
                    }), (0, a.jsx)("div", {
                        className: u()(c.placeholderAvatar, I[t], c.avatarMasked)
                    }), (0, a.jsx)("div", {
                        className: u()(c.placeholderAvatar, I[t])
                    })]
                }), (0, a.jsx)(_.default, {
                    grow: 1,
                    className: c.mulitplePlaceholderUsername,
                    style: {
                        maxWidth: this.placeholderMaxWidth
                    }
                })]
            }) : (0, a.jsxs)(_.default, {
                className: u()(c.placeholder, n),
                children: [(0, a.jsx)("div", {
                    className: u()(c.placeholderAvatar, I[t])
                }), (0, a.jsx)(_.default, {
                    grow: 1,
                    className: c.placeholderUsername,
                    style: {
                        maxWidth: this.placeholderMaxWidth
                    }
                })]
            })
        }
        constructor(...e) {
            super(...e), E(this, "placeholderMaxWidth", "".concat(Math.floor(40 * Math.random()) + 40, "%"))
        }
    }
    E(T, "defaultProps", {
        type: "1"
    }), E(T, "Types", i), t.default = T
}