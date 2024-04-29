function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return v
        }
    }), s("390547");
    var n = s("735250"),
        o = s("470079"),
        l = s("120356"),
        a = s.n(l),
        r = s("658722"),
        i = s.n(r),
        u = s("392711"),
        c = s.n(u),
        d = s("217986"),
        h = s("481060"),
        f = s("133080"),
        C = s("285952"),
        m = s("689938"),
        p = s("375958"),
        x = s("661781");

    function N(e, t, s) {
        return t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s, e
    }
    class v extends o.PureComponent {
        renderItems() {
            let {
                query: e
            } = this.state, t = d.default.flatMap((e, t) => {
                let {
                    alpha2: s,
                    phoneCountryCodes: o,
                    name: l
                } = e, a = (0, f.getI18NCountryName)(s);
                return o.map(e => ({
                    key: "".concat(t, "-").concat(e),
                    name: l,
                    translatedName: a,
                    countryData: {
                        name: l,
                        alpha2: s,
                        code: e
                    },
                    children: (0, n.jsxs)(C.default, {
                        className: p.countryItem,
                        justify: C.default.Justify.CENTER,
                        align: C.default.Align.CENTER,
                        children: [(0, n.jsx)(C.default.Child, {
                            className: p.countryName,
                            children: a
                        }), (0, n.jsx)(C.default.Child, {
                            className: p.countryCode,
                            grow: 0,
                            shrink: 0,
                            children: e
                        })]
                    })
                }))
            }), s = c()(t).filter(t => 0 === e.length || i()(e.toLowerCase(), t.name.toLowerCase()) || i()(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, o.createElement)(h.PopoutList.Item, {
                ...e,
                key: e.key,
                onClick: () => this.onClick(e.countryData)
            })).value();
            return 0 === s.length ? (0, n.jsx)(h.PopoutList.Empty, {
                children: m.default.Messages.NONE
            }) : (0, n.jsx)(h.ScrollerAuto, {
                className: p.phoneFieldScroller,
                children: s
            })
        }
        render() {
            let {
                className: e
            } = this.props;
            return (0, n.jsxs)(h.PopoutList, {
                className: a()(p.phoneFieldPopout, x.elevationBorderLow, e),
                children: [(0, n.jsx)(h.PopoutList.SearchBar, {
                    query: this.state.query,
                    placeholder: m.default.Messages.SEARCH_COUNTRY,
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off"
                }), (0, n.jsx)(h.PopoutList.Divider, {}), this.renderItems()]
            })
        }
        constructor(e) {
            super(e), N(this, "onChangeQuery", e => {
                this.setState({
                    query: e
                })
            }), N(this, "onClearQuery", () => {
                this.setState({
                    query: ""
                })
            }), N(this, "onClick", e => {
                var t, s;
                null === (t = (s = this.props).onClick) || void 0 === t || t.call(s, e)
            }), this.state = {
                query: ""
            }
        }
    }
}