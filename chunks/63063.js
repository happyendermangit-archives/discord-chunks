function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUPPORT_LOCATION: function() {
            return o
        }
    });
    var i = n("299379"),
        r = n("706454"),
        a = n("358085"),
        s = n("981631");
    let o = "https://".concat(s.SUPPORT_DOMAIN),
        l = "https://".concat(s.SUPPORT_DEV_DOMAIN);

    function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
        return t + e
    }

    function d() {
        return r.default.locale.toLowerCase()
    }
    t.default = {
        getArticleURL: e => u("/hc/".concat(d(), "/articles/").concat(e)),
        getDevArticleURL: e => u("/hc/".concat(d(), "/articles/").concat(e), l),
        getCreatorSupportArticleURL: e => u("/hc/".concat(d(), "/articles/").concat(e), "https://creator-support.discord.com"),
        getTwitterURL: () => (0, i.default)(s.LocalizedLinks.TWITTER),
        getCommunityURL: () => u("/hc/".concat(d())),
        getSubmitRequestURL(e) {
            let t = u("/hc/".concat(d(), "/requests/new?platform=").concat(encodeURIComponent((0, a.getPlatformName)())));
            return null != e && (t += "&device_info=".concat(encodeURIComponent(e))), t
        },
        getSearchURL(e) {
            let t = encodeURIComponent(e);
            return u("/hc/".concat(d(), "/search?utf8=%E2%9C%93&query=").concat(t, "&commit=Search"))
        },
        getFeaturedArticlesJsonURL: () => u("/api/v2/help_center/en-us/articles.json?label_names=featured")
    }
}