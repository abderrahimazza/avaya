//#region DECLARATIONS
const webchatutils_version="2.3.10";
const debug=true;
// Detect DEV-STAGING-PROD to load the relevant Assets
let env = "prod";
const dev_url_substrings = ["onecare-staging","-nonprod","www-dev","hpsmdev"];
for (let i=0;i<dev_url_substrings.length;i++){
  if (location.hostname.indexOf(dev_url_substrings[i])>-1) {
    env = "dev";
    break;
  }
}
const staging_url_substrings = ["salescms","www-staging","csb.app","supportbetasite-stg","download-stg"];
for (let i=0;i<staging_url_substrings.length;i++){
  if (location.hostname.indexOf(staging_url_substrings[i])>-1) {
    env = "staging";
    break;
  }
}
if (debug) console.log('Webchatutils started using ' + env + ' config');
let base_url;
switch (env) {
  case "dev":
    base_url = "https://www-dev.avaya.com";
    break;
  case "staging":
    base_url = "https://www-staging.avaya.com";
    break;
  case "prod":
    base_url = "https://www.avaya.com";
    break;
}

// Define Constants
const adaptivecard_language_json = {"_plugin":{"type":"adaptivecards","payload":{"$schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.3","body":[{"type":"ColumnSet","columns":[{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_en.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"English","data":{"say":"**can we speak English**"}}]}]},{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_he.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"עִברִית","data":{"say":"**can we speak Hebrew**"}}]}]}]},{"type":"ColumnSet","columns":[{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_ar.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"عربى","data":{"say":"**can we speak Arabic**"}}]}]},{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_hi.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"हिन्दी","data":{"say":"**can we speak Hindi**"}}]}]}]},{"type":"ColumnSet","columns":[{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_zh.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"中国人","data":{"say":"**can we speak Chinese**"}}]}]},{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_ja.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"日本","data":{"say":"**can we speak Japanese**"}}]}]}]},{"type":"ColumnSet","columns":[{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_nl.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"Nederlands","data":{"say":"**can we speak Dutch**"}}]}]},{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_pt.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"Português","data":{"say":"**can we speak Portuguese**"}}]}]}]},{"type":"ColumnSet","columns":[{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_fr.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"Français","data":{"say":"**can we speak French**"}}]}]},{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_ru.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"русский","data":{"say":"**can we speak Russian**"}}]}]}]},{"type":"ColumnSet","columns":[{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_de.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"Deutsch","data":{"say":"**can we speak German**"}}]}]},{"type":"Column","width":"40px","items":[{"type":"Image","url":"https://www.avaya.com/static/webchat/common/assets/avatars/avaya_bot_icon_es.png"}]},{"type":"Column","verticalContentAlignment":"Center","width":"100px","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"Español","data":{"say":"**can we speak Spanish**"}}]}]}]}]}}};
let url_white_list;
let default_endpoint;
const conv_idle_timeout = 300000;
const DEFAULT_WEBCHAT_TITLE = "Avaya Bot";

const SEND_OBJECT_METHOD = {
  UPDATE_CONTEXT_THROUGH_TRANSFORMER_API : "api",
  UPDATE_CONTEXT_THROUGH_RULE_INTENT : "intent",
  UPDATE_CONTEXT_THROUGH_NEXT_INPUT : "input",
  DO_NOT_SEND : "do_not_send",
  AS_IS: "as_is"
}

const WEBCHAT_STATE = {
  WIDGET_VISIBILITY: {
    UNDEFINED: "undefined",
    SHOWN: "shown",
    HIDDEN: "hidden"
  },
  WIDGET_SIZE: {
    UNDEFINED: "undefined",
    OPENED: "opened",
    CLOSED: "closed"
  },
  SESSION_TYPE: {
    UNDEFINED: "undefined",
    NEW: "new",
    RESUMED: "resumed"
  },
  CONVERSATION_STATE: {
    UNDEFINED: "undefined",
    NOT_STARTED: "not_started",
    IN_PROGRESS: "in_progress",
    IDLE: "idle",
    DO_NOT_DISTURB: "do_not_disturb"
  },
  CHATTING_WITH: {
    UNDEFINED: "undefined",
    BOT: "bot",
    LIVE_AGENT: "live_agent"
  },
  CONNECTION_STATE: {
    UP: true,
    DOWN: false
  },
  LAST_USER_ACTION: {
    UNDEFINED: "undefined",
    NAVIGATED: "navigated",
    OPENED_WEBCHAT: "opened_webchat",
    CLOSED_WEBCHAT: "closed_webchat",
    SENT_MESSAGE: "sent_message"
  },
}

let locale = {"navigator":"en-US","url":"en","conversation":"en"};

// Initialize wc object
const wc_initial = {
  session_id: "undefined",
  page_name: "undefined",
  hosting_url: "undefined",
  locale,
  endpoint: "undefined",
  title: DEFAULT_WEBCHAT_TITLE,
  engagement_message: "",
  engagement_quick_replies: [],
  widget_visibility: WEBCHAT_STATE.WIDGET_VISIBILITY.UNDEFINED,
  widget_size: WEBCHAT_STATE.WIDGET_SIZE.UNDEFINED,
  session_type: WEBCHAT_STATE.SESSION_TYPE.UNDEFINED,
  conversation_state: WEBCHAT_STATE.SESSION_TYPE.UNDEFINED,
  chatting_with: WEBCHAT_STATE.CHATTING_WITH.BOT,
  connection_state: WEBCHAT_STATE.CONNECTION_STATE.DOWN,
  last_user_action: WEBCHAT_STATE.LAST_USER_ACTION.UNDEFINED,
  user_message_count: 0,
  last_user_message_timestamp: 0,
  buffered_context:
  {
    api: {},
    input: {},
    intent: {}
  },
};

let wc = {};
let short_URLToken = "undefined";
let channel="undefined";
let userId = "undefined";
let save_wc = true;
let webchat_auto_message = false;

//#endregion DECLARATIONS

//#region WEBCHAT MAIN

const initializeWebchat = async (webchat_params) => {
  
  getChannel(webchat_params.channel);

  // Load webchat plugins
  await loadWebchatPlugins('adaptivecards.webchat-plugin.js');
  await loadWebchatPlugins('dialog-language-selection.webchat-plugin.js');
  if (channel=='SupportSite')  await loadWebchatPlugins('push-notification-plugin.js');
  
  getUserId(webchat_params.userId);

  // If enableUnreadMessagePreview is not specified, set to true
  let enableUnreadMessagePreview = (webchat_params.enableUnreadMessagePreview) ? (webchat_params.enableUnreadMessagePreview) : true;

  // Read the URL of the page being visited
  let hosting_url = window.location.href;
  updateLocaleFromUrlAndBrowser(hosting_url);
  let page_name = "undefined";
  // Endpoint Override for Testing purposes
  /*
  if (hosting_url.indexOf('www-staging.avaya.com')>-1) {
    wc.endpoint = "https://aocflow-dev-endpoint.avaya.com/815afefb05a8aafb310756e4abb6cf047f189d0a16d56938c697868538f6a702";
    if (debug) console.log('redirecting webchat config file to ' + wc.endpoint);
  }
  */
  
  let endpoint = webchat_params.endpoint;
  let title = DEFAULT_WEBCHAT_TITLE;
  
  // If webchat must interact with multiple agents or needs to be dynamic (show/hide based on user navigation etc..)
  // a JSON config file can be provided as the endpoint instead of an static endpoint exposed by OneCloud Flow
  if (endpoint.indexOf('_config.json')>-1) {
    // Retrieve the JSON config file
    let config_json = await fetchJson(endpoint);
    default_endpoint = config_json.default_endpoint;
    url_white_list = config_json.url_white_list;
    let config_found = false;
    for (let i = 0; i < url_white_list.length; i++) {
      if (hosting_url.indexOf(url_white_list[i].substring)>-1) {
        config_found = true;
        endpoint = url_white_list[i].endpoint;
        page_name = url_white_list[i].name;
        if (url_white_list[i].webchat_title) title = url_white_list[i].webchat_title;
        if (url_white_list[i].hide) {
          webchat_params.start_hidden = true;
        } else {
          webchat_params.start_hidden = false;
        }
        break;
      }
      if (!config_found) {
        endpoint = default_endpoint;
      }
    }
  }
    
  short_URLToken = endpoint.substr(endpoint.length - 5);
  getSession(60);
  
  // If Alpha Collector AIFlow Agent - Set userId to one-time-code passed as the alpha URL parameter and create new session
  if (page_name=='alpha_collector') {
    const urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get('alpha');
    getSession(0);
  }
  
  if (debug) console.log('Initializing Webchat with endpoint: ' + endpoint + ' and userId: ' + userId);

  initWebchat(
    // Tell Webchat where to  connect
    endpoint,
    {
      userId,
      sessionId: wc[short_URLToken].session_id,
      channel,
      forceWebsockets: true,
      settings: {
        disableBranding: true,
        dynamicImageAspectRatio: false,
        colorScheme: "#DA291C",
        enableUnreadMessagePreview,
        headerLogoUrl:
          base_url + "/static/webchat/common/assets/avaya_bot_icon_darker_v2.png",
        agentAvatarUrl:
          base_url + "/static/webchat/common/assets/avaya_bot_icon_v2.png"
      }
    },
    (webchat) => {
      // Create a listener to websocket connection state changes
      // This will send Objects that might have been buffered
      // before the Webchat session was initiated
      // due to user first navigating to places where webchat is not showing
      webchat.store.subscribe(socketConStateChange);

      // The below function monitors events coming from the WebChat Application
      // These events can be used to trigger functions locally on the web page/browse
      webchat.registerAnalyticsService((event) => {
        // if (debug) console.log("Analytics Service received event: " + JSON.stringify(event));
        let wc_changed = false;
        switch (event.type) {
          case "webchat/open":
            // User opened webchat

            // If user was in Live Chat
            if (wc[short_URLToken].chatting_with == WEBCHAT_STATE.CHATTING_WITH.LIVE_AGENT) {
              // Let the Agent know user opened Webchat Widget
              webchat.sendMessage('',{"webchat_widget": {"event":"webchat_opened"}});
            }            

            // Disable AutoComplete on Input field
            setTimeout(() => {
              const webchatMessageInput = document.getElementById('webchatInputMessageInputInTextMode');
              if (webchatMessageInput) {
                webchatMessageInput.autocomplete = 'off';
                webchatMessageInput.autofill = 'off';
              }
            }, 200);
        
            wc[short_URLToken].widget_size = WEBCHAT_STATE.WIDGET_SIZE.OPENED;
            wc_changed = true;
            break;
          case "webchat/close":
            // User closed webchat

            // If user was in Live Chat
            if (wc[short_URLToken].chatting_with == WEBCHAT_STATE.CHATTING_WITH.LIVE_AGENT) {
              // Let the Agent know user closed Webchat Widget
              webchat.sendMessage('',{"webchat_widget": {"event":"webchat_closed"}});
            }            

            wc[short_URLToken].widget_size = WEBCHAT_STATE.WIDGET_SIZE.CLOSED;
            wc_changed = true;
            break;
          case "webchat/outgoing-message":
            if (event.payload.source =="user" && event.payload.text.length>0) {
              // User sent a message
              if (wc[short_URLToken].conversation_state!=WEBCHAT_STATE.CONVERSATION_STATE.DO_NOT_DISTURB) wc[short_URLToken].conversation_state = WEBCHAT_STATE.CONVERSATION_STATE.IN_PROGRESS;
              if (webchat_auto_message) {
                webchat_auto_message = false;
              } else {
                wc[short_URLToken].last_user_action = WEBCHAT_STATE.LAST_USER_ACTION.SENT_MESSAGE;
                wc[short_URLToken].user_message_count = ++wc[short_URLToken].user_message_count;
                wc[short_URLToken].last_user_message_timestamp = new Date().getTime();
              }
              wc_changed = true;

              // Catch Download Transcript Postback sent from Persistent Menu
              // This outgoing message should be trapped by the Endpoint Input Transformer
              // To avoid interfering with the flow conversation
              if (event.payload.text == "DOWNLOAD_TRANSCRIPT") downloadTranscript();

              // Catch RESET Conversation sent from Persistent Menu
              // In case Webchat is lost in the flow conversation
              // Restart a new conversation
              if (event.payload.text == "RESET_WEBCHAT") {
                save_wc = false;
                localStorage.clear();
                location.reload(true); // Hard reload clearing cache
              }

              // Switch Language Persistent Menu
              if (event.payload.text == "SWITCH_LANGUAGE") {
                setTimeout(() => {
                  webchat.sendMessage('',adaptivecard_language_json);
                }, 200);
              }
            }
            break;
          case "webchat/incoming-message":
            if (wc[short_URLToken].conversation_state!=WEBCHAT_STATE.CONVERSATION_STATE.DO_NOT_DISTURB) wc[short_URLToken].conversation_state = WEBCHAT_STATE.CONVERSATION_STATE.IN_PROGRESS;
            wc_changed = true;
            // Show-Hide the WebChat Widget
            if (event.payload.data?.setWebchatVisible !== undefined) {
              const isWebchatVisible = event.payload.data.setWebchatVisible;
              if (isWebchatVisible) {
                document.body.classList.remove("webchat-hidden");
                wc[short_URLToken].widget_visibility = WEBCHAT_STATE.WIDGET_VISIBILITY.SHOWN;
              } else {
                document.body.classList.add("webchat-hidden");
                wc[short_URLToken].widget_visibility = WEBCHAT_STATE.WIDGET_VISIBILITY.HIDDEN;
              }
            }
            // Minimize/Maximize the WebChat Widget
            if (event.payload.data?.setWebchatMaximized !== undefined) {
              const maximizeWebchat = event.payload.data.setWebchatMaximized;
              if (maximizeWebchat) {
                webchat.open();
              } else {
                webchat.close();
              }
            }
            // Set conversation locale
            if (event.payload.data?.set_conversation_locale !== undefined) {
              locale.conversation = event.payload.data?.set_conversation_locale;
              wc[short_URLToken].locale = locale;
              wc_changed = true;
            }

            // Clear messages
            if (event.payload.data?.clearWebchat !== undefined) {
              if (event.payload.data.clearWebchat == true) webchat.store.getState().messages = [];
            }
            // Clear Unseen messages
            if (event.payload.data?.clearUnseenMessages !== undefined) {
              let delay = event.payload.data.clearUnseenMessages;
              if (typeof(delay) == 'number' && delay>=0 && delay < 30) setTimeout(clearUnseenMessages,delay * 1000);;
            }
            // Download Chat Transcript
            if (event.payload.data?.downloadTranscript !== undefined) {
              downloadTranscript();
            }
            // Trigger event for Google Tag Manager
            if (event.payload.data?.triggerGoogleTag !== undefined) {
              triggerGoogleTag(event.payload.data.triggerGoogleTag);
            }
            // Read a cookie
            if (event.payload.data?.readCookie !== undefined) {
              let cookie_name = event.payload.data.readCookie;
              let cookie_value = getCookieVal(cookie_name);
              if (debug) console.log('Read cookie: ' + cookie_name + ' with value ' + cookie_value);
              let cookie_obj = {};
              Object.defineProperty(cookie_obj,"cookie_" + cookie_name,{"value": cookie_value, "enumerable": true });
              updateContext(cookie_obj,SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_TRANSFORMER_API);
            }
            // Save to LocalStorage
            if (event.payload.data?.localStorageSetItem !== undefined) {
              window.localStorage.setItem(event.payload.data.localStorageSet.key,event.payload.data.localStorageSet.value);
            }
            // Update WebChat Widget Title
            if (event.payload.data?.webchat_title !== undefined) {
              // Update the webchat widget Title
              webchat.updateSettings({title: event.payload.data.webchat_title});
            }
            // Open Page
            if (event.payload.data?.open_url?.url !== undefined) {
              const target = (event.payload.data?.open_url?.target !== undefined) ? event.payload.data.open_url.target : '_blank';
              window.open(event.payload.data.open_url.url,target);
            }
            // Live Chat
            // Started
            if (event.payload.data?.live_chat_started !== undefined) {
              wc[short_URLToken].chatting_with = WEBCHAT_STATE.CHATTING_WITH.LIVE_AGENT;
              wc[short_URLToken].conversation_state = WEBCHAT_STATE.CONVERSATION_STATE.DO_NOT_DISTURB;
              wc_changed = true;
              // Update the webchat widget Title
              webchat.updateSettings({title: "Live Agent"});
            }
            // ended (resumes Webchat Signaling)
            if (event.payload.data?.live_chat_ended !== undefined) {
              wc[short_URLToken].chatting_with = WEBCHAT_STATE.CHATTING_WITH.BOT;
              wc[short_URLToken].conversation_state = WEBCHAT_STATE.CONVERSATION_STATE.IN_PROGRESS;
              wc_changed = true;
              // Update the webchat widget Title
              webchat.updateSettings({title: wc[short_URLToken].title});
            }
            break;
        }
        if (wc_changed) {
          if (debug) console.log('Saving wc to local storage - registerAnalyticsService');
          save_wc_to_localStorage();
        }
      });

      // Export functions so they can be used by the Single Page App Code
      window.webchat = webchat;

    }
  );

  // Show/Hide Webchat
  if (webchat_params.start_hidden) {
    document.body.classList.add("webchat-hidden");
    wc[short_URLToken].widget_visibility = WEBCHAT_STATE.WIDGET_VISIBILITY.HIDDEN;
  } else {
    document.body.classList.remove("webchat-hidden");
    wc[short_URLToken].widget_visibility = WEBCHAT_STATE.WIDGET_VISIBILITY.SHOWN;
  }

  // Update endpoint in Webchat State
  wc[short_URLToken].endpoint = endpoint;
  wc[short_URLToken].title = title;
  wc[short_URLToken].hosting_url = hosting_url;
  wc[short_URLToken].locale = locale;
  
  // Create a listener that will execute in case user (accidentally) closes their browser
  window.addEventListener('beforeunload', async function (event) {
    // Save conversation
    // only if the wc object exists in local storage to prevent recreating
    // a corrupted wc object that the user might have manually deleted from local storage
    if (window.localStorage.getItem('wc')) {
      let currentState = await webchat.store.getState();
      wc[short_URLToken].messages = JSON.parse(JSON.stringify(currentState.messages));
      save_wc_to_localStorage();
    }

    // If user was in Live Chat
    if (wc[short_URLToken].chatting_with == WEBCHAT_STATE.CHATTING_WITH.LIVE_AGENT) {
      // Let the Agent know user closed their browser
      webchat.sendMessage('',{"webchat_widget": {"event":"page_closed"}});
    }
  })
  
  // In case the session was resumed
  if (wc[short_URLToken].session_type == WEBCHAT_STATE.SESSION_TYPE.RESUMED) {
    // try to recover messages from localStorage
    await restoreConversation();
    
    // if user was in Live Chat before accidentally closing their browser (tab), let live Agent know user came back
    if (wc[short_URLToken].chatting_with == WEBCHAT_STATE.CHATTING_WITH.LIVE_AGENT) {  
      webchat.sendMessage('',{"webchat_widget": {"event":"page_refreshed"}});
    }

    // In case user navigated to another page, send it to the flow
    updateContext({hosting_url,locale},SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_NEXT_INPUT);
  }

  // Initiate the conversation for Agents that require it
  
  // www.avaya.com and Eloqua pages
  if (channel=="DotCom" || channel=="Eloqua") {
    if (wc[short_URLToken].session_type == WEBCHAT_STATE.SESSION_TYPE.NEW) {
      // If new session - collect Kickfire data before initiating the conversation and pass to flow
      const ga_userid = getCookieVal('ruid');
      const ga_cid = getCookieVal('_ga');
      const timezone = {
        "name": Intl.DateTimeFormat().resolvedOptions().timeZone,
        "offset": new Date().getTimezoneOffset()
      }
      fetch("https://api.kickfire.com/gip")
      .then((response) => {
        if (!response.ok) {
          throw new Error('/gip response was not OK');
        }
        return response.json();
      })
      .then((data) => fetch("https://api.kickfire.com/v3/company:(all)?ip=" + data + "&key=93790d7fa22fee26"))
      .then((response) => {
        if (!response.ok) {
          throw new Error('/company response was not OK');
        }  
        return response.json();
      })
      .then((kickfire) => {
        // updateContext({"kickfire":data},SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_NEXT_INPUT)
        webchat_auto_message = true;
        webchat.sendMessage("Hi!",{hosting_url,ga_userid,ga_cid,timezone, locale,kickfire,webchatutils_version});
      })
      .catch(error => {
            webchat_auto_message = true;
            webchat.sendMessage("Hi!",{hosting_url,ga_userid,locale,webchatutils_version});
            console.info('Kickfire data could not be fetched:' + error + '. Starting the conversation without it!');
      });
    } else {
      // If session is resumed, send Engagement message only if
      // - switched to another AIFlow agent (already addressed by getSession which sets session_type=NEW)
      // - user was not in Live Chat (DO_NOT_DISTURB) and user sent no message or sent a message more than 30 seconds ago
      const now_timestamp = new Date().getTime();
      const engagement_timeout_ms = 30000;
      if (wc[short_URLToken].conversation_state!=WEBCHAT_STATE.CONVERSATION_STATE.DO_NOT_DISTURB && wc[short_URLToken].last_user_message_timestamp < (now_timestamp - engagement_timeout_ms)) {
        if (wc[short_URLToken].user_message_count>0) {
          // User already sent messages. We need to restart the conversation to escape any yes/no question that might interfere with the engagement message
          webchat_auto_message = true;
          webchat.sendMessage('',{"conversation_reset": true});
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        webchat_auto_message = true;
        webchat.sendMessage("Hi!",{hosting_url,locale});
      }
    }
  }

  // Avaya learning
  if (channel=="AvayaLearning") {
    if (wc[short_URLToken].session_type == WEBCHAT_STATE.SESSION_TYPE.NEW) {
      displayEngagementMessage("Hi there! Want to chat?",[{"button":"Chat with a Live Agent","say":"transfer me to an agent"}]);
    }
  }

  // Alpha Collector Agent (OneCare Portal)
  if (page_name=='alpha_collector') {
    webchat.sendMessage('Hi');
  }

  // Save wc object to local storage
  if (debug) console.log('Saving wc to local storage - initializeWebchat');
  save_wc_to_localStorage();
  
};

const sendObjectToChatBot = async (obj) => {
  // this function is exported to allow the hosting web page to
  // 1. update the webchat widget (show/hide, maximize, switch to other agent etc...)
  // 2. send a json object to the Agent EndPoint either
  //   a. in-band (AS-IS) using webchat.sendMessage
  //   b. out-of-band using updateContext()

  // Initialize local variables
  let endpoint = "undefined";
  let page_name = "undefined";
  let title = DEFAULT_WEBCHAT_TITLE;
  let widget_visibility = WEBCHAT_STATE.WIDGET_VISIBILITY.UNDEFINED;
  let widget_size = WEBCHAT_STATE.WIDGET_SIZE.UNDEFINED;
  let engagement_message = "";
  let engagement_quick_replies = [];
  let last_user_action =  WEBCHAT_STATE.LAST_USER_ACTION.UNDEFINED;
  let hosting_url = "undefined";
  let conversation_state = WEBCHAT_STATE.CONVERSATION_STATE.UNDEFINED;
  let update_webchat_widget = false;
  let send_object_method = SEND_OBJECT_METHOD.AS_IS;

  // wait until the webchat module was properly loaded - need 3 seconds to allow websockets to establish connection
  while(!window.hasOwnProperty("webchat")) await new Promise(resolve => setTimeout(resolve, 3000));

  // Check if conversation is idle
  const current_timestamp = new Date().getTime();
  if (wc[short_URLToken].last_user_message_timestamp == 0 || (current_timestamp - wc[short_URLToken].last_user_message_timestamp > conv_idle_timeout)) conversation_state = WEBCHAT_STATE.CONVERSATION_STATE.IDLE; 

  // ==========================================================================
  // Step 1 - Detect if object stipulates how it should be sent to the endpoint
  // ==========================================================================
  switch (obj.send_object_method) {
    // if send_object_method was provided, check that it matches a valid value
    case SEND_OBJECT_METHOD.AS_IS:
    case SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_NEXT_INPUT:
    case SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_TRANSFORMER_API:
    case SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_RULE_INTENT:
      send_object_method = obj.send_object_method;
      break;
    default:
      // If not default to send as-is
      send_object_method = SEND_OBJECT_METHOD.AS_IS;
  }

  // ==================================
  // Step 2 - Special Object Processing
  // ==================================

  // OneCare User submitted a form with the option to request live chat about this ticket
  if (obj.live_chat) {
    update_webchat_widget = true;
    send_object_method = SEND_OBJECT_METHOD.AS_IS; // input.data.live_chat should trigger a Rule-Based Intent
    conversation_state = WEBCHAT_STATE.CONVERSATION_STATE.DO_NOT_DISTURB; // prevent future webchat updates while in live chat
    widget_visibility = WEBCHAT_STATE.WIDGET_VISIBILITY.SHOWN; // Display Webchat widget
    widget_size = WEBCHAT_STATE.WIDGET_SIZE.OPENED; // Maximize Webchat widget
    engagement_message = "";
    page_name = 'form_submit_live_chat';
    // If user did not yet navigate to a page where WebChat shows, simply use the default AI Flow endpoint
    if (wc[short_URLToken].endpoint == "undefined") endpoint = default_endpoint;

    // In case 'user' object sits in buffered_context, append it
    // as in case user is on a new session while triggering this event
    // socketConStateChange sending buffered_context triggers too late
    // preventing the user from being identified by the flow when using the OneCare "request live chat about this ticket" option
    if (wc[short_URLToken].buffered_context.input) {
      obj.webchat_context = JSON.parse(JSON.stringify(wc[short_URLToken].buffered_context.input));
      // Flush buffered_context to avoid unecessary traffic to the flow
      wc[short_URLToken].buffered_context.input = {};
    }
  }

  // User Navigated to other page/SPA asset
  if (obj.hosting_url) {
    // Ignore if CONVERSATION_STATE.DO_NOT_DISTURB 
    if (wc[short_URLToken].conversation_state!=WEBCHAT_STATE.CONVERSATION_STATE.DO_NOT_DISTURB) {
      update_webchat_widget = true;
      send_object_method = SEND_OBJECT_METHOD.DO_NOT_SEND;
      // Check if user navigated to a different locale
      last_user_action = WEBCHAT_STATE.LAST_USER_ACTION.NAVIGATED;
      // since we work based on a white list, initially assume Webchat should not show and should be minimized
      widget_visibility = WEBCHAT_STATE.WIDGET_VISIBILITY.HIDDEN;
      widget_size = WEBCHAT_STATE.WIDGET_SIZE.CLOSED;
      hosting_url = obj.hosting_url;
      updateLocaleFromUrlAndBrowser(hosting_url);
      // Check if new URL is on our white list and if found, store attributes in webchat object
      for (let i = 0; i < url_white_list.length; i++) {
        if (hosting_url.indexOf(url_white_list[i].substring)>-1) {
          endpoint = url_white_list[i].endpoint;
          if (url_white_list[i].webchat_title) title = url_white_list[i].webchat_title;
          page_name = url_white_list[i].name;
          if (url_white_list[i].hide) {
            widget_visibility = WEBCHAT_STATE.WIDGET_VISIBILITY.HIDDEN;
          } else {
            widget_visibility = WEBCHAT_STATE.WIDGET_VISIBILITY.SHOWN;
          }
          if (url_white_list[i].maximize) {
            widget_size = WEBCHAT_STATE.WIDGET_SIZE.OPENED;
          } else {
            widget_size = WEBCHAT_STATE.WIDGET_SIZE.CLOSED;
          }
          let text = url_white_list[i].text.default;
          if (url_white_list[i].text[locale.conversation]) text = url_white_list[i].text[locale.conversation];
          engagement_message = text.engagement_message;
          if (text.engagement_quick_replies && text.engagement_quick_replies.length>0) engagement_quick_replies = text.engagement_quick_replies;
          break;
        }
      }
    }
  }

  // OneCare Portal passed user and sso session data
  if (obj.userInfo || obj.smsession) {
    update_webchat_widget = false;
    send_object_method = SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_NEXT_INPUT;
    // let's grab user data and store it locally for future reference
    if (!wc.user) wc.user = {};
    if (obj.smsession) wc.user.sso_session_id = obj.smsession;
    if (obj.userInfo) wc.user.userInfo = obj.userInfo;
    // if hosting_url was not passed in the object, then let's grab location.href
    if (hosting_url=="undefined") hosting_url = window.location.href;
    if (!locale) updateLocaleFromUrlAndBrowser(hosting_url);
    obj = {"user": wc.user,hosting_url,locale,webchatutils_version};
  }
  
  // =================================================
  // Step 3 - Process the updated webchat widget state
  // =================================================

  if (update_webchat_widget && wc[short_URLToken].conversation_state!=WEBCHAT_STATE.CONVERSATION_STATE.DO_NOT_DISTURB) {

    // Show/Hide the Webchat Widget
    if (widget_visibility != wc[short_URLToken].widget_visibility && widget_visibility != "undefined") {
      switch(widget_visibility) {
        case WEBCHAT_STATE.WIDGET_VISIBILITY.SHOWN:
          // Show the Webchat Widget
          document.body.classList.remove("webchat-hidden");
          break;
        case WEBCHAT_STATE.WIDGET_VISIBILITY.HIDDEN:
          // Show the Webchat Widget
          document.body.classList.add("webchat-hidden");
          break;
      }
    }

    // Maximize/Minimize the Webchat Widget
    if (widget_size != wc[short_URLToken].widget_size) {
      if (widget_size == WEBCHAT_STATE.WIDGET_SIZE.OPENED) {
        webchat.open();          
      } else if (widget_size == WEBCHAT_STATE.WIDGET_SIZE.CLOSED){
        webchat.close();
      }
    }

    // Switch to another AI-Flow Agent
    if (endpoint != wc[short_URLToken].endpoint && endpoint != "undefined") {
      if (debug) console.log('Switching to agent referenced on page ' + page_name);
      await switchToAgent(endpoint,title);
    }

    // Handle user navigating to a different page/asset
    // Only if WebChat is visible to save unecessary websocket traffic between webchat and the flow
    if ((page_name != wc[short_URLToken].page_name || hosting_url != wc[short_URLToken].hosting_url) && widget_visibility == WEBCHAT_STATE.WIDGET_VISIBILITY.SHOWN) {
      
      // Notify the Digital Agent that user navigated to a different page
      updateContext({page: page_name,hosting_url, locale, user: wc.user, webchatutils_version},SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_NEXT_INPUT);

      // Display Engagement Messages if applicable
      
      // RESET ENTRYPOINT in FLOW
      // In order for Engagment Messages to be properly handled by the flow
      // It might be necessary to reset the flow entrypoint
      // as it might be left in some flow expecting another answer due to a previous conversation
      // This is achieved by triggering a rule based intent which should be created in the Agent

      // If user had typed messages but did not type any message in the past 5 minutes
      if (wc[short_URLToken].last_user_message_timestamp > 0 && conversation_state == WEBCHAT_STATE.CONVERSATION_STATE.IDLE) {
        if (debug) console.log('reseting flow entrypoint through conversation_reset due to no recent messages');
        wc[short_URLToken].messages = [];
        await restoreConversation();
        webchat.sendMessage('',{"conversation_reset": true});
      }

      // If session was resumed and user did not type any message yet
      if (wc[short_URLToken].last_user_message_timestamp == 0 && wc[short_URLToken].session_type == WEBCHAT_STATE.SESSION_TYPE.RESUMED && conversation_state != WEBCHAT_STATE.CONVERSATION_STATE.DO_NOT_DISTURB) {
        if (debug) console.log('reseting flow entrypoint through conversation_reset due to no message yet on resumed session');
        wc[short_URLToken].messages = [];
        await restoreConversation();
        webchat.sendMessage('',{"conversation_reset": true});
      }

      // Display Engagement Message (if different from the last engagement message shown)
      if (engagement_message.length > 0 && (engagement_message != wc[short_URLToken].engagement_message)) {
        displayEngagementMessage(engagement_message,engagement_quick_replies);
      }
    }
  }
    
  // ========================================
  // Step 4 - Send the Object to the endpoint
  // ========================================
  if (send_object_method==SEND_OBJECT_METHOD.DO_NOT_SEND) {
    // Do Nothing
  } else if (send_object_method==SEND_OBJECT_METHOD.AS_IS && wc[short_URLToken].conversation_state!=WEBCHAT_STATE.CONVERSATION_STATE.DO_NOT_DISTURB) {
    webchat.sendMessage('',obj);
  } else {
    updateContext(obj,send_object_method);
  }

  // =============================
  // Step 5 - Update WebChat State
  // =============================
  if (last_user_action != WEBCHAT_STATE.LAST_USER_ACTION.UNDEFINED) wc[short_URLToken].last_user_action = last_user_action;
  if (hosting_url != "undefined") wc[short_URLToken].hosting_url = hosting_url;
  if (locale) wc[short_URLToken].locale = locale;
  if (widget_visibility != WEBCHAT_STATE.WIDGET_VISIBILITY.UNDEFINED) wc[short_URLToken].widget_visibility = widget_visibility;
  if (endpoint != "undefined") wc[short_URLToken].endpoint = endpoint;
  wc[short_URLToken].title = title;
  if (page_name != "undefined") wc[short_URLToken].page_name = page_name;
  if (widget_size != WEBCHAT_STATE.WIDGET_SIZE.UNDEFINED) wc[short_URLToken].widget_size = widget_size;
  if (engagement_message != "undefined") wc[short_URLToken].engagement_message = engagement_message;
  if (engagement_quick_replies != "undefined") wc[short_URLToken].engagement_quick_replies = engagement_quick_replies;
  if (conversation_state != WEBCHAT_STATE.CONVERSATION_STATE.UNDEFINED) wc[short_URLToken].conversation_state = conversation_state;
  save_wc_to_localStorage();
  
};

const switchToAgent = async (endpoint, title) => {
  if (debug) console.log('Switching to endpoint: ' + endpoint);  

  let currentState = await webchat.store.getState();
  // Save messages
  wc[short_URLToken].messages = JSON.parse(JSON.stringify(currentState.messages));
  if (debug) console.log('Saving wc to local storage - switchToAgent');
  save_wc_to_localStorage();

  // Create or recover session for this EndPoint
  short_URLToken = endpoint.substr(endpoint.length - 5);
  getSession(60);
  
  // Update the webchat widget Title
  await webchat.updateSettings({title});
  
  // Update WebChat session ID and URL Token
  // HEADS UP : webchat.client is considered an internal API!
  await webchat.client.disconnect();
  webchat.client.socketOptions.sessionId = wc[short_URLToken].session_id;
  webchat.client.socketURLToken = endpoint.split("/")[endpoint.split("/").length-1];
  await webchat.client.connect();
  
  // In case the session was resumed, try to recover messages from localStorage
  if (wc[short_URLToken].session_type == WEBCHAT_STATE.SESSION_TYPE.RESUMED) await restoreConversation();
};

//#endregion WEBCHAT MAIN

//#region WEBCHAT UTILITIES

function clearUnseenMessages() {
  webchat.store.dispatch({type: "CLEAR_UNSEEN_MESSAGES"});
}

const displayEngagementMessage = (engagement_message,engagement_quick_replies) => {
  let engagement_text = "";
  let engagement_data = {};
  if (engagement_quick_replies && engagement_quick_replies.length>0) {
    // engagement message with quick replies
    let quick_replies_default = [];
    let quick_replies_webchat = [];
    engagement_quick_replies.forEach((reply) => {
      quick_replies_default.push({
        "contentType": "postback",
        "payload": reply.say,
        "title": reply.button
      });
      quick_replies_webchat.push({
        "content_type": "text",
        "payload": reply.say,
        "title": reply.button
      });
    });
    engagement_data = {"_cognigy": {
      "_default": {"_quickReplies": {
        "quickReplies": quick_replies_default,
        "text": engagement_message,
        "type": "quick_replies"
      }},
      "_webchat": {"message": {
        "quick_replies": quick_replies_webchat,
        "text": engagement_message
      }},
    }};
  } else {
    // Simple engagement message
    engagement_text = engagement_message;
  }
  // Display the engagement message
  webchat.store.dispatch({
    type: "RECEIVE_MESSAGE",
    message: {
      source: "bot",
      text: engagement_text,
      data: engagement_data,
      traceId: "asdf" + Math.random()
    }
  });

  // Remove engagement message after 5 seconds
  setTimeout(clearUnseenMessages,5000);

}

const downloadTranscript = () => {
  const now = new Date().toISOString();
  const line = "================================================";
  var transcript = webchat.store
    .getState()
    .messages.filter((message) => !!message.text)
    .map((message) => `${message.source.padEnd(5)}: ${message.text}`)
    .join("\r\n");
  transcript =
    "Avaya Chat Transcript - " +
    now +
    "\r\n" +
    line +
    "\r\n\r\n" +
    transcript;
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(transcript)
  );
  element.setAttribute("download", "transcript.txt");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const generate_sessionId = () => {
  let sessionId = "session-" + short_URLToken + '-' +
  Date.now() +
  String((Math.random() * 1000000000000).toFixed(0).substring(3));
  return sessionId;
}

const getChannel = (mChannel) => {
  
  if (mChannel) {
    channel = mChannel;
  } else {
    let this_page = window.location.href.toLowerCase();
    const urls = [
      {
        substring: "onecare.avaya.com",
        channel: "OneCare"
      },
      {
        substring: "onecare-staging.avaya.com/customercare",
        channel: "OneCare"
      },
      {
        substring: "salescms",
        channel: "OneCare"
      },
      {
        substring: "mkt_lead_gen_dev",
        channel: "DotCom"
      },
      {
        substring: "www.avaya.",
        channel: "DotCom"
      },
      {
        substring: "www-staging.avaya.",
        channel: "DotCom"
      },
      {
        substring: "ccaas.avaya",
        channel: "Eloqua"
      },
      {
        substring: "news.avaya",
        channel: "Eloqua"
      },
      {
        substring: "avaya-learning",
        channel: "AvayaLearning"
      },
      {
        substring: "twlmswb1",
        channel: "AvayaLearning"
      },
      {
        substring: "onecare-staging.avaya.com/support",
        channel: "SupportSite"
      },
      {
        substring: "download.avaya.",
        channel: "SupportSite"
      },
      {
        substring: "download-stg.avaya.",
        channel: "SupportSite"
      },
      {
        substring: "supportbetasite-stg",
        channel: "SupportSite"
      },
      {
        substring: "support.avaya",
        channel: "SupportSite"
      },
      {
        substring: "www-dev.avaya.com:449",
        channel: "SupportSite"
      }
    ]
    for (let i=0;i<urls.length;i++) {
      if (this_page.indexOf(urls[i].substring)>-1) {
        channel = urls[i].channel;
        break;
      }
    }
  }
}

function updateLocaleFromUrlAndBrowser(url) {
  if (!url) url = window.location.href;
  let url_locale = "en";
  const url_locales = [
      {
      substring: "/au/",
      locale: "au"
      },
      {
      substring: "/be/",
      locale: "be"
      },
      {
      substring: "/ca/",
      locale: "ca"
      },
      {
      substring: "/de/",
      locale: "de"
      },
      {
      substring: "/es/",
      locale: "es"
      },
      {
      substring: "/fr/",
      locale: "fr"
      },
      {
      substring: "/ie/",
      locale: "ie"
      },
      {
      substring: "/it/",
      locale: "it"
      },
      {
      substring: "/nl/",
      locale: "nl"
      },
      {
      substring: "/sg/",
      locale: "sg"
      },
      {
      substring: "/uk/",
      locale: "uk"
      },
  ];
  for (let i=0;i<url_locales.length;i++) {
      if (url.indexOf(url_locales[i].substring)>-1) {
          url_locale = url_locales[i].locale;
          break;
      }
  }
  locale.navigator = window.navigator.language;
  locale.url = url_locale;
}

const getSession = (ttl) => {
  if (!ttl) ttl = 60;
  let session_id;
  let wc_str;
  let wc_obj;
  // if LocalStorage is supported...
  if (window.localStorage) {
    // check if a sessionId from a previous visit exists
    wc_str = window.localStorage.getItem("wc");
    if (wc_str) {
      wc_obj = JSON.parse(wc_str);
      if (wc_obj[short_URLToken]) {
        session_id = wc_obj[short_URLToken].session_id;
        if (session_id && session_id != "undefined") {
          // if a previous session took place, ignore it if too old
          const session_timestamp = Number(session_id.substring(14, 27));
          if (session_timestamp + ttl * 60000 < Date.now()) session_id = null;
        }
      }
    }
  }
  if (!session_id) {
    // if no previous session or too old, generate a new sessionId and store in LocalStorage
    session_id = generate_sessionId();
    wc[short_URLToken] = JSON.parse(JSON.stringify(wc_initial));
    wc[short_URLToken].session_id = session_id;
    wc[short_URLToken].session_type = WEBCHAT_STATE.SESSION_TYPE.NEW;
    // Reset live_chat_in_progress in case a live chat session was interrupted
  } else {
    // recover the wc object from local storage
    wc = wc_obj;
    wc[short_URLToken].session_type = WEBCHAT_STATE.SESSION_TYPE.RESUMED;
    // Retri
    locale.conversation = wc[short_URLToken].locale.conversation;
  }
  save_wc_to_localStorage;
}

const getUserId = (user_id) => {
  // retrieves userId and saves to localStorage for reuse across sessions
  const ga_userid = getCookieVal('ruid');
  const wc_userId = window.localStorage.getItem('wc_userId');
  if (user_id) {
    // userId was provided by Web Page, then let's simply use it
    userId = user_id;
  } else if (ga_userid) {
      // if Google Analytics ruid cookie is found, let's use it as userId
      userId = ga_userid;
  } else if (wc_userId) {
      // if webchatutils already generated userId and saved in localStorage
      userId = wc_userId;
  } else {
      // let's generate our own userId
      userId = 'wc-' + Date.now() + '-' + (Math.random() * 10 ** 19).toFixed(0).toString();
  }
  // store in local storage
  window.localStorage.setItem('wc_userId',userId);
}

function getSocketConState(state) {
  return state.connection.connected;
}

function loadWebchatPlugins(plugin_filename) {
  return new Promise(function (resolve) {
    let webchatutils = document.currentScript;
    let plugin_script = document.createElement("script");

    plugin_script.onload = function () {
      resolve();
    };

    plugin_script.setAttribute(
      "src",
      base_url + "/static/webchat/common/js/" + plugin_filename
    );
    document.head.appendChild(plugin_script);

  });
}

const read_wc_from_localStorage = () => {
  wc = JSON.parse(window.localStorage.getItem('wc'));
}

async function restoreConversation() {
  let messages = wc[short_URLToken].messages;
  if (messages) {
    const currentState = await webchat.store.getState();
    currentState.unsseenMessages = [];
    console.log('restoreConversation executed!');
    currentState.messages = messages;
  }
}

const save_wc_to_localStorage = () => {
  if (save_wc) window.localStorage.setItem('wc',JSON.stringify(wc));
}

function socketConStateChange() {
  let previous_connection_state = wc[short_URLToken].connection_state;
  let wc_changed = false;
  wc[short_URLToken].connection_state = getSocketConState(webchat.store.getState());
  if (previous_connection_state !== wc[short_URLToken].connection_state) {
    if (debug) console.log(
      "Webchat connection state changed from " +
        previous_connection_state +
        " to " +
        wc[short_URLToken].connection_state
    );
    // Connection state changed
    if (wc[short_URLToken].connection_state == WEBCHAT_STATE.CONNECTION_STATE.UP) {
      // Connection was established
      if (Object.keys(wc[short_URLToken].buffered_context.api).length > 0) {
        if (debug) console.log('Connection resumed - sending buffered_context.api: ' + JSON.stringify(wc[short_URLToken].buffered_context.api));
        // There is some context that was waiting to be sent
        updateContext(wc[short_URLToken].buffered_context.api,SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_TRANSFORMER_API);
        wc[short_URLToken].buffered_context.api = {};
        wc_changed = true;
      }
      if (Object.keys(wc[short_URLToken].buffered_context.input).length > 0) {
        if (debug) console.log('Connection resumed - sending buffered_context.input: ' + JSON.stringify(wc[short_URLToken].buffered_context.input));
        // There is some context that was waiting to be sent
        updateContext(wc[short_URLToken].buffered_context.input,SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_NEXT_INPUT);
        wc[short_URLToken].buffered_context.input = {};
        wc_changed = true;
      }
      if (Object.keys(wc[short_URLToken].buffered_context.intent).length > 0) {
        if (debug) console.log('Connection resumed - sending buffered_context.intent: ' + JSON.stringify(wc[short_URLToken].buffered_context.intent));
        // There is some context that was waiting to be sent
        updateContext(wc[short_URLToken].buffered_context.intent,SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_RULE_INTENT);
        wc[short_URLToken].buffered_context.intent = {};
        wc_changed = true;
      }
    }
  }
  if (wc_changed) {
    if (debug) console.log('Saving wc to local storage - socketConStateChange');
    save_wc_to_localStorage();
  }
}

const updateContext = (obj, path) => {
  // clear send_object_method
  if (obj.send_object_method) delete obj.send_object_method;
  if (!path) path = SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_TRANSFORMER_API;
  let obj_key;
  switch (path) {
    case SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_TRANSFORMER_API:
      if (wc[short_URLToken].connection_state == WEBCHAT_STATE.CONNECTION_STATE.UP) {
        // sending through API allows the message not to interfere with the conversation flow
        // the data message will be trapped by the Webchat Input Transformer
        // who will detect context_update_api and forward to the context/inject API
        // and not forward to the flow
        if (debug) console.log('updateContext - sending context_update_api : ' + JSON.stringify(obj));
        webchat.sendMessage('',{"context_update_api": obj});
      } else {
        if (debug) console.log('updateContext - buffering context_update_api : ' + JSON.stringify(obj));
        // socket channel is not connected, hence buffer messages
        for (let i=0;i<Object.keys(obj).length;i++) {
          obj_key = Object.keys(obj)[i];
          Object.defineProperty(wc[short_URLToken].buffered_context.api,obj_key,{"value":obj[obj_key],"enumerable": true});
        }
      }
      break;
    case SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_NEXT_INPUT:
      if (wc[short_URLToken].connection_state == WEBCHAT_STATE.CONNECTION_STATE.UP) {
        // sending through API allows the message not to interfere with the conversation flow
        // the data message will be trapped by the Webchat Input Transformer
        // who will detect context_update_next_input and append it to input.data of the next user message
        if (debug) console.log('updateContext - sending context_update_next_input : ' + JSON.stringify(obj));
        webchat.sendMessage('',{"context_update_next_input": obj});
      } else {
        if (debug) console.log('updateContext - buffering context_update_next_input : ' + JSON.stringify(obj));
        // socket channel is not connected, hence buffer messages
        for (let i=0;i<Object.keys(obj).length;i++) {
          obj_key = Object.keys(obj)[i];
          Object.defineProperty(wc[short_URLToken].buffered_context.input,obj_key,{"value":obj[obj_key],"enumerable": true});
        }
      }
      break;
    case SEND_OBJECT_METHOD.UPDATE_CONTEXT_THROUGH_RULE_INTENT:
      if (wc[short_URLToken].connection_state == WEBCHAT_STATE.CONNECTION_STATE.UP) {
        // send as normal message wrapped in context_update object which should be trapped by a Rule-based Intent
        if (debug) console.log('updateContext - sending context_update : ' + JSON.stringify(obj));
        webchat.sendMessage('',{"context_update": obj});
      } else {
        if (debug) console.log('updateContext - buffering context_update : ' + JSON.stringify(obj));
        // socket channel is not connected, hence buffer messages
        for (let i=0;i<Object.keys(obj).length;i++) {
          obj_key = Object.keys(obj)[i];
          Object.defineProperty(wc[short_URLToken].buffered_context.intent,obj_key,{"value":obj[obj_key],"enumerable": true});
        }
      }
      break;
    }
}

//#endregion WEBCHAT UTILITIES

//#region UTILITIES

const fetchJson = async (urlToFile) => {
  const response = await fetch(urlToFile);
  if (!response.ok) {
    if (debug) console.error('Error while fetching webchat config');
  }
  let json = await response.json();
  return json;
};

const getCookieVal = (name) => {
  return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
}

const httpFileExists= (urlToFile) => {
  var xhr = new XMLHttpRequest();
  xhr.open('HEAD',urlToFile,false);
  xhr.send();
  if (xhr.status == "404") {
    return false;
  } else {
    return true;
  }
}

const triggerGoogleTag = (event) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
};

//#endregion UTILITIES

//#region EXPORTS

window.initializeWebchat = initializeWebchat;
window.sendObjectToChatBot = sendObjectToChatBot;
window.getCookieVal = getCookieVal;
window.SEND_OBJECT_METHOD = SEND_OBJECT_METHOD;

//#endregion EXPORTS