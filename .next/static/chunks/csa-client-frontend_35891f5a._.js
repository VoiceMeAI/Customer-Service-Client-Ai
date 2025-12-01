(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatPanel",
    ()=>ChatPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/hand.js [app-client] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Dummy message data
const messages = [
    {
        id: "1",
        content: "Hello! I need help with my hotel booking. I made a reservation for next week but I need to change the dates.",
        sender: "user",
        senderName: "Sarah Johnson",
        timestamp: "10:23 AM"
    },
    {
        id: "2",
        content: "Hello Sarah! I'd be happy to help you with your booking modification. Could you please provide me with your reservation number so I can look up your booking details?",
        sender: "ai",
        senderName: "AI Assistant",
        timestamp: "10:23 AM"
    },
    {
        id: "3",
        content: "Yes, it's RES-2024-78543. I originally booked for December 15-18, but I need to change it to December 20-23.",
        sender: "user",
        senderName: "Sarah Johnson",
        timestamp: "10:24 AM"
    },
    {
        id: "4",
        content: "Thank you for providing your reservation number. I've found your booking for a Deluxe Room at our Downtown location. Let me check the availability for December 20-23...",
        sender: "ai",
        senderName: "AI Assistant",
        timestamp: "10:24 AM"
    },
    {
        id: "5",
        content: "Great news! We have availability for your preferred dates. The Deluxe Room is available from December 20-23. The rate would be $189/night, which is the same as your original booking. Would you like me to proceed with this change?",
        sender: "ai",
        senderName: "AI Assistant",
        timestamp: "10:25 AM"
    },
    {
        id: "6",
        content: "That sounds perfect! But actually, I was wondering if there are any suites available? It's going to be a special occasion.",
        sender: "user",
        senderName: "Sarah Johnson",
        timestamp: "10:26 AM"
    },
    {
        id: "7",
        content: "I understand you're looking for something special! Let me connect you with one of our agents who can discuss our suite options and any special packages we might have available for your occasion.",
        sender: "ai",
        senderName: "AI Assistant",
        timestamp: "10:26 AM",
        isEscalation: true
    },
    {
        id: "8",
        content: "Hi Sarah! I'm John, and I'll be taking over from here. I see you're interested in our suites for a special occasion from December 20-23. We have some wonderful options I'd love to share with you. May I ask what the occasion is? We often have special packages for anniversaries, birthdays, and other celebrations!",
        sender: "staff",
        senderName: "John Doe",
        timestamp: "10:27 AM"
    }
];
const senderConfig = {
    user: {
        align: "right",
        bgColor: "bg-emerald-500 text-white",
        icon: null
    },
    ai: {
        align: "left",
        bgColor: "bg-violet-500/10 text-foreground border border-violet-500/20",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
    },
    staff: {
        align: "left",
        bgColor: "bg-card text-foreground border border-border",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
    }
};
function ChatPanel() {
    _s();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll to bottom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPanel.useEffect": ()=>{
            var _messagesEndRef_current;
            (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["ChatPanel.useEffect"], [
        messages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-gradient-to-b from-muted/30 to-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-3 border-b border-border bg-background/80 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                className: "size-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                        src: "/avatars/sarah.jpg",
                                        alt: "Sarah Johnson"
                                    }, void 0, false, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                        className: "bg-gradient-to-br from-amber-500 to-orange-600 text-white",
                                        children: "SJ"
                                    }, void 0, false, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-sm",
                                        children: "Sarah Johnson"
                                    }, void 0, false, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "size-2 rounded-full bg-emerald-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Online"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Booking #RES-2024-78543"
                                            }, void 0, false, {
                                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "h-8 gap-1.5 text-xs border-amber-500/30 text-amber-600 hover:bg-amber-500/10 hover:text-amber-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    "Add Tag"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "h-8 gap-1.5 text-xs border-rose-500/30 text-rose-600 hover:bg-rose-500/10 hover:text-rose-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    "Mark Urgent"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "default",
                                size: "sm",
                                className: "h-8 gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    "Take Over"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-4 py-4 space-y-4",
                children: [
                    messages.map((msg)=>{
                        const config = senderConfig[msg.sender];
                        const Icon = config.icon;
                        const isUser = msg.sender === "user";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex gap-3 max-w-[80%]", isUser && "ml-auto flex-row-reverse"),
                            children: [
                                !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-8 rounded-full flex items-center justify-center", msg.sender === "ai" ? "bg-gradient-to-br from-violet-500 to-purple-600" : "bg-gradient-to-br from-emerald-500 to-teal-600"),
                                        children: Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "size-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                            lineNumber: 183,
                                            columnNumber: 30
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 175,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-1", isUser && "items-end"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium",
                                                    children: msg.senderName
                                                }, void 0, false, {
                                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-muted-foreground",
                                                    children: msg.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl px-4 py-2.5 text-sm leading-relaxed", config.bgColor, isUser ? "rounded-tr-md" : "rounded-tl-md"),
                                            children: msg.content
                                        }, void 0, false, {
                                            fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        msg.isEscalation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-[10px] text-amber-600 dark:text-amber-400 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"], {
                                                    className: "size-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, this),
                                                "Escalated to human agent"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                            lineNumber: 206,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, msg.id, true, {
                            fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 max-w-[80%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "size-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-white",
                                    children: "SJ"
                                }, void 0, false, {
                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium",
                                        children: "Sarah Johnson"
                                    }, void 0, false, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl rounded-tl-md px-4 py-3 bg-muted",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "size-2 rounded-full bg-muted-foreground/50 animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "size-2 rounded-full bg-muted-foreground/50 animate-bounce",
                                                    style: {
                                                        animationDelay: "0.1s"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "size-2 rounded-full bg-muted-foreground/50 animate-bounce",
                                                    style: {
                                                        animationDelay: "0.2s"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-border bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                        placeholder: "Type your message...",
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value),
                                        className: "min-h-[44px] max-h-32 resize-none pr-20 text-sm",
                                        rows: 1
                                    }, void 0, false, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-2 bottom-2 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "size-7 text-muted-foreground hover:text-foreground",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "size-7 text-muted-foreground hover:text-foreground",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                className: "size-11 shrink-0 bg-emerald-600 hover:bg-emerald-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-muted-foreground mt-2 text-center",
                        children: [
                            "Press ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                className: "px-1 py-0.5 rounded bg-muted text-[9px]",
                                children: "Enter"
                            }, void 0, false, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 278,
                                columnNumber: 17
                            }, this),
                            " to send, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                className: "px-1 py-0.5 rounded bg-muted text-[9px]",
                                children: "Shift + Enter"
                            }, void 0, false, {
                                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                                lineNumber: 278,
                                columnNumber: 95
                            }, this),
                            " for new line"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/csa-client-frontend/src/components/layouts/(dashboard)/chat-panel.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(ChatPanel, "936dpqhBsX+uMd/FyWUdoEC+WxA=");
_c = ChatPanel;
var _c;
__turbopack_context__.k.register(_c, "ChatPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/hand.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Hand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
            key: "1fvzgz"
        }
    ],
    [
        "path",
        {
            d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",
            key: "1kc0my"
        }
    ],
    [
        "path",
        {
            d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",
            key: "10h0bg"
        }
    ],
    [
        "path",
        {
            d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
            key: "1s1gnw"
        }
    ]
];
const Hand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("hand", __iconNode);
;
 //# sourceMappingURL=hand.js.map
}),
"[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/hand.js [app-client] (ecmascript) <export default as Hand>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/hand.js [app-client] (ecmascript)");
}),
"[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Paperclip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
            key: "1miecu"
        }
    ]
];
const Paperclip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("paperclip", __iconNode);
;
 //# sourceMappingURL=paperclip.js.map
}),
"[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Paperclip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript)");
}),
"[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Send
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}),
"[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Smile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 14s1.5 2 4 2 4-2 4-2",
            key: "1y1vjs"
        }
    ],
    [
        "line",
        {
            x1: "9",
            x2: "9.01",
            y1: "9",
            y2: "9",
            key: "yxxnd0"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "15.01",
            y1: "9",
            y2: "9",
            key: "1p4y9e"
        }
    ]
];
const Smile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("smile", __iconNode);
;
 //# sourceMappingURL=smile.js.map
}),
"[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Smile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript)");
}),
"[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
            key: "vktsd0"
        }
    ],
    [
        "circle",
        {
            cx: "7.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "kqv944"
        }
    ]
];
const Tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("tag", __iconNode);
;
 //# sourceMappingURL=tag.js.map
}),
"[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$csa$2d$client$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/csa-client-frontend/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=csa-client-frontend_35891f5a._.js.map