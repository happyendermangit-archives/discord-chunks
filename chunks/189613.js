function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return n
        }
    }), s("881410");
    var n, o = s("37983"),
        a = s("884691"),
        l = s("414456"),
        r = s.n(l),
        i = s("448105"),
        u = s.n(i),
        c = s("917351"),
        d = s.n(c),
        h = s("592861"),
        C = s("77078"),
        f = s("988415"),
        m = s("145131"),
        p = s("782340"),
        x = s("442363"),
        N = s("678016");
    n = class extends a.PureComponent {
        renderItems() {
            let {
                query: e
            } = this.state, t = h.default.flatMap((e, t) => {
                let {
                    alpha2: s,
                    phoneCountryCodes: n,
                    name: a
                } = e, l = (0, f.getI18NCountryName)(s);
                return n.map(e => ({
                    key: "".concat(t, "-").concat(e),
                    name: a,
                    translatedName: l,
                    countryData: {
                        name: a,
                        alpha2: s,
                        code: e
                    },
                    children: (0, o.jsxs)(m.default, {
                        className: x.countryItem,
                        justify: m.default.Justify.CENTER,
                        align: m.default.Align.CENTER,
                        children: [(0, o.jsx)(m.default.Child, {
                            className: x.countryName,
                            children: l
                        }), (0, o.jsx)(m.default.Child, {
                            className: x.countryCode,
                            grow: 0,
                            shrink: 0,
                            children: e
                        })]
                    })
                }))
            }), s = d(t).filter(t => 0 === e.length || u(e.toLowerCase(), t.name.toLowerCase()) || u(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, a.createElement)(C.PopoutList.Item, {
                ...e,
                key: e.key,
                onClick: () => this.onClick(e.countryData)
            })).value();
            return 0 === s.length ? (0, o.jsx)(C.PopoutList.Empty, {
                children: p.default.Messages.NONE
            }) : (0, o.jsx)(C.ScrollerAuto, {
                className: x.phoneFieldScroller,
                children: s
            })
        }
        render() {
            let {
                className: e
            } = this.props;
            return (0, o.jsxs)(C.PopoutList, {
                className: r(x.phoneFieldPopout, N.elevationBorderLow, e),
                children: [(0, o.jsx)(C.PopoutList.SearchBar, {
                    query: this.state.query,
                    placeholder: p.default.Messages.SEARCH_COUNTRY,
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off"
                }), (0, o.jsx)(C.PopoutList.Divider, {}), this.renderItems()]
            })
        }
        constructor(e) {
            super(e), this.onChangeQuery = e => {
                this.setState({
                    query: e
                })
            }, this.onClearQuery = () => {
                this.setState({
                    query: ""
                })
            }, this.onClick = e => {
                var t, s;
                null === (t = (s = this.props).onClick) || void 0 === t || t.call(s, e)
            }, this.state = {
                query: ""
            }
        }
    }
}