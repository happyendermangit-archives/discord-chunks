function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var l, i = n("37983"),
        a = n("884691"),
        s = n("77078");
    class r extends a.PureComponent {
        render() {
            let {
                text: e,
                lastItem: t,
                className: n
            } = this.props;
            return (0, i.jsxs)("span", {
                children: [(0, i.jsx)(s.Anchor, {
                    className: n,
                    onClick: this.handleClick,
                    children: e
                }), t ? "" : ", "]
            })
        }
        constructor(...e) {
            super(...e), this.handleClick = () => {
                let {
                    onClick: e,
                    index: t
                } = this.props;
                null == e || e(t)
            }
        }
    }
    l = class extends a.PureComponent {
        render() {
            let e = this.props.artists.split(";");
            if (!this.props.canOpen) return e.join(", ");
            let t = e.length - 1;
            return e.map((e, n) => (0, i.jsx)(r, {
                text: e,
                index: n,
                lastItem: n === t,
                onClick: this.handleOpenSpotifyArtist,
                className: this.props.linkClassName
            }, "spotify-artist-".concat(n)))
        }
        constructor(...e) {
            super(...e), this.handleOpenSpotifyArtist = e => {
                let {
                    onOpenSpotifyArtist: t
                } = this.props;
                null == t || t(e)
            }
        }
    }
}