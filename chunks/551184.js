function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return s
        }
    });
    var t = E("37983"),
        o = E("884691"),
        n = E("414456"),
        r = E.n(n),
        a = E("77078"),
        i = E("98717");
    let I = {
        SMALL: i.sizeSmall,
        MEDIUM: i.sizeMedium,
        LARGE: i.sizeLarge
    };
    class T extends o.PureComponent {
        calculateScroll() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
            if (null == e) return;
            let {
                scrollTop: _
            } = e.getScrollerState(), {
                hideSeparator: E
            } = this.state;
            0 !== _ || E ? _ > 0 && E && this.setState({
                hideSeparator: !1
            }) : this.setState({
                hideSeparator: !0
            })
        }
        getScroller() {
            return this._scroller
        }
        renderChildren() {
            let {
                hideSeparator: e
            } = this.state;
            return o.Children.map(this.props.children, _ => o.isValidElement(_) ? _.type === a.ModalContent || _.type === a.ModalListContent ? o.cloneElement(_, {
                scrollerRef: this.setRef,
                onScroll: this.handleScroll,
                onResize: this.handleScroll
            }) : _.type === a.ModalHeader && e ? o.cloneElement(_, {
                separator: !1
            }) : _ : _)
        }
        render() {
            let {
                className: e,
                children: _,
                tag: E,
                size: o,
                fullscreenOnMobile: n,
                ...a
            } = this.props;
            return (0, t.jsx)(E, {
                className: r(i.modal, e, o, {
                    [i.fullscreenOnMobile]: n
                }),
                ...a,
                children: this.renderChildren()
            })
        }
        constructor(e) {
            super(e), this._scroller = null, this.setRef = e => {
                this._scroller = e, null != e && this.calculateScroll()
            }, this.handleScroll = e => {
                this.calculateScroll();
                let {
                    onScroll: _
                } = this.props;
                null == _ || _(e)
            }, this.state = {
                hideSeparator: !1
            }
        }
    }
    T.Header = a.ModalHeader, T.Footer = a.ModalFooter, T.Content = a.ModalContent, T.ListContent = a.ModalListContent, T.CloseButton = a.ModalCloseButton, T.Sizes = I, T.defaultProps = {
        fullscreenOnMobile: !0,
        size: I.SMALL,
        tag: "div"
    };
    var s = T
}