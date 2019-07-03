export const setRefreshToken = token => ({
  type: "SET_REFRESH_TOKEN",
  token,
});

export const setUser = user => ({
  type: "SET_USER",
  user,
});

export const setUserPrefs = prefs => ({
  type: "SET_USER_PREFS",
  prefs,
});

export const setSubscriptions = subscriptions => ({
  type: "SET_SUBSCRIPTIONS",
  subscriptions,
});
export const setMultireddits = multis => ({
  type: "SET_MULTIREDDITS",
  multis,
});

// export const setCurrentPostId = id => ({
//   type: "SET_CURRENT_POST_ID",
//   id,
// });

export const setLocationName = name => ({
  type: "SET_LOCATION_NAME",
  name,
});

// export const addPost = post => ({
//   type: "ADD_POST",
//   post,
// });

export const addSubreddit = subredditInfo => ({
  type: "ADD_SUBREDDIT",
  subredditInfo,
});

// export const setHot = (listing, subredditName) => ({
//   type: "SET_HOT",
//   listing,
//   subredditName,
// });

// export const addHot = (listing, subredditName) => ({
//   type: "ADD_HOT",
//   listing,
//   subredditName,
// });

// export const clearHot = subredditName => ({
//   type: "ADD_HOT",
//   subredditName,
// });

export const toggleLightboxIsOpen = () => ({ type: "TOGGLE_LIGHTBOX_IS_OPEN" });

export const setCurrentPost = post => ({ type: "SET_CURRENT_POST", post });

export const setUseSystemTheme = bool => ({
  type: "SET_USE_SYSTEM_THEME",
  bool,
});

export const addSubredditTheme = (subredditName, theme) => ({
  type: "ADD_SUBREDDIT_THEME",
  subredditName,
  theme,
});

export const addColorTheme = (color, theme) => ({
  type: "ADD_COLOR_THEME",
  color,
  theme,
});
