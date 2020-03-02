import { ApiFetch } from "../../utils/api";

import {
    // Fetch
    fetchAnnouncementsPending,
    fetchAnnouncementsSuccess,
    fetchAnnouncementsError,
    // Create
    createAnnouncementPending,
    createAnnouncementSuccess,
    createAnnouncementError,
} from "./AnnouncementActions";

export const fetchAnnouncements = (token, page, perPage) => {
    return dispatch => {
        dispatch(fetchAnnouncementsPending());

        ApiFetch("announcements", {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`,
            },
            params: {
                page,
                perPage,
            },
        })
            .then(res => res.data)
            .then(res => {
                if (res.error) {
                    throw(res.error);
                }
                dispatch(fetchAnnouncementsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchAnnouncementsError(error));
            })
    }
};

export const createAnnouncement = (token, announcement) => {
    return dispatch => {
        dispatch(createAnnouncementPending());

        ApiFetch("announcements", {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json"
            },
            data: { content: announcement },
        })
            .then(res => res.data)
            .then(res => {
                if (res.message) {
                    throw(res.message);
                }
                dispatch(createAnnouncementSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(createAnnouncementError(error));
            })
    }
};