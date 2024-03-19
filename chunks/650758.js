function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return d
        }
    }), t("222007");
    var d, s = t("37983"),
        n = t("884691"),
        i = t("597755"),
        c = t.n(i),
        r = t("703809"),
        o = t("446674"),
        f = t("895547"),
        l = t("77078"),
        u = t("430568"),
        p = t("471671"),
        b = t("90404"),
        h = t("402671"),
        j = t("701909"),
        m = t("773336"),
        _ = t("439932"),
        E = t("50885"),
        g = t("160139"),
        I = t("49111"),
        T = t("782340");
    let O = o.default.connectStores([p.default], () => ({
        focused: p.default.isFocused()
    }))(g.default);
    d = class extends n.PureComponent {
        getPlatform() {
            var e;
            let a = null === (e = c.os) || void 0 === e ? void 0 : e.family;
            return null != a && /^win/i.test(a) ? m.PlatformTypes.WINDOWS : null != a && /darwin|os x/i.test(a) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX
        }
        componentDidMount() {
            ! function() {
                let e = window.require("electron"),
                    a = e.remote.getCurrentWindow();
                E.default.minimize = () => a.minimize(), E.default.maximize = () => {
                    a.isMaximized() ? a.unmaximize() : a.maximize()
                }, E.default.close = () => a.close()
            }()
        }
        render() {
            let e = (0, s.jsx)("div", {
                    children: (0, s.jsxs)("p", {
                        children: [T.default.Messages.VERY_OUT_OF_DATE_DESCRIPTION, " ", (0, s.jsx)(u.default, {
                            src: h.default.getURL(f.default.convert.fromCodePoint("1f44c")),
                            emojiName: ":ok_hand:",
                            animated: !1
                        })]
                    })
                }),
                a = (0, s.jsx)(l.Button, {
                    size: l.ButtonSizes.LARGE,
                    onClick: this.handleDownload,
                    children: T.default.Messages.DOWNLOAD
                });
            return (0, s.jsxs)(n.Fragment, {
                children: [(0, s.jsx)(r.Helmet, {
                    children: (0, s.jsx)("html", {
                        className: (0, _.getThemeClass)(I.ThemeTypes.DARK)
                    })
                }), (0, s.jsx)(O, {
                    type: this.getPlatform()
                }), (0, s.jsx)(b.default, {
                    title: T.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                    note: e,
                    action: a
                })]
            })
        }
        constructor(...e) {
            super(...e), this.handleDownload = () => {
                window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? j.default.getArticleURL(I.HelpdeskArticles.CORRUPT_INSTALLATION) : I.MarketingURLs.DOWNLOAD)
            }
        }
    }
}