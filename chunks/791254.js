function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("956407"),
        a = n("941504"),
        u = n("395274");

    function s(e) {
        var t = e.user,
            n = e.nickname,
            s = e.pronouns,
            l = e.usernameIcon;
        return r.createElement("div", {
            className: u.container
        }, r.createElement("div", {
            className: u.userText
        }, null != n ? r.createElement(o.Heading, {
            variant: "heading-lg/semibold",
            className: u.nickname
        }, n) : null, r.createElement("div", {
            className: u.flex
        }, r.createElement(i.default, {
            usernameIcon: l,
            user: t,
            forceUsername: !0,
            className: null == n ? u.userTagNoNickname : u.userTagWithNickname,
            usernameClass: null == n ? u.userTagUsernameNoNickname : u.userTagUsernameBase,
            discriminatorClass: null == n ? u.userTagDiscriminatorNoNickname : u.discrimBase,
            botClass: null == n ? u.headerBotTag : u.headerBotTagWithNickname
        }), null != s && "" !== s && r.createElement(o.Tooltip, {
            text: a.default.Messages.USER_PROFILE_PRONOUNS
        }, function(e) {
            var t, n;
            return r.createElement(o.Text, (t = function(e) {
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
                className: u.biteSizePronouns
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), s)
        }))))
    }
}