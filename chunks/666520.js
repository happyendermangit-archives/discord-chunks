function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("699581"),
        o = n.n(a),
        l = n("442837"),
        u = n("481060"),
        d = n("34854"),
        _ = n("702557"),
        c = n("246946"),
        E = n("981631"),
        I = n("689938"),
        T = n("9601");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class S extends(i = s.PureComponent) {
        componentDidMount() {
            if (this.props.autoFocus && !this.props.hideNote) {
                let e = o().findDOMNode(this.noteRef.current);
                null != e && null != e.selectionStart && (e.focus(), e.selectionStart = e.selectionEnd = e.value.length)
            }
        }
        render() {
            let {
                className: e,
                loading: t,
                note: n,
                hideNote: i
            } = this.props;
            return i ? null : (0, r.jsx)("div", {
                className: e,
                children: (0, r.jsx)(u.TextAreaAutosize, {
                    ref: this.noteRef,
                    className: T.textarea,
                    disabled: t,
                    placeholder: t ? I.default.Messages.LOADING_NOTE : I.default.Messages.NOTE_PLACEHOLDER,
                    "aria-label": I.default.Messages.NOTE,
                    onBlur: this.handleBlur,
                    onKeyPress: this.handleKeyPress,
                    defaultValue: null != n ? n : void 0,
                    maxLength: E.NOTE_MAX_LENGTH
                })
            })
        }
        constructor(...e) {
            super(...e), f(this, "noteRef", s.createRef()), f(this, "handleBlur", e => {
                let t = e.currentTarget.value,
                    {
                        note: n,
                        userId: i,
                        onUpdate: r
                    } = this.props;
                (null != n ? n : "") !== t && (null == r || r(), d.default.updateNote(i, t))
            }), f(this, "handleKeyPress", e => {
                if (13 === e.which) {
                    if (e.shiftKey) {
                        var t;
                        (null !== (t = e.currentTarget.value.match(/\n/g)) && void 0 !== t ? t : []).length >= 5 && e.preventDefault()
                    } else e.preventDefault(), e.currentTarget.blur()
                } else e.which === E.KeyboardKeys.SPACE && e.stopPropagation()
            })
        }
    }

    function h(e) {
        let t = (0, l.useStateFromStores)([c.default], () => c.default.hidePersonalInformation),
            n = (0, _.default)(e.userId);
        return (0, r.jsx)(S, {
            ...e,
            ...n,
            hideNote: t
        })
    }
    f(S, "defaultProps", {
        autoFocus: !1
    })
}