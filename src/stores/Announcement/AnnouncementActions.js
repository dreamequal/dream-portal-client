export const FETCH_ANNOUNCEMENTS_PENDING = "FETCH_ANNOUNCEMENTS_PENDING";
export const FETCH_ANNOUNCEMENTS_SUCCESS = "FETCH_ANNOUNCEMENTS_SUCCESS";
export const FETCH_ANNOUNCEMENTS_ERROR = "FETCH_ANNOUNCEMENTS_ERROR";

export const CREATE_ANNOUNCEMENT_PENDING = "CREATE_ANNOUNCEMENT_PENDING";
export const CREATE_ANNOUNCEMENT_SUCCESS = "CREATE_ANNOUNCEMENT_SUCCESS";
export const CREATE_ANNOUNCEMENT_ERROR = "CREATE_ANNOUNCEMENT_ERROR";

/**
 * Fetch announcements
 */
export const fetchAnnouncementsPending = () => {
    return {
        type: FETCH_ANNOUNCEMENTS_PENDING
    }
}

export const fetchAnnouncementsSuccess = (payload) => {
    return {
        type: FETCH_ANNOUNCEMENTS_SUCCESS,
        payload,
    }
}

export const fetchAnnouncementsError = (error) => {
    return {
        type: FETCH_ANNOUNCEMENTS_ERROR,
        error,
    }
}

/**
 * Create announcement
 */
export const createAnnouncementPending = () => {
    return {
        type: CREATE_ANNOUNCEMENT_PENDING
    }
}

export const createAnnouncementSuccess = (payload) => {
    return {
        type: CREATE_ANNOUNCEMENT_SUCCESS,
        payload,
    }
}

export const createAnnouncementError = (error) => {
    return {
        type: CREATE_ANNOUNCEMENT_ERROR,
        error,
    }
}