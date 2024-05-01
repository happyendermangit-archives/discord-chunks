function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("544891"),
        r = n("780384"),
        a = n("570140"),
        s = n("408987"),
        o = n("57132"),
        l = n("895886"),
        u = n("703656"),
        d = n("131704"),
        _ = n("592125"),
        c = n("73346"),
        E = n("26151"),
        I = n("287734"),
        T = n("981631"),
        f = n("423219"),
        S = n("689938");
    t.default = {
        async openPrivateChannel(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 ? arguments[3] : void 0,
                a = arguments.length > 4 ? arguments[4] : void 0,
                s = this._getRecipients(e),
                o = e => {
                    t && E.default.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null)
                };
            if (1 === s.length) {
                let [e] = s, t = this._openCachedDMChannel(e, a);
                if (null != t) return o(t), Promise.resolve(t.id)
            }
            try {
                let e = await i.HTTP.post({
                    url: T.Endpoints.USER_CHANNELS,
                    body: {
                        recipients: s
                    },
                    context: {
                        location: r
                    },
                    oldFormErrors: !0
                });
                null == a || a();
                let t = this._openPrivateChannel(e.body);
                return o(t), e.body.id
            } catch (e) {
                var u;
                throw (null == e ? void 0 : null === (u = e.body) || void 0 === u ? void 0 : u.code) === T.AbortCodes.QUARANTINED && (0, l.default)(), e
            }
        },
        async createBroadcastPrivateChannel() {
            try {
                let e = await i.HTTP.post({
                        url: T.Endpoints.BROADCAST_PRIVATE_CHANNEL
                    }),
                    t = (0, d.createChannelRecordFromServer)(e.body);
                return E.default.call(t.id, !1, !1, null), e.body.id
            } catch (t) {
                var e;
                throw (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.code) === T.AbortCodes.QUARANTINED && (0, l.default)(), t
            }
        },
        _openCachedDMChannel(e, t) {
            let n = _.default.getDMFromUserId(e),
                i = null != n ? _.default.getChannel(n) : null;
            return null != i ? (null == t || t(), null != (0, o.getRootNavigationRefIfInExperiment)() ? (0, u.transitionTo)(T.Routes.CHANNEL(T.ME, i.id), {
                navigationReplace: !0
            }) : I.default.selectPrivateChannel(i.id), i) : null
        },
        async ensurePrivateChannel(e) {
            let t = this._getRecipients(e),
                n = await i.HTTP.post({
                    url: T.Endpoints.USER_CHANNELS,
                    body: {
                        recipients: t
                    },
                    oldFormErrors: !0
                }),
                r = (0, d.createChannelRecordFromServer)(n.body);
            return a.default.dispatch({
                type: "CHANNEL_CREATE",
                channel: r
            }), r.id
        },
        async getOrEnsurePrivateChannel(e) {
            let t = _.default.getDMFromUserId(e);
            return null != t ? t : await this.ensurePrivateChannel(e)
        },
        async getDMChannel(e) {
            let t = await i.HTTP.get(T.Endpoints.DM_CHANNEL(e)),
                n = (0, d.createChannelRecordFromServer)(t.body);
            return a.default.dispatch({
                type: "CHANNEL_CREATE",
                channel: n
            }), n.id
        },
        _getRecipients: e => null != e ? Array.isArray(e) ? e : [e] : [],
        _openPrivateChannel(e) {
            let t = (0, d.createChannelRecordFromServer)(e);
            return a.default.dispatch({
                type: "CHANNEL_CREATE",
                channel: t
            }), null != (0, o.getRootNavigationRefIfInExperiment)() ? (0, u.transitionTo)(T.Routes.CHANNEL(T.ME, t.id), {
                navigationReplace: !0
            }) : I.default.selectPrivateChannel(t.id), t
        },
        closePrivateChannel(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return a.default.dispatch({
                type: "CHANNEL_DELETE",
                channel: {
                    id: e,
                    guild_id: void 0,
                    parent_id: void 0
                },
                silent: n
            }), t && !__OVERLAY__ && (0, u.transitionTo)(T.Routes.FRIENDS), i.HTTP.del({
                url: T.Endpoints.CHANNEL(e),
                query: {
                    silent: n
                },
                oldFormErrors: !0
            }).then(() => {
                r.AccessibilityAnnouncer.announce(S.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED)
            }).catch(() => {
                r.AccessibilityAnnouncer.announce(S.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED)
            })
        },
        updatePermissionOverwrite: (e, t) => i.HTTP.put({
            url: T.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
            body: t,
            oldFormErrors: !0
        }),
        clearPermissionOverwrite: (e, t) => i.HTTP.del({
            url: T.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
            oldFormErrors: !0
        }),
        addRecipient(e, t, n, a) {
            return i.HTTP.put({
                url: T.Endpoints.CHANNEL_RECIPIENT(e, t),
                context: {
                    location: n
                },
                oldFormErrors: !0
            }).then(t => (r.AccessibilityAnnouncer.announce(S.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == a || a(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e).catch(() => (r.AccessibilityAnnouncer.announce(S.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e))
        },
        addRecipients(e, t, n, i) {
            return this.addRecipient(e, t[0], n, i).then(e => Promise.all(t.slice(1).map(t => this.addRecipient(e, t, n))).then(() => e))
        },
        removeRecipient: (e, t) => i.HTTP.del({
            url: T.Endpoints.CHANNEL_RECIPIENT(e, t),
            oldFormErrors: !0
        }),
        setDMOwner: (e, t) => i.HTTP.patch({
            url: T.Endpoints.CHANNEL(e),
            body: {
                owner: t
            },
            oldFormErrors: !0
        }),
        async setName(e, t) {
            let n = _.default.getChannel(e),
                r = await i.HTTP.patch({
                    url: T.Endpoints.CHANNEL(e),
                    body: {
                        name: t
                    },
                    oldFormErrors: !0
                }),
                a = null == n ? void 0 : n.getGuildId();
            return null != a && !(null == n ? void 0 : n.isThread()) && s.default.checkGuildTemplateDirty(a), r
        },
        setIcon(e, t) {
            let n = _.default.getChannel(e);
            i.HTTP.patch({
                url: T.Endpoints.CHANNEL(e),
                body: {
                    icon: t
                },
                oldFormErrors: !0
            }).then(() => {
                let e = null == n ? void 0 : n.getGuildId();
                null != e && !(null == n ? void 0 : n.isThread()) && s.default.checkGuildTemplateDirty(e)
            })
        },
        setVoiceBackgroundDisplay(e, t) {
            let n;
            return n = t.type === f.VoiceCallBackgroundTypes.EMPTY ? t : {
                type: t.type,
                resource_id: t.resourceId
            }, i.HTTP.put({
                url: T.Endpoints.UPDATE_VOICE_CHANNEL_BACKGROUND(e),
                body: {
                    voice_background_display: n
                },
                oldFormErrors: !0
            })
        },
        convertToGuild: e => i.HTTP.post({
            url: T.Endpoints.CHANNEL_CONVERT(e),
            oldFormErrors: !0
        }),
        preload(e, t) {
            a.default.dispatch({
                type: "CHANNEL_PRELOAD",
                guildId: e === T.ME ? null : e,
                channelId: t,
                context: T.CURRENT_APP_CONTEXT
            })
        },
        fetchChannelStoreListing(e, t) {
            let n = null != t ? T.Endpoints.CHANNEL_STORE_LISTING_SKU(e, t) : T.Endpoints.CHANNEL_STORE_LISTING(e);
            return (0, c.httpGetWithCountryCodeQuery)(n).then(t => {
                a.default.dispatch({
                    type: "STORE_LISTING_FETCH_SUCCESS",
                    channelId: e,
                    storeListing: t.body
                })
            })
        },
        async createTextChannel(e, t, n, r) {
            let a = {
                type: T.ChannelTypes.GUILD_TEXT,
                name: t,
                permission_overwrites: []
            };
            null != n && (a.parent_id = n), null != r && (a.topic = r);
            let o = await i.HTTP.post({
                url: T.Endpoints.GUILD_CHANNELS(e),
                body: a,
                oldFormErrors: !0
            });
            return s.default.checkGuildTemplateDirty(e), o
        }
    }
}