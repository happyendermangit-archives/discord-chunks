function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("872717"),
        s = n("819855"),
        r = n("913144"),
        a = n("81732"),
        o = n("21121"),
        l = n("258158"),
        u = n("393414"),
        d = n("233069"),
        c = n("42203"),
        _ = n("271560"),
        f = n("561288"),
        E = n("987317"),
        h = n("49111"),
        g = n("333188"),
        m = n("782340"),
        p = {
            async openPrivateChannel(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    a = this._getRecipients(e),
                    o = e => {
                        t && f.default.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null)
                    };
                if (1 === a.length) {
                    let [e] = a, t = this._openCachedDMChannel(e, r);
                    if (null != t) return o(t), Promise.resolve(t.id)
                }
                try {
                    let e = await i.default.post({
                        url: h.Endpoints.USER_CHANNELS,
                        body: {
                            recipients: a
                        },
                        context: {
                            location: s
                        },
                        oldFormErrors: !0
                    });
                    null == r || r();
                    let t = this._openPrivateChannel(e.body);
                    return o(t), e.body.id
                } catch (e) {
                    var u;
                    throw (null == e ? void 0 : null === (u = e.body) || void 0 === u ? void 0 : u.code) === h.AbortCodes.QUARANTINED && (0, l.default)(), e
                }
            },
            async createBroadcastPrivateChannel() {
                try {
                    let e = await i.default.post({
                            url: h.Endpoints.BROADCAST_PRIVATE_CHANNEL
                        }),
                        t = (0, d.createChannelRecordFromServer)(e.body);
                    return f.default.call(t.id, !1, !1, null), e.body.id
                } catch (t) {
                    var e;
                    throw (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.code) === h.AbortCodes.QUARANTINED && (0, l.default)(), t
                }
            },
            _openCachedDMChannel(e, t) {
                let n = c.default.getDMFromUserId(e),
                    i = null != n ? c.default.getChannel(n) : null;
                return null != i ? (null == t || t(), null != (0, o.getRootNavigationRefIfInExperiment)() ? (0, u.transitionTo)(h.Routes.CHANNEL(h.ME, i.id), {
                    navigationReplace: !0
                }) : E.default.selectPrivateChannel(i.id), i) : null
            },
            async ensurePrivateChannel(e) {
                let t = this._getRecipients(e),
                    n = await i.default.post({
                        url: h.Endpoints.USER_CHANNELS,
                        body: {
                            recipients: t
                        },
                        oldFormErrors: !0
                    }),
                    s = (0, d.createChannelRecordFromServer)(n.body);
                return r.default.dispatch({
                    type: "CHANNEL_CREATE",
                    channel: s
                }), s.id
            },
            async getOrEnsurePrivateChannel(e) {
                let t = c.default.getDMFromUserId(e);
                return null != t ? t : await this.ensurePrivateChannel(e)
            },
            async getDMChannel(e) {
                let t = await i.default.get(h.Endpoints.DM_CHANNEL(e)),
                    n = (0, d.createChannelRecordFromServer)(t.body);
                return r.default.dispatch({
                    type: "CHANNEL_CREATE",
                    channel: n
                }), n.id
            },
            _getRecipients: e => null != e ? Array.isArray(e) ? e : [e] : [],
            _openPrivateChannel(e) {
                let t = (0, d.createChannelRecordFromServer)(e);
                return r.default.dispatch({
                    type: "CHANNEL_CREATE",
                    channel: t
                }), null != (0, o.getRootNavigationRefIfInExperiment)() ? (0, u.transitionTo)(h.Routes.CHANNEL(h.ME, t.id), {
                    navigationReplace: !0
                }) : E.default.selectPrivateChannel(t.id), t
            },
            closePrivateChannel(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return r.default.dispatch({
                    type: "CHANNEL_DELETE",
                    channel: {
                        id: e,
                        guild_id: void 0,
                        parent_id: void 0
                    },
                    silent: n
                }), t && !__OVERLAY__ && (0, u.transitionTo)(h.Routes.FRIENDS), i.default.delete({
                    url: h.Endpoints.CHANNEL(e),
                    query: {
                        silent: n
                    },
                    oldFormErrors: !0
                }).then(() => {
                    s.AccessibilityAnnouncer.announce(m.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED)
                }).catch(() => {
                    s.AccessibilityAnnouncer.announce(m.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED)
                })
            },
            updatePermissionOverwrite: (e, t) => i.default.put({
                url: h.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
                body: t,
                oldFormErrors: !0
            }),
            clearPermissionOverwrite: (e, t) => i.default.delete({
                url: h.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
                oldFormErrors: !0
            }),
            addRecipient(e, t, n, r) {
                return i.default.put({
                    url: h.Endpoints.CHANNEL_RECIPIENT(e, t),
                    context: {
                        location: n
                    },
                    oldFormErrors: !0
                }).then(t => (s.AccessibilityAnnouncer.announce(m.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == r || r(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e).catch(() => (s.AccessibilityAnnouncer.announce(m.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e))
            },
            addRecipients(e, t, n, i) {
                return this.addRecipient(e, t[0], n, i).then(e => Promise.all(t.slice(1).map(t => this.addRecipient(e, t, n))).then(() => e))
            },
            removeRecipient: (e, t) => i.default.delete({
                url: h.Endpoints.CHANNEL_RECIPIENT(e, t),
                oldFormErrors: !0
            }),
            setDMOwner: (e, t) => i.default.patch({
                url: h.Endpoints.CHANNEL(e),
                body: {
                    owner: t
                },
                oldFormErrors: !0
            }),
            async setName(e, t) {
                let n = c.default.getChannel(e),
                    s = await i.default.patch({
                        url: h.Endpoints.CHANNEL(e),
                        body: {
                            name: t
                        },
                        oldFormErrors: !0
                    }),
                    r = null == n ? void 0 : n.getGuildId();
                return null != r && !(null == n ? void 0 : n.isThread()) && a.default.checkGuildTemplateDirty(r), s
            },
            setIcon(e, t) {
                let n = c.default.getChannel(e);
                i.default.patch({
                    url: h.Endpoints.CHANNEL(e),
                    body: {
                        icon: t
                    },
                    oldFormErrors: !0
                }).then(() => {
                    let e = null == n ? void 0 : n.getGuildId();
                    null != e && !(null == n ? void 0 : n.isThread()) && a.default.checkGuildTemplateDirty(e)
                })
            },
            setVoiceBackgroundDisplay(e, t) {
                let n;
                return n = t.type === g.VoiceCallBackgroundTypes.EMPTY ? t : {
                    type: t.type,
                    resource_id: t.resourceId
                }, i.default.put({
                    url: h.Endpoints.UPDATE_VOICE_CHANNEL_BACKGROUND(e),
                    body: {
                        voice_background_display: n
                    },
                    oldFormErrors: !0
                })
            },
            convertToGuild: e => i.default.post({
                url: h.Endpoints.CHANNEL_CONVERT(e),
                oldFormErrors: !0
            }),
            preload(e, t) {
                r.default.dispatch({
                    type: "CHANNEL_PRELOAD",
                    guildId: e === h.ME ? null : e,
                    channelId: t,
                    context: h.CURRENT_APP_CONTEXT
                })
            },
            fetchChannelStoreListing(e, t) {
                let n = null != t ? h.Endpoints.CHANNEL_STORE_LISTING_SKU(e, t) : h.Endpoints.CHANNEL_STORE_LISTING(e);
                return (0, _.httpGetWithCountryCodeQuery)(n).then(t => {
                    r.default.dispatch({
                        type: "STORE_LISTING_FETCH_SUCCESS",
                        channelId: e,
                        storeListing: t.body
                    })
                })
            },
            async createTextChannel(e, t, n, s) {
                let r = {
                    type: h.ChannelTypes.GUILD_TEXT,
                    name: t,
                    permission_overwrites: []
                };
                null != n && (r.parent_id = n), null != s && (r.topic = s);
                let o = await i.default.post({
                    url: h.Endpoints.GUILD_CHANNELS(e),
                    body: r,
                    oldFormErrors: !0
                });
                return a.default.checkGuildTemplateDirty(e), o
            }
        }
}