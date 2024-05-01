function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("392711"),
        r = n.n(i),
        a = n("314897"),
        s = n("908442"),
        o = n("981631"),
        l = n("689938");

    function u(e, t, n) {
        if (null == e || null == t) return {
            valid: !1,
            reason: l.default.Messages.BUILD_OVERRIDE_INVALID
        };
        let {
            releaseChannel: i,
            expiresAt: u,
            validForUserIds: d,
            allowedVersions: _,
            targetBuildOverride: c
        } = e, E = Object.keys(c);
        if (0 === r().intersection(E, t).length) return {
            valid: !1,
            reason: l.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_TARGETS.format({
                requestedTargets: E.map(e => {
                    var t;
                    return null !== (t = s.BUILD_OVERRIDE_TARGET_NAMES[e]) && void 0 !== t ? t : "unknown"
                }).join(", ")
            })
        };
        if (null != i && i !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
            let e = i === o.PublicReleaseChannels.PTB ? i.toUpperCase() : "".concat(i.charAt(0).toUpperCase()).concat(i.slice(1));
            return {
                valid: !1,
                reason: l.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                    releaseChannel: e
                })
            }
        }
        if (null != _ && (null == n || !_.includes(n))) return {
            valid: !1,
            reason: l.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                releaseChannel: _.join(", ")
            })
        };
        let I = null != u ? new Date(u).getTime() : null;
        return null != I && I < Date.now() ? {
            valid: !1,
            reason: l.default.Messages.BUILD_OVERRIDE_EXPIRED
        } : d.length > 0 && !d.includes(a.default.getId()) ? {
            valid: !1,
            reason: l.default.Messages.BUILD_OVERRIDE_INVALID_USER
        } : {
            valid: !0
        }
    }
}