function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("956407"),
        s = n("6850"),
        l = n("830567"),
        c = n("877987"),
        f = n("941504"),
        d = n("674582");

    function _(e) {
        var t = e.user,
            n = e.shouldCopyOnClick,
            o = e.nickname,
            _ = e.pronouns,
            E = e.usernameIcon,
            p = e.identityCTA,
            m = e.className,
            y = e.isTryItOut,
            I = e.lastSection;
        return r.createElement(c.default, {
            className: i()(d.container, m),
            lastSection: I
        }, r.createElement("div", {
            className: n ? d.copiableNameTag : void 0
        }, r.createElement(s.CopiableField, {
            className: d.copiableField,
            copyMetaData: "User Tag",
            copyTooltip: f.default.Messages.ACCOUNT_CLICK_TO_COPY,
            copyValue: l.default.getUserTag(t, {
                decoration: "never",
                identifiable: "always"
            }),
            showCopyIcon: !0,
            disableCopy: !n
        }, r.createElement("div", {
            className: d.userText
        }, null != o ? r.createElement(a.Heading, {
            variant: "heading-lg/semibold",
            className: d.nickname
        }, o) : null, r.createElement(u.default, {
            usernameIcon: E,
            user: t,
            forceUsername: !0,
            forcePomelo: void 0 !== y && y,
            className: null == o ? d.userTagNoNickname : d.userTagWithNickname,
            usernameClass: null == o ? d.userTagUsernameNoNickname : d.userTagUsernameBase,
            discriminatorClass: null == o ? d.userTagDiscriminatorNoNickname : d.discrimBase,
            botClass: null == o ? d.headerBotTag : d.headerBotTagWithNickname
        }), p)), null != _ && "" !== _ && r.createElement(a.Tooltip, {
            text: f.default.Messages.USER_PROFILE_PRONOUNS
        }, function(e) {
            var t, n;
            return r.createElement(a.Text, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, e), n = (n = {
                variant: "text-sm/normal",
                className: d.pronouns
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), _)
        })))
    }
}