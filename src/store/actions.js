import { getEmails } from "../services";

export const MARKREAD = "MARKREAD";
export const MARKFAVORITE = "MARKFAVORITE";
export const UNMARKFAVORITE = "UNMARKFAVORITE";
export const FETCHMAILS = "FETCH_MAILS";
export const UPDATEFILTER = "UPDATEFILTER";

const fetchMailsSuccess = (emails) => ({
  type: FETCHMAILS,
  payload: { emails },
});

export const onSelect = (id) => ({ type: MARKREAD, payload: { id } });

export const onFilterChange = (filter) => ({
  type: UPDATEFILTER,
  payload: { filter },
});

export const onMarkFavorite = (id) => ({
  type: MARKFAVORITE,
  payload: { id },
});

export const onUnMarkFavorite = (id) => ({
  type: UNMARKFAVORITE,
  payload: { id },
});

export const fetchMails = () => {
  return async (dispatch) => {
    try {
      let emails = await getEmails();
      dispatch(fetchMailsSuccess(emails));
    } catch (e) {
      console.log(e);
    }
  };
};
