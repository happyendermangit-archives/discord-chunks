function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PopoutList: function() {
            return _
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("130969"),
        l = n("370373"),
        u = n("810567"),
        d = n("529000"),
        c = n("839715");
    class f extends s.PureComponent {
        render() {
            let {
                className: e,
                ...t
            } = this.props;
            return (0, i.jsx)(u.default, {
                ...t,
                className: a(c.popoutListInput, e)
            })
        }
    }
    f.defaultProps = {
        autoFocus: !0
    };
    class _ extends s.PureComponent {
        render() {
            let {
                className: e,
                children: t
            } = this.props;
            return (0, i.jsx)(o.Dialog, {
                className: a(c.popoutList, e),
                "aria-label": this.props["aria-label"],
                children: t
            })
        }
    }
    _.SearchBar = f, _.Item = d.default, _.Divider = () => (0, i.jsx)(l.FormDivider, {
        className: c.divider
    }), _.Empty = e => {
        let {
            children: t
        } = e;
        return (0, i.jsx)("div", {
            className: c.popoutListEmpty,
            children: t
        })
    }
}