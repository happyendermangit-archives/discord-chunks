function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return v
        }
    }), a("47120");
    var d = a("735250"),
        n = a("470079"),
        c = a("525654"),
        i = a.n(c),
        o = a("445131"),
        r = a("442837"),
        f = a("946188"),
        l = a("481060"),
        s = a("596454"),
        u = a("451478"),
        b = a("586576"),
        h = a("176354"),
        p = a("63063"),
        m = a("358085"),
        _ = a("792125"),
        E = a("998502"),
        g = a("151851"),
        I = a("981631"),
        O = a("689938");
    let T = r.default.connectStores([u.default], () => ({
        focused: u.default.isFocused()
    }))(g.default);
    class v extends n.PureComponent {
        getPlatform() {
            var e;
            let t = null === (e = i().os) || void 0 === e ? void 0 : e.family;
            return null != t && /^win/i.test(t) ? m.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX
        }
        componentDidMount() {
            ! function() {
                let e = window.require("electron").remote.getCurrentWindow();
                E.default.minimize = () => e.minimize(), E.default.maximize = () => {
                    e.isMaximized() ? e.unmaximize() : e.maximize()
                }, E.default.close = () => e.close()
            }()
        }
        render() {
            let e = (0, d.jsx)("div", {
                    children: (0, d.jsxs)("p", {
                        children: [O.default.Messages.VERY_OUT_OF_DATE_DESCRIPTION, " ", (0, d.jsx)(s.default, {
                            src: h.default.getURL(f.default.convert.fromCodePoint("1f44c")),
                            emojiName: ":ok_hand:",
                            animated: !1
                        })]
                    })
                }),
                t = (0, d.jsx)(l.Button, {
                    size: l.ButtonSizes.LARGE,
                    onClick: this.handleDownload,
                    children: O.default.Messages.DOWNLOAD
                });
            return (0, d.jsxs)(n.Fragment, {
                children: [(0, d.jsx)(o.Helmet, {
                    children: (0, d.jsx)("html", {
                        className: (0, _.getThemeClass)(I.ThemeTypes.DARK)
                    })
                }), (0, d.jsx)(T, {
                    type: this.getPlatform()
                }), (0, d.jsx)(b.default, {
                    title: O.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                    note: e,
                    action: t
                })]
            })
        }
        constructor(...e) {
            var t, a, d;
            super(...e), t = this, a = "handleDownload", d = () => {
                window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? p.default.getArticleURL(I.HelpdeskArticles.CORRUPT_INSTALLATION) : I.MarketingURLs.DOWNLOAD)
            }, a in t ? Object.defineProperty(t, a, {
                value: d,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[a] = d
        }
    }
}