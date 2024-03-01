function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var l, i, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("77078"),
        d = n("145131"),
        c = n("92796");
    (i = l || (l = {})).SINGLE_AVATAR = "1", i.MULTIPLE_AVATAR = "2";
    let f = {
        [u.AvatarSizes.SIZE_32]: c.avatarSmall,
        [u.AvatarSizes.SIZE_40]: c.avatarLarge
    };
    class m extends s.Component {
        render() {
            let {
                type: e,
                avatarSize: t,
                className: n
            } = this.props;
            return "2" === e ? (0, a.jsxs)("div", {
                className: o(c.multiplePlaceholder, n),
                children: [(0, a.jsxs)(d.default, {
                    children: [(0, a.jsx)("div", {
                        className: o(c.placeholderAvatar, f[t], c.avatarMasked)
                    }), (0, a.jsx)("div", {
                        className: o(c.placeholderAvatar, f[t], c.avatarMasked)
                    }), (0, a.jsx)("div", {
                        className: o(c.placeholderAvatar, f[t])
                    })]
                }), (0, a.jsx)(d.default, {
                    grow: 1,
                    className: c.mulitplePlaceholderUsername,
                    style: {
                        maxWidth: this.placeholderMaxWidth
                    }
                })]
            }) : (0, a.jsxs)(d.default, {
                className: o(c.placeholder, n),
                children: [(0, a.jsx)("div", {
                    className: o(c.placeholderAvatar, f[t])
                }), (0, a.jsx)(d.default, {
                    grow: 1,
                    className: c.placeholderUsername,
                    style: {
                        maxWidth: this.placeholderMaxWidth
                    }
                })]
            })
        }
        constructor(...e) {
            super(...e), this.placeholderMaxWidth = "".concat(Math.floor(40 * Math.random()) + 40, "%")
        }
    }
    m.defaultProps = {
        type: "1"
    }, m.Types = l;
    var p = m
}