function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUPPORT_LOCATION: function() {
            return u
        }
    });
    var i = n("544891"),
        r = n("299379"),
        s = n("706454"),
        a = n("314897"),
        o = n("358085"),
        l = n("981631");
    let u = "https://".concat(l.SUPPORT_DOMAIN),
        d = "https://".concat(l.SUPPORT_DEV_DOMAIN);

    function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
        return t + e
    }

    function c() {
        return s.default.locale.toLowerCase()
    }
    t.default = {
        getArticleURL: e => _("/hc/".concat(c(), "/articles/").concat(e)),
        getDevArticleURL: e => _("/hc/".concat(c(), "/articles/").concat(e), d),
        getCreatorSupportArticleURL: e => _("/hc/".concat(c(), "/articles/").concat(e), "https://creator-support.discord.com"),
        getTwitterURL: () => (0, r.default)(l.LocalizedLinks.TWITTER),
        getCommunityURL: () => _("/hc/".concat(c())),
        getSubmitRequestURL(e) {
            let t = _("/hc/".concat(c(), "/requests/new?platform=").concat(encodeURIComponent((0, o.getPlatformName)())));
            return null != e && (t += "&device_info=".concat(encodeURIComponent(e))), t
        },
        async getSubmitRequestURLAuthenticated(e) {
            let t = a.default.getToken();
            if (null == t) return this.getSubmitRequestURL(e);
            let n = await i.HTTP.get({
                    url: l.Endpoints.SSO_TOKEN,
                    headers: {
                        authorization: t
                    }
                }),
                r = this.getSubmitRequestURL(e);
            return "".concat((0, i.getAPIBaseURL)()).concat(l.Endpoints.SSO, "?service=zendesk&return_to=").concat(r, "&token=").concat(n.body.token)
        },
        getSearchURL(e) {
            let t = encodeURIComponent(e);
            return _("/hc/".concat(c(), "/search?utf8=%E2%9C%93&query=").concat(t, "&commit=Search"))
        },
        getFeaturedArticlesJsonURL: () => _("/api/v2/help_center/en-us/articles.json?label_names=featured")
    }
}