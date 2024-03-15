function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return s
        }
    }), t("222007");
    var s, d = t("37983"),
        n = t("884691"),
        c = t("597755"),
        i = t.n(c),
        r = t("703809"),
        o = t("446674"),
        f = t("895547"),
        l = t("77078"),
        u = t("430568"),
        b = t("471671"),
        p = t("90404"),
        h = t("402671"),
        j = t("701909"),
        m = t("773336"),
        _ = t("439932"),
        E = t("50885"),
        g = t("160139"),
        I = t("49111"),
        T = t("782340");
    let O = o.default.connectStores([b.default], () => ({
        focused: b.default.isFocused()
    }))(g.default);
    s = class extends n.PureComponent {
        getPlatform() {
            var e;
            let a = null === (e = i.os) || void 0 === e ? void 0 : e.family;
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
            let e = (0, d.jsx)("div", {
                    children: (0, d.jsxs)("p", {
                        children: [T.default.Messages.VERY_OUT_OF_DATE_DESCRIPTION, " ", (0, d.jsx)(u.default, {
                            src: h.default.getURL(f.default.convert.fromCodePoint("1f44c")),
                            emojiName: ":ok_hand:",
                            animated: !1
                        })]
                    })
                }),
                a = (0, d.jsx)(l.Button, {
                    size: l.ButtonSizes.LARGE,
                    onClick: this.handleDownload,
                    children: T.default.Messages.DOWNLOAD
                });
            return (0, d.jsxs)(n.Fragment, {
                children: [(0, d.jsx)(r.Helmet, {
                    children: (0, d.jsx)("html", {
                        className: (0, _.getThemeClass)(I.ThemeTypes.DARK)
                    })
                }), (0, d.jsx)(O, {
                    type: this.getPlatform()
                }), (0, d.jsx)(p.default, {
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