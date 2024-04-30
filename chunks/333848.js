function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("990547"),
        r = n("283693"),
        s = n("570140"),
        a = n("408987"),
        o = n("9156"),
        l = n("621600"),
        u = n("573261"),
        d = n("92114"),
        _ = n("981631"),
        c = n("526761");
    t.default = {
        createChannel(e) {
            let {
                guildId: t,
                type: n,
                name: E,
                permissionOverwrites: I = [],
                bitrate: T,
                userLimit: f,
                parentId: S,
                skuId: h,
                branchId: A
            } = e;
            s.default.dispatch({
                type: "CREATE_CHANNEL_MODAL_SUBMIT"
            });
            let m = {
                type: n,
                name: E,
                permission_overwrites: I
            };
            if (null != T && T !== _.BITRATE_DEFAULT && (m.bitrate = T), null != f && f > 0 && (m.user_limit = f), null != S && (m.parent_id = S), n === _.ChannelTypes.GUILD_STORE) {
                if (null == h) throw Error("Unexpected missing SKU");
                m.sku_id = h, m.branch_id = A
            }
            return u.default.post({
                url: _.Endpoints.GUILD_CHANNELS(t),
                body: m,
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.CHANNEL_CREATE,
                    properties: e => {
                        var t, n;
                        return (0, r.exact)({
                            is_private: I.length > 0,
                            channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                            channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                        })
                    }
                }
            }).then(e => (o.default.isOptInEnabled(t) && d.default.updateChannelOverrideSettings(t, e.body.id, {
                flags: c.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
            }, l.NotificationLabels.OptedIn), a.default.checkGuildTemplateDirty(t), e), e => {
                throw s.default.dispatch({
                    type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                    errors: e.body
                }), e
            })
        },
        createRoleSubscriptionTemplateChannel: (e, t, n, s) => u.default.post({
            url: _.Endpoints.GUILD_CHANNELS(e),
            body: {
                name: t,
                type: n,
                topic: s
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: e => {
                    var t, n;
                    return (0, r.exact)({
                        is_private: !0,
                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                    })
                }
            }
        })
    }
}